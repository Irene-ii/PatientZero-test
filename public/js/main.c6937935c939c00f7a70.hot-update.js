self["webpackHotUpdatereact_shopping_cart"]("main",{

/***/ "./src/client/Cart/Item/Item.tsx":
/*!***************************************!*\
  !*** ./src/client/Cart/Item/Item.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Item_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.styles */ "./src/client/Cart/Item/Item.styles.ts");
/* harmony import */ var _ItemDetail_ItemDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ItemDetail/ItemDetail */ "./src/client/Cart/ItemDetail/ItemDetail.tsx");
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

// Styles


var Item = function (_b) {
    var item = _b.item, handleAddToCart = _b.handleAddToCart;
    return (
    // const [open, setOpen] = useState(false);
    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
    // const handleClose = () => {
    //   setOpen(false);
    // };
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, __assign({ onClick: function () { return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ItemDetail_ItemDetail__WEBPACK_IMPORTED_MODULE_2__.default, { item: item }, void 0); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.Image, { src: item.image, alt: item.title }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.StyledTypography, { children: item.title }, void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.StyledTypography, { children: ["$", item.price] }, void 0)] }, void 0)] }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.StyledToolTips, __assign({ title: "Add one to cart", placement: "bottom" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.StyledButton, __assign({ onClick: handleClickOpen, "data-cy": "add-to-cart-" + item.id }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.StyledAddIcon, {}, void 0) }), void 0) }), void 0)] }, void 0));
};
_a = Item;
__webpack_require__.$Refresh$.register(_a, "Item");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
/******/ 	__webpack_require__.h = () => ("db80de553faa7ff5c2e2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0l0ZW0vSXRlbS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7QUFDL0Q7QUFDNEg7QUFDMUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFLLENBQUMsaURBQU8sZUFBZSx1REFBSyxDQUFDLHFEQUFXLDJDQUEyQyxzREFBSSxDQUFDLDJEQUFVLDZDQUE2QyxzREFBSSxDQUFDLCtDQUFLO0FBQ2xLLG9CQUFvQix1REFBSyxxQkFBcUIsc0RBQUksQ0FBQywwREFBZ0I7QUFDbkUsNEJBQTRCLHVEQUFLLENBQUMsMERBQWdCO0FBQ2xELFlBQVksc0RBQUksQ0FBQyx3REFBYywwRUFBMEUsc0RBQUksQ0FBQyxzREFBWSwwRkFBMEYsc0RBQUksQ0FBQyx1REFBYTtBQUN0TztBQUNBO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ3BCLHNEIiwiZmlsZSI6Im1haW4uYzY5Mzc5MzVjOTM5YzAwZjdhNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX2E7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLy8gU3R5bGVzXG5pbXBvcnQgeyBXcmFwcGVyLCBTdHlsZWRCdXR0b24sIEJ1dHRvbkdyb3VwLCBJbWFnZSwgU3R5bGVkVG9vbFRpcHMsIFN0eWxlZFR5cG9ncmFwaHksIFN0eWxlZEFkZEljb24sIH0gZnJvbSBcIi4vSXRlbS5zdHlsZXNcIjtcbmltcG9ydCBJdGVtRGV0YWlsIGZyb20gXCIuLi9JdGVtRGV0YWlsL0l0ZW1EZXRhaWxcIjtcbnZhciBJdGVtID0gZnVuY3Rpb24gKF9iKSB7XG4gICAgdmFyIGl0ZW0gPSBfYi5pdGVtLCBoYW5kbGVBZGRUb0NhcnQgPSBfYi5oYW5kbGVBZGRUb0NhcnQ7XG4gICAgcmV0dXJuIChcbiAgICAvLyBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xuICAgIC8vICAgc2V0T3Blbih0cnVlKTtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIC8vICAgc2V0T3BlbihmYWxzZSk7XG4gICAgLy8gfTtcbiAgICBfanN4cyhXcmFwcGVyLCB7IGNoaWxkcmVuOiBbX2pzeHMoQnV0dG9uR3JvdXAsIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gX2pzeChJdGVtRGV0YWlsLCB7IGl0ZW06IGl0ZW0gfSwgdm9pZCAwKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChJbWFnZSwgeyBzcmM6IGl0ZW0uaW1hZ2UsIGFsdDogaXRlbS50aXRsZSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChTdHlsZWRUeXBvZ3JhcGh5LCB7IGNoaWxkcmVuOiBpdGVtLnRpdGxlIH0sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoU3R5bGVkVHlwb2dyYXBoeSwgeyBjaGlsZHJlbjogW1wiJFwiLCBpdGVtLnByaWNlXSB9LCB2b2lkIDApXSB9LCB2b2lkIDApXSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goU3R5bGVkVG9vbFRpcHMsIF9fYXNzaWduKHsgdGl0bGU6IFwiQWRkIG9uZSB0byBjYXJ0XCIsIHBsYWNlbWVudDogXCJib3R0b21cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFN0eWxlZEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBoYW5kbGVDbGlja09wZW4sIFwiZGF0YS1jeVwiOiBcImFkZC10by1jYXJ0LVwiICsgaXRlbS5pZCB9LCB7IGNoaWxkcmVuOiBfanN4KFN0eWxlZEFkZEljb24sIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApKTtcbn07XG5fYSA9IEl0ZW07XG4kUmVmcmVzaFJlZyQoX2EsIFwiSXRlbVwiKTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYjgwZGU1NTNmYWE3ZmY1YzJlMlwiKSJdLCJzb3VyY2VSb290IjoiIn0=