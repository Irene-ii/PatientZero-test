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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Item_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.styles */ "./src/client/Cart/Item/Item.styles.ts");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
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
var _b;
_b = __webpack_require__.$Refresh$.signature();


// Styles







var Item = _b(function (_c) {
    var item = _c.item, handleAddToCart = _c.handleAddToCart;
    _b();
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), open = _d[0], setOpen = _d[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, __assign({ onClick: function () { return handleClickOpen(); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.Image, { src: item.image, alt: item.title }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTypography, { children: item.title }, void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTypography, { children: ["$", item.price] }, void 0)] }, void 0)] }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledToolTips, __assign({ title: "Add one to cart", placement: "bottom" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledButton, __assign({ onClick: function () { return handleAddToCart(item); }, "data-cy": "add-to-cart-" + item.id }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledAddIcon, {}, void 0) }), void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__.default, __assign({ open: open, keepMounted: true, onClose: function () { return handleClose(); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.default, { children: item.title }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__.default, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.Image, { src: item.image, alt: item.title }, void 0),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTypography, { children: "Category:" }, void 0), item.category, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTypography, { children: "Price:" }, void 0), "$", item.price, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTypography, { children: "Discription:" }, void 0), item.description] }, void 0) }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.default, __assign({ onClick: function () { return handleClose(); }, color: "primary" }, { children: "Close" }), void 0) }, void 0)] }), void 0)] }, void 0));
}, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
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
/******/ 	__webpack_require__.h = () => ("cdc2fd43cfd04e3d2d5a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0l0ZW0vSXRlbS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUNBQVk7QUFDOEM7QUFDOUI7QUFDakM7QUFDNEg7QUFDOUU7QUFDYztBQUNBO0FBQ1E7QUFDWjtBQUNWO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBSyxDQUFDLGlEQUFPLGVBQWUsdURBQUssQ0FBQyxxREFBVyxnRkFBZ0Ysc0RBQUksQ0FBQywrQ0FBSztBQUNuSixvQkFBb0IsdURBQUsscUJBQXFCLHNEQUFJLENBQUMsMERBQWdCO0FBQ25FLDRCQUE0Qix1REFBSyxDQUFDLDBEQUFnQjtBQUNsRCxZQUFZLHNEQUFJLENBQUMsd0RBQWMsMEVBQTBFLHNEQUFJLENBQUMsc0RBQVksd0hBQXdILHNEQUFJLENBQUMsdURBQWE7QUFDcFEsWUFBWSx1REFBSyxDQUFDLDZEQUFNLDJHQUEyRyxzREFBSSxDQUFDLGtFQUFXO0FBQ25KLG9CQUFvQixzREFBSSxDQUFDLG9FQUFhLGNBQWMsdURBQUssQ0FBQyx3RUFBaUIsZUFBZSxzREFBSSxDQUFDLCtDQUFLO0FBQ3BHLGdDQUFnQyxzREFBSSxDQUFDLDBEQUFnQixxREFBcUQsc0RBQUksQ0FBQywwREFBZ0Isb0RBQW9ELHNEQUFJLENBQUMsMERBQWdCO0FBQ3hNLG9CQUFvQixzREFBSSxDQUFDLG9FQUFhLGNBQWMsc0RBQUksQ0FBQyw2REFBTTtBQUMvRDtBQUNBO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q3BCLHNEIiwiZmlsZSI6Im1haW4uMGU4ZTAyZTUxMjAzYzcyMDIwNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX2E7XG52YXIgX2I7XG5fYiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBTdHlsZXNcbmltcG9ydCB7IFdyYXBwZXIsIFN0eWxlZEJ1dHRvbiwgQnV0dG9uR3JvdXAsIEltYWdlLCBTdHlsZWRUb29sVGlwcywgU3R5bGVkVHlwb2dyYXBoeSwgU3R5bGVkQWRkSWNvbiwgfSBmcm9tIFwiLi9JdGVtLnN0eWxlc1wiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xudmFyIEl0ZW0gPSBfYihmdW5jdGlvbiAoX2MpIHtcbiAgICB2YXIgaXRlbSA9IF9jLml0ZW0sIGhhbmRsZUFkZFRvQ2FydCA9IF9jLmhhbmRsZUFkZFRvQ2FydDtcbiAgICBfYigpO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgb3BlbiA9IF9kWzBdLCBzZXRPcGVuID0gX2RbMV07XG4gICAgdmFyIGhhbmRsZUNsaWNrT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFdyYXBwZXIsIHsgY2hpbGRyZW46IFtfanN4cyhCdXR0b25Hcm91cCwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVDbGlja09wZW4oKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChJbWFnZSwgeyBzcmM6IGl0ZW0uaW1hZ2UsIGFsdDogaXRlbS50aXRsZSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICBfanN4cyhcImRpdlwiLCB7IGNoaWxkcmVuOiBbX2pzeChTdHlsZWRUeXBvZ3JhcGh5LCB7IGNoaWxkcmVuOiBpdGVtLnRpdGxlIH0sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoU3R5bGVkVHlwb2dyYXBoeSwgeyBjaGlsZHJlbjogW1wiJFwiLCBpdGVtLnByaWNlXSB9LCB2b2lkIDApXSB9LCB2b2lkIDApXSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goU3R5bGVkVG9vbFRpcHMsIF9fYXNzaWduKHsgdGl0bGU6IFwiQWRkIG9uZSB0byBjYXJ0XCIsIHBsYWNlbWVudDogXCJib3R0b21cIiB9LCB7IGNoaWxkcmVuOiBfanN4KFN0eWxlZEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVBZGRUb0NhcnQoaXRlbSk7IH0sIFwiZGF0YS1jeVwiOiBcImFkZC10by1jYXJ0LVwiICsgaXRlbS5pZCB9LCB7IGNoaWxkcmVuOiBfanN4KFN0eWxlZEFkZEljb24sIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeHMoRGlhbG9nLCBfX2Fzc2lnbih7IG9wZW46IG9wZW4sIGtlZXBNb3VudGVkOiB0cnVlLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVDbG9zZSgpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KERpYWxvZ1RpdGxlLCB7IGNoaWxkcmVuOiBpdGVtLnRpdGxlIH0sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgIF9qc3goRGlhbG9nQ29udGVudCwgeyBjaGlsZHJlbjogX2pzeHMoRGlhbG9nQ29udGVudFRleHQsIHsgY2hpbGRyZW46IFtfanN4KEltYWdlLCB7IHNyYzogaXRlbS5pbWFnZSwgYWx0OiBpdGVtLnRpdGxlIH0sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goU3R5bGVkVHlwb2dyYXBoeSwgeyBjaGlsZHJlbjogXCJDYXRlZ29yeTpcIiB9LCB2b2lkIDApLCBpdGVtLmNhdGVnb3J5LCBfanN4KFN0eWxlZFR5cG9ncmFwaHksIHsgY2hpbGRyZW46IFwiUHJpY2U6XCIgfSwgdm9pZCAwKSwgXCIkXCIsIGl0ZW0ucHJpY2UsIF9qc3goU3R5bGVkVHlwb2dyYXBoeSwgeyBjaGlsZHJlbjogXCJEaXNjcmlwdGlvbjpcIiB9LCB2b2lkIDApLCBpdGVtLmRlc2NyaXB0aW9uXSB9LCB2b2lkIDApIH0sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgIF9qc3goRGlhbG9nQWN0aW9ucywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlQ2xvc2UoKTsgfSwgY29sb3I6IFwicHJpbWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiQ2xvc2VcIiB9KSwgdm9pZCAwKSB9LCB2b2lkIDApXSB9KSwgdm9pZCAwKV0gfSwgdm9pZCAwKSk7XG59LCBcInhHMVRPTmJLdERXdGRPVHJYYVRBc05oUGcvUT1cIik7XG5fYSA9IEl0ZW07XG4kUmVmcmVzaFJlZyQoX2EsIFwiSXRlbVwiKTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZGMyZmQ0M2NmZDA0ZTNkMmQ1YVwiKSJdLCJzb3VyY2VSb290IjoiIn0=