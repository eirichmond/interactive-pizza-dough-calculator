/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'create-block/pizza-dough-calculator', {
	actions: {
		pizzas: ( event ) => {
			const context = getContext();
			context.calculations.numberOf = event.target.value;
			console.log(context);
		},
		weight: ( event ) => {
			const context = getContext();
			context.calculations.weightOf = event.target.value;
			console.log(context);
		}
	}
} );


