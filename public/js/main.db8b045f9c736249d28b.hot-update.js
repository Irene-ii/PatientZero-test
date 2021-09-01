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



var purchased = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './data/purchased.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Cart = function (_b) {
    var cartItems = _b.cartItems, addToCart = _b.addToCart, removeFromCart = _b.removeFromCart;
    var fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    var calculateTotal = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount * item.price; }, 0);
    };
    // const PurchaseCheese = (items: CartItemType[]) => {
    //   fs.appendFile(purchased, items, function (err) {
    //     if (err) throw err;
    //     console.log("Added!");
    //   });
    // };
    var PurchaseCheese = function (items) { return fetch("/api/addItems"); };
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
/******/ 	__webpack_require__.h = () => ("48f0d03b34153bbe1090")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0NhcnQudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ3BCO0FBQ1c7QUFDdEQsZ0JBQWdCLG1CQUFPLENBQUMsb0pBQXVCO0FBQy9DO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsaUlBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLENBQUMsaURBQU8sZUFBZSxzREFBSTtBQUM1QyxxQ0FBcUMsc0RBQUk7QUFDekMsb0RBQW9ELHNEQUFJLENBQUMsdURBQVE7QUFDakUsWUFBWSx1REFBSztBQUNqQiw2Q0FBNkMsc0RBQUksQ0FBQyxzREFBWTtBQUM5RDtBQUNBO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ3BCLHNEIiwiZmlsZSI6Im1haW4uZGI4YjA0NWY5YzczNjI0OWQyOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX2E7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IENhcnRJdGVtIGZyb20gXCIuL0NhcnRJdGVtL0NhcnRJdGVtXCI7XG5pbXBvcnQgeyBXcmFwcGVyLCBTdHlsZWRCdXR0b24gfSBmcm9tIFwiLi9DYXJ0LnN0eWxlc1wiO1xudmFyIHB1cmNoYXNlZCA9IHJlcXVpcmUoXCIuL2RhdGEvcHVyY2hhc2VkLmpzb25cIik7XG52YXIgQ2FydCA9IGZ1bmN0aW9uIChfYikge1xuICAgIHZhciBjYXJ0SXRlbXMgPSBfYi5jYXJ0SXRlbXMsIGFkZFRvQ2FydCA9IF9iLmFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQgPSBfYi5yZW1vdmVGcm9tQ2FydDtcbiAgICB2YXIgZnMgPSByZXF1aXJlKFwiZnNcIik7XG4gICAgdmFyIGNhbGN1bGF0ZVRvdGFsID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjaywgaXRlbSkgeyByZXR1cm4gYWNrICsgaXRlbS5hbW91bnQgKiBpdGVtLnByaWNlOyB9LCAwKTtcbiAgICB9O1xuICAgIC8vIGNvbnN0IFB1cmNoYXNlQ2hlZXNlID0gKGl0ZW1zOiBDYXJ0SXRlbVR5cGVbXSkgPT4ge1xuICAgIC8vICAgZnMuYXBwZW5kRmlsZShwdXJjaGFzZWQsIGl0ZW1zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgLy8gICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJBZGRlZCFcIik7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9O1xuICAgIHZhciBQdXJjaGFzZUNoZWVzZSA9IGZ1bmN0aW9uIChpdGVtcykgeyByZXR1cm4gZmV0Y2goXCIvYXBpL2FkZEl0ZW1zXCIpOyB9O1xuICAgIHJldHVybiAoX2pzeHMoV3JhcHBlciwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiBcIllvdXIgU2hvcHBpbmcgQ2FydFwiIH0sIHZvaWQgMCksXG4gICAgICAgICAgICBjYXJ0SXRlbXMubGVuZ3RoID09PSAwID8gX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJObyBpdGVtcyBpbiBjYXJ0LlwiIH0sIHZvaWQgMCkgOiBudWxsLFxuICAgICAgICAgICAgY2FydEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKF9qc3goQ2FydEl0ZW0sIHsgaXRlbTogaXRlbSwgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0OiByZW1vdmVGcm9tQ2FydCB9LCBpdGVtLmlkKSk7IH0pLFxuICAgICAgICAgICAgX2pzeHMoXCJoMlwiLCB7IGNoaWxkcmVuOiBbXCJUb3RhbDogJFwiLCBjYWxjdWxhdGVUb3RhbChjYXJ0SXRlbXMpLnRvRml4ZWQoMildIH0sIHZvaWQgMCksXG4gICAgICAgICAgICBjYXJ0SXRlbXMubGVuZ3RoID09PSAwID8gbnVsbCA6IChfanN4KFN0eWxlZEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQdXJjaGFzZUNoZWVzZShjYXJ0SXRlbXMpOyB9IH0sIHsgY2hpbGRyZW46IFwiUHVyY2hhc2VcIiB9KSwgdm9pZCAwKSldIH0sIHZvaWQgMCkpO1xufTtcbl9hID0gQ2FydDtcbiRSZWZyZXNoUmVnJChfYSwgXCJDYXJ0XCIpO1xuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ4ZjBkMDNiMzQxNTNiYmUxMDkwXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==