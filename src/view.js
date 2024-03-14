/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

// the bakers equation
function calculate_dough(context) {

	// use object destructuring to extract specific properties
	const { calculations, ingredients } = context;

	// conditionally changing variables so use let
	let bakersBase = calculations.hydrationOf / 95 + 1;

	ingredients.flour = Math.ceil(calculations.numberOf * calculations.weightOf / bakersBase);
	ingredients.water = Math.ceil(calculations.numberOf * calculations.weightOf / bakersBase / 100 * calculations.hydrationOf);

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


