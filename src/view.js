/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

// the bakers equation
function calculate_dough(context) {

	// use object destructuring to extract specific properties
	const { calculations, ingredients } = context;

	ingredients.flour = Math.ceil(calculations.numberOf * calculations.weightOf);
	ingredients.water = Math.ceil(calculations.numberOf * calculations.weightOf);

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
		}
	}
} );


