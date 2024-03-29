import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */


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
  let {
    unitFlourKg,
    unitWaterL,
    unitSaltKg,
    unitOilL,
    unitYeastKg
  } = context;

  // use object destructuring to extract specific properties
  const {
    calculations,
    ingredients
  } = context;

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
(0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block/pizza-dough-calculator', {
  actions: {
    pizzas: event => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.calculations.numberOf = event.target.value;
      calculate_dough(context);
    },
    weight: event => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.calculations.weightOf = event.target.value;
      calculate_dough(context);
    },
    hydration: event => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.calculations.hydrationOf = event.target.value;
      calculate_dough(context);
    }
  }
});
})();


//# sourceMappingURL=view.js.map