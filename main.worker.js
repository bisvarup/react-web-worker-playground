/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/prime.js":
/*!****************************!*\
  !*** ./src/utils/prime.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPrime": () => /* binding */ isPrime,
/* harmony export */   "nthPrime": () => /* binding */ nthPrime
/* harmony export */ });
var isPrime = function isPrime(num) {
  if (num <= 1) return true;

  for (var i = 2; i < num; i += 1) {
    if (num % i == 0) return false;
  }

  return true;
};
var nthPrime = function nthPrime(n) {
  var ans;

  for (var i = 1;; i += 1) {
    if (isPrime(i) === true) {
      ans = i;
      n--;
    }

    if (n === 0) return ans;
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[1].use[1]!./node_modules/babel-loader/lib/index.js!./src/prime.worker.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[1].use[1]!./node_modules/babel-loader/lib/index.js!./src/prime.worker.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_prime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/prime */ "./src/utils/prime.js");


onmessage = function onmessage(oEvent) {
  console.log("::Start Prime Calculation from worker::");
  var t0 = performance.now();
  (0,_utils_prime__WEBPACK_IMPORTED_MODULE_0__.nthPrime)(40000);
  var t1 = performance.now();
  var diff = Math.round(t1 - t0);
  console.log("::Stop Prime Calculation from worker::");
  postMessage(diff);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[1].use[1]!./node_modules/babel-loader/lib/index.js!./src/prime.worker.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.worker.js.map