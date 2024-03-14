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

	ingredients.water = Math.ceil(calculations.numberOf * calculations.weightOf / bakersBase / 100 * calculations.hydrationOf);
	ingredients.oil = Math.ceil(ingredients.water / 100 * 2);

	const oil = convertToMetricIfNeeded(ingredients.oil, 1000, 'unitOilL');
	context.unitOilL = oil.unit;
	ingredients.oil = oil.value;

	ingredients.water = ingredients.water - ingredients.oil;

	const water = convertToMetricIfNeeded(ingredients.water, 1000, 'unitWaterL');
	context.unitWaterL = water.unit;
	ingredients.water = water.value;

	ingredients.salt = Math.ceil(Math.ceil(calculations.numberOf * calculations.weightOf / bakersBase) / 100 * 3);

	const salt = convertToMetricIfNeeded(ingredients.salt, 1000, 'unitSaltKg');
	context.unitSaltKg = salt.unit;
	ingredients.salt = salt.value;

	ingredients.yeast = Math.ceil(calculations.weightOf * calculations.numberOf / 100 * 0.115);

	const yeast = convertToMetricIfNeeded(ingredients.yeast, 1000, 'unitYeastKg');
	context.unitYeastKg = yeast.unit;
	ingredients.yeast = yeast.value;

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


