/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

// convert decimal and units if over a threshold
function convertToMetricIfNeeded(ingredient, threshold, unitProperty) {
    if (ingredient > threshold) {
        return {
            value: (ingredient / 1000).toFixed(3),
            unit: 'kg'
        };
    } else {
        return {
            value: ingredient,
            unit: 'g'
        };
    }
}

// the bakers equation
function calculate_dough(context) {

	// conditionally changing variables so use let
	let { unitFlourKg, unitWaterL, unitSaltKg, unitOilL, unitYeastKg } = context;

	// use object destructuring to extract specific properties
	const { calculations, ingredients } = context;

	// conditionally changing variables so use let
	let bakersBase = calculations.hydrationOf / 95 + 1;

	
	ingredients.flour = Math.ceil(calculations.numberOf * calculations.weightOf / bakersBase);
	
	const flour = convertToMetricIfNeeded(ingredients.flour, 1000, 'unitFlourKg');
	context.unitFlourKg = flour.unit;
	ingredients.flour = flour.value;

	// if ( ingredients.flour > 1000 ) {
	// 	ingredients.flour = ( ingredients.flour / 1000 ).toFixed(3);
	// 	context.unitFlourKg = 'kg';
	// } else {
	// 	context.unitFlourKg = 'g';
	// }

	ingredients.water = Math.ceil(calculations.numberOf * calculations.weightOf / bakersBase / 100 * calculations.hydrationOf);
	ingredients.oil = Math.ceil(ingredients.water / 100 * 2);

	if ( ingredients.oil > 1000 ) {
		ingredients.oil = ( ingredients.oil / 1000 ).toFixed(3);
		context.unitOilL = 'L';
	} else {
		context.unitOilL = 'ml';
	}

	ingredients.water = ingredients.water - ingredients.oil;

	if ( ingredients.water > 1000 ) {
		ingredients.water = ( ingredients.water / 1000 ).toFixed(3);
		context.unitWaterL = 'L';
	} else {
		context.unitWaterL = 'ml';
	}

	ingredients.salt = Math.ceil(Math.ceil(calculations.numberOf * calculations.weightOf / bakersBase) / 100 * 3);

	if ( ingredients.salt > 1000 ) {
		ingredients.salt = ( ingredients.salt / 1000 ).toFixed(3);
		context.unitSaltKg = 'kg';
	} else {
		context.unitSaltKg = 'g';
	}

	ingredients.yeast = Math.ceil(calculations.weightOf * calculations.numberOf / 100 * 0.115);

	if ( ingredients.yeast > 1000 ) {
		ingredients.yeast = ( ingredients.yeast / 1000 ).toFixed(3);
		context.unitYeastKg = 'kg';
	} else {
		context.unitYeastKg = 'g';
	}

}

store( 'create-block/pizza-dough-calculator', {
	actions: {
		pizzas: ( event ) => {
			const context = getContext();
			context.calculations.numberOf = event.target.value;
			calculate_dough(context);
		},
		weight: ( event ) => {
			const context = getContext();
			context.calculations.weightOf = event.target.value;
			calculate_dough(context);
		},
		hydration: ( event ) => {
			const context = getContext();
			context.calculations.hydrationOf = event.target.value;
			calculate_dough(context);
		},
	}
} );


