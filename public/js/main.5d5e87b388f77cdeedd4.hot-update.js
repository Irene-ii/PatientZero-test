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



var Cart = function (_b) {
    var cartItems = _b.cartItems, addToCart = _b.addToCart, removeFromCart = _b.removeFromCart;
    // var fs = require("fs");
    var calculateTotal = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount * item.price; }, 0);
    };
    var PurchaseCheese = function (items) {
        // fs.appendFile(purchased, items, function (err) {
        //   if (err) throw err;
        //   console.log("Added!");
        // });
        console.log(JSON.stringify(items));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7439819d15b3c26dd47a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0NhcnQudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ3BCO0FBQ1c7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQUssQ0FBQyxpREFBTyxlQUFlLHNEQUFJO0FBQzVDLHFDQUFxQyxzREFBSTtBQUN6QyxvREFBb0Qsc0RBQUksQ0FBQyx1REFBUTtBQUNqRSxZQUFZLHVEQUFLO0FBQ2pCLDZDQUE2QyxzREFBSSxDQUFDLHNEQUFZO0FBQzlEO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDcEIsc0QiLCJmaWxlIjoibWFpbi41ZDVlODdiMzg4Zjc3Y2RlZWRkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfYTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSBcIi4vQ2FydEl0ZW0vQ2FydEl0ZW1cIjtcbmltcG9ydCB7IFdyYXBwZXIsIFN0eWxlZEJ1dHRvbiB9IGZyb20gXCIuL0NhcnQuc3R5bGVzXCI7XG52YXIgQ2FydCA9IGZ1bmN0aW9uIChfYikge1xuICAgIHZhciBjYXJ0SXRlbXMgPSBfYi5jYXJ0SXRlbXMsIGFkZFRvQ2FydCA9IF9iLmFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQgPSBfYi5yZW1vdmVGcm9tQ2FydDtcbiAgICAvLyB2YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XG4gICAgdmFyIGNhbGN1bGF0ZVRvdGFsID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjaywgaXRlbSkgeyByZXR1cm4gYWNrICsgaXRlbS5hbW91bnQgKiBpdGVtLnByaWNlOyB9LCAwKTtcbiAgICB9O1xuICAgIHZhciBQdXJjaGFzZUNoZWVzZSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAvLyBmcy5hcHBlbmRGaWxlKHB1cmNoYXNlZCwgaXRlbXMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8gICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJBZGRlZCFcIik7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuICAgIH07XG4gICAgLy8gY29uc3QgUHVyY2hhc2VDaGVlc2UgPSAoaXRlbXM6IENhcnRJdGVtVHlwZVtdKSA9PiBmZXRjaChgL2FwaS9hZGRJdGVtc2ApO1xuICAgIHJldHVybiAoX2pzeHMoV3JhcHBlciwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiBcIllvdXIgU2hvcHBpbmcgQ2FydFwiIH0sIHZvaWQgMCksXG4gICAgICAgICAgICBjYXJ0SXRlbXMubGVuZ3RoID09PSAwID8gX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJObyBpdGVtcyBpbiBjYXJ0LlwiIH0sIHZvaWQgMCkgOiBudWxsLFxuICAgICAgICAgICAgY2FydEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKF9qc3goQ2FydEl0ZW0sIHsgaXRlbTogaXRlbSwgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0OiByZW1vdmVGcm9tQ2FydCB9LCBpdGVtLmlkKSk7IH0pLFxuICAgICAgICAgICAgX2pzeHMoXCJoMlwiLCB7IGNoaWxkcmVuOiBbXCJUb3RhbDogJFwiLCBjYWxjdWxhdGVUb3RhbChjYXJ0SXRlbXMpLnRvRml4ZWQoMildIH0sIHZvaWQgMCksXG4gICAgICAgICAgICBjYXJ0SXRlbXMubGVuZ3RoID09PSAwID8gbnVsbCA6IChfanN4KFN0eWxlZEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQdXJjaGFzZUNoZWVzZShjYXJ0SXRlbXMpOyB9IH0sIHsgY2hpbGRyZW46IFwiUHVyY2hhc2VcIiB9KSwgdm9pZCAwKSldIH0sIHZvaWQgMCkpO1xufTtcbl9hID0gQ2FydDtcbiRSZWZyZXNoUmVnJChfYSwgXCJDYXJ0XCIpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc0Mzk4MTlkMTViM2MyNmRkNDdhXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==