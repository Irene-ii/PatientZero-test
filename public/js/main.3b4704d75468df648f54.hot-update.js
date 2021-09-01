self["webpackHotUpdatereact_shopping_cart"]("main",{

/***/ "./src/client/Cart/Cart.tsx":
/*!**********************************!*\
  !*** ./src/client/Cart/Cart.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _CartItem_CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem/CartItem */ "./src/client/Cart/CartItem/CartItem.tsx");
/* harmony import */ var _Cart_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.styles */ "./src/client/Cart/Cart.styles.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;



var purchased = __webpack_require__(/*! ../../server/data/purchased.json */ "./src/server/data/purchased.json");
var Cart = function (_b) {
    var cartItems = _b.cartItems, addToCart = _b.addToCart, removeFromCart = _b.removeFromCart;
    var fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    var calculateTotal = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount * item.price; }, 0);
    };
    var PurchaseCheese = function (items) {
        fs.appendFile(purchased, items, function (err) {
            if (err)
                throw err;
            console.log("Added!");
        });
    };
    // const PurchaseCheese = (items: CartItemType[]) => fetch(`/api/addItems`);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Cart_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Your Shopping Cart" }, void 0),
            cartItems.length === 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "No items in cart." }, void 0) : null,
            cartItems.map(function (item) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_1__.default, { item: item, addToCart: addToCart, removeFromCart: removeFromCart }, item.id)); }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", { children: ["Total: $", calculateTotal(cartItems).toFixed(2)] }, void 0),
            cartItems.length === 0 ? null : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cart_styles__WEBPACK_IMPORTED_MODULE_2__.StyledButton, __assign({ onClick: function () { return PurchaseCheese(cartItems); } }, { children: "Purchase" }), void 0))] }, void 0));
};
_a = Cart;
__webpack_require__.$Refresh$.register(_a, "Cart");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/server/data/purchased.json":
/*!****************************************!*\
  !*** ./src/server/data/purchased.json ***!
  \****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected end of JSON input while parsing near ''\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\nSyntaxError: Unexpected end of JSON input while parsing near ''\n    at JSON.parse (<anonymous>)\n    at parseJson (/Users/faj/Desktop/PatientZero-test/node_modules/json-parse-better-errors/index.js:7:17)\n    at JsonParser.parse (/Users/faj/Desktop/PatientZero-test/node_modules/webpack/lib/json/JsonParser.js:42:7)\n    at /Users/faj/Desktop/PatientZero-test/node_modules/webpack/lib/NormalModule.js:999:26\n    at processResult (/Users/faj/Desktop/PatientZero-test/node_modules/webpack/lib/NormalModule.js:732:11)\n    at /Users/faj/Desktop/PatientZero-test/node_modules/webpack/lib/NormalModule.js:792:5\n    at /Users/faj/Desktop/PatientZero-test/node_modules/loader-runner/lib/LoaderRunner.js:406:3\n    at iterateNormalLoaders (/Users/faj/Desktop/PatientZero-test/node_modules/loader-runner/lib/LoaderRunner.js:232:10)\n    at Array.<anonymous> (/Users/faj/Desktop/PatientZero-test/node_modules/loader-runner/lib/LoaderRunner.js:223:4)\n    at runCallbacks (/Users/faj/Desktop/PatientZero-test/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("496454476bf9e0cacef1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0NhcnQudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ3BCO0FBQ1c7QUFDdEQsZ0JBQWdCLG1CQUFPLENBQUMsMEVBQWtDO0FBQzFEO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsaUlBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQUssQ0FBQyxpREFBTyxlQUFlLHNEQUFJO0FBQzVDLHFDQUFxQyxzREFBSTtBQUN6QyxvREFBb0Qsc0RBQUksQ0FBQyx1REFBUTtBQUNqRSxZQUFZLHVEQUFLO0FBQ2pCLDZDQUE2QyxzREFBSSxDQUFDLHNEQUFZO0FBQzlEO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q3BCLHNEIiwiZmlsZSI6Im1haW4uM2I0NzA0ZDc1NDY4ZGY2NDhmNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX2E7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IENhcnRJdGVtIGZyb20gXCIuL0NhcnRJdGVtL0NhcnRJdGVtXCI7XG5pbXBvcnQgeyBXcmFwcGVyLCBTdHlsZWRCdXR0b24gfSBmcm9tIFwiLi9DYXJ0LnN0eWxlc1wiO1xudmFyIHB1cmNoYXNlZCA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGF0YS9wdXJjaGFzZWQuanNvblwiKTtcbnZhciBDYXJ0ID0gZnVuY3Rpb24gKF9iKSB7XG4gICAgdmFyIGNhcnRJdGVtcyA9IF9iLmNhcnRJdGVtcywgYWRkVG9DYXJ0ID0gX2IuYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCA9IF9iLnJlbW92ZUZyb21DYXJ0O1xuICAgIHZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgICB2YXIgY2FsY3VsYXRlVG90YWwgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbiAoYWNrLCBpdGVtKSB7IHJldHVybiBhY2sgKyBpdGVtLmFtb3VudCAqIGl0ZW0ucHJpY2U7IH0sIDApO1xuICAgIH07XG4gICAgdmFyIFB1cmNoYXNlQ2hlZXNlID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIGZzLmFwcGVuZEZpbGUocHVyY2hhc2VkLCBpdGVtcywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIVwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBjb25zdCBQdXJjaGFzZUNoZWVzZSA9IChpdGVtczogQ2FydEl0ZW1UeXBlW10pID0+IGZldGNoKGAvYXBpL2FkZEl0ZW1zYCk7XG4gICAgcmV0dXJuIChfanN4cyhXcmFwcGVyLCB7IGNoaWxkcmVuOiBbX2pzeChcImgyXCIsIHsgY2hpbGRyZW46IFwiWW91ciBTaG9wcGluZyBDYXJ0XCIgfSwgdm9pZCAwKSxcbiAgICAgICAgICAgIGNhcnRJdGVtcy5sZW5ndGggPT09IDAgPyBfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIk5vIGl0ZW1zIGluIGNhcnQuXCIgfSwgdm9pZCAwKSA6IG51bGwsXG4gICAgICAgICAgICBjYXJ0SXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoX2pzeChDYXJ0SXRlbSwgeyBpdGVtOiBpdGVtLCBhZGRUb0NhcnQ6IGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQ6IHJlbW92ZUZyb21DYXJ0IH0sIGl0ZW0uaWQpKTsgfSksXG4gICAgICAgICAgICBfanN4cyhcImgyXCIsIHsgY2hpbGRyZW46IFtcIlRvdGFsOiAkXCIsIGNhbGN1bGF0ZVRvdGFsKGNhcnRJdGVtcykudG9GaXhlZCgyKV0gfSwgdm9pZCAwKSxcbiAgICAgICAgICAgIGNhcnRJdGVtcy5sZW5ndGggPT09IDAgPyBudWxsIDogKF9qc3goU3R5bGVkQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFB1cmNoYXNlQ2hlZXNlKGNhcnRJdGVtcyk7IH0gfSwgeyBjaGlsZHJlbjogXCJQdXJjaGFzZVwiIH0pLCB2b2lkIDApKV0gfSwgdm9pZCAwKSk7XG59O1xuX2EgPSBDYXJ0O1xuJFJlZnJlc2hSZWckKF9hLCBcIkNhcnRcIik7XG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDk2NDU0NDc2YmY5ZTBjYWNlZjFcIikiXSwic291cmNlUm9vdCI6IiJ9