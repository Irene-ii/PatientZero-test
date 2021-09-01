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
    var calculateTotal = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount * item.price; }, 0);
    };
    var PurchaseCheese = function (items) {
        var fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        fs.appendFile(purchased, JSON.stringify(items), function (err) {
            if (err)
                throw err;
            console.log("Added!");
        });
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
/******/ 	__webpack_require__.h = () => ("d8d65d0bc0be2f78dd3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0NhcnQudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ3BCO0FBQ1c7QUFDdEQsZ0JBQWdCLG1CQUFPLENBQUMsMEVBQWtDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGlJQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLENBQUMsaURBQU8sZUFBZSxzREFBSTtBQUM1QyxxQ0FBcUMsc0RBQUk7QUFDekMsb0RBQW9ELHNEQUFJLENBQUMsdURBQVE7QUFDakUsWUFBWSx1REFBSztBQUNqQiw2Q0FBNkMsc0RBQUksQ0FBQyxzREFBWTtBQUM5RDtBQUNBO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q3BCLHNEIiwiZmlsZSI6Im1haW4uZWMwOTI4MzA3OWFkNTYyZDUyNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX2E7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IENhcnRJdGVtIGZyb20gXCIuL0NhcnRJdGVtL0NhcnRJdGVtXCI7XG5pbXBvcnQgeyBXcmFwcGVyLCBTdHlsZWRCdXR0b24gfSBmcm9tIFwiLi9DYXJ0LnN0eWxlc1wiO1xudmFyIHB1cmNoYXNlZCA9IHJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGF0YS9wdXJjaGFzZWQuanNvblwiKTtcbnZhciBDYXJ0ID0gZnVuY3Rpb24gKF9iKSB7XG4gICAgdmFyIGNhcnRJdGVtcyA9IF9iLmNhcnRJdGVtcywgYWRkVG9DYXJ0ID0gX2IuYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCA9IF9iLnJlbW92ZUZyb21DYXJ0O1xuICAgIHZhciBjYWxjdWxhdGVUb3RhbCA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhY2ssIGl0ZW0pIHsgcmV0dXJuIGFjayArIGl0ZW0uYW1vdW50ICogaXRlbS5wcmljZTsgfSwgMCk7XG4gICAgfTtcbiAgICB2YXIgUHVyY2hhc2VDaGVlc2UgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgdmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xuICAgICAgICBmcy5hcHBlbmRGaWxlKHB1cmNoYXNlZCwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkZWQhXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgICB9O1xuICAgIC8vIGNvbnN0IFB1cmNoYXNlQ2hlZXNlID0gKGl0ZW1zOiBDYXJ0SXRlbVR5cGVbXSkgPT4gZmV0Y2goYC9hcGkvYWRkSXRlbXNgKTtcbiAgICByZXR1cm4gKF9qc3hzKFdyYXBwZXIsIHsgY2hpbGRyZW46IFtfanN4KFwiaDJcIiwgeyBjaGlsZHJlbjogXCJZb3VyIFNob3BwaW5nIENhcnRcIiB9LCB2b2lkIDApLFxuICAgICAgICAgICAgY2FydEl0ZW1zLmxlbmd0aCA9PT0gMCA/IF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiTm8gaXRlbXMgaW4gY2FydC5cIiB9LCB2b2lkIDApIDogbnVsbCxcbiAgICAgICAgICAgIGNhcnRJdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIChfanN4KENhcnRJdGVtLCB7IGl0ZW06IGl0ZW0sIGFkZFRvQ2FydDogYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydDogcmVtb3ZlRnJvbUNhcnQgfSwgaXRlbS5pZCkpOyB9KSxcbiAgICAgICAgICAgIF9qc3hzKFwiaDJcIiwgeyBjaGlsZHJlbjogW1wiVG90YWw6ICRcIiwgY2FsY3VsYXRlVG90YWwoY2FydEl0ZW1zKS50b0ZpeGVkKDIpXSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgY2FydEl0ZW1zLmxlbmd0aCA9PT0gMCA/IG51bGwgOiAoX2pzeChTdHlsZWRCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHVyY2hhc2VDaGVlc2UoY2FydEl0ZW1zKTsgfSB9LCB7IGNoaWxkcmVuOiBcIlB1cmNoYXNlXCIgfSksIHZvaWQgMCkpXSB9LCB2b2lkIDApKTtcbn07XG5fYSA9IENhcnQ7XG4kUmVmcmVzaFJlZyQoX2EsIFwiQ2FydFwiKTtcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOGQ2NWQwYmMwYmUyZjc4ZGQzZlwiKSJdLCJzb3VyY2VSb290IjoiIn0=