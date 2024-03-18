<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div <?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block/pizza-dough-calculator"
	data-wp-context='{
		"calculations": {
			"numberOf":0,
			"weightOf":0,
			"hydrationOf":0 
		},
		"ingredients": {
			"flour":0,
			"water":0,
			"oil":0,
			"salt":0,
			"yeast":0
		},
		"unitFlourKg":"g",
		"unitWaterL":"ml",
		"unitOilL":"ml",
		"unitSaltKg":"g",
		"unitYeastKg":"g"
	}'
>
	<div class="panel">
		<p>Dough Prep Information</p>
		<div class="form-group">
			<input type="number" placeholder="No. of Pizza" data-wp-on--keyup="actions.pizzas">
		</div>

		<div class="form-group">
			<input type="number" placeholder="Weight of doughball (g)" data-wp-on--keyup="actions.weight">
		</div>

		<div class="form-group">
			<input type="number" name="hydration" placeholder="Hydration (%)" data-wp-on--keyup="actions.hydration">
		</div>
	</div>

	<div class="panel">
		<p>Here's the ingredients you'll need.</p>
		<div class="normal-group">
			<div class="ingredients">Flour :
				<span data-wp-text="context.ingredients.flour"></span>
				<span data-wp-text="context.unitFlourKg"></span>
			</div>
		</div>

		<div class="normal-group">
			<div class="ingredients">Water :
				<span data-wp-text="context.ingredients.water"></span>
				<span data-wp-text="context.unitWaterL"></span>
			</div>
		</div>

		<div class="normal-group">
			<div class="ingredients">Oil :
				<span data-wp-text="context.ingredients.oil"></span>
				<span data-wp-text="context.unitOilL"></span>
			</div>
		</div>

		<div class="normal-group">
			<div class="ingredients">Salt : 
				<span data-wp-text="context.ingredients.salt"></span>
				<span data-wp-text="context.unitSaltKg"></span>
			</div>
		</div>

		<div class="normal-group">
			<div class="ingredients">Yeast : 
				<span data-wp-text="context.ingredients.yeast"></span>
				<span data-wp-text="context.unitYeastKg"></span>
			</div>
		</div>
	</div>
			
</div>