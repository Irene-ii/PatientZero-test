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
/* harmony import */ var _ItemDetail_ItemDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ItemDetail/ItemDetail */ "./src/client/Cart/ItemDetail/ItemDetail.tsx");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, __assign({ onClick: function () { return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ItemDetail_ItemDetail__WEBPACK_IMPORTED_MODULE_3__.default, { item: item }, void 0); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.Image, { src: item.image, alt: item.title }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTypography, { children: item.title }, void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTypography, { children: ["$", item.price] }, void 0)] }, void 0)] }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledToolTips, __assign({ title: "Add one to cart", placement: "bottom" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledButton, __assign({ onClick: function () { return handleAddToCart(item); }, "data-cy": "add-to-cart-" + item.id }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Item_styles__WEBPACK_IMPORTED_MODULE_2__.StyledAddIcon, {}, void 0) }), void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__.default, __assign({ open: open, keepMounted: true, onClose: function () { return handleClose(); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__.default, { children: item.title }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__.default, { children: item.description }, void 0) }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_8__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, __assign({ onClick: function () { return handleClose(); }, color: "primary" }, { children: "Close" }), void 0) }, void 0)] }), void 0)] }, void 0));
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
/******/ 	__webpack_require__.h = () => ("696d194b88fffce58057")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0l0ZW0vSXRlbS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUFZO0FBQzhDO0FBQzlCO0FBQ2pDO0FBQzRIO0FBQzFFO0FBQ0o7QUFDYztBQUNBO0FBQ1E7QUFDWjtBQUNWO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBSyxDQUFDLGlEQUFPLGVBQWUsdURBQUssQ0FBQyxxREFBVywyQ0FBMkMsc0RBQUksQ0FBQywyREFBVSw2Q0FBNkMsc0RBQUksQ0FBQywrQ0FBSztBQUMxSyxvQkFBb0IsdURBQUsscUJBQXFCLHNEQUFJLENBQUMsMERBQWdCO0FBQ25FLDRCQUE0Qix1REFBSyxDQUFDLDBEQUFnQjtBQUNsRCxZQUFZLHNEQUFJLENBQUMsd0RBQWMsMEVBQTBFLHNEQUFJLENBQUMsc0RBQVksd0hBQXdILHNEQUFJLENBQUMsdURBQWE7QUFDcFEsWUFBWSx1REFBSyxDQUFDLDZEQUFNLDJHQUEyRyxzREFBSSxDQUFDLGtFQUFXO0FBQ25KLG9CQUFvQixzREFBSSxDQUFDLG9FQUFhLGNBQWMsc0RBQUksQ0FBQyx3RUFBaUI7QUFDMUUsb0JBQW9CLHNEQUFJLENBQUMsb0VBQWEsY0FBYyxzREFBSSxDQUFDLDZEQUFNO0FBQy9EO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdDcEIsc0QiLCJmaWxlIjoibWFpbi4yYTM5ZjI5MzdkYTU2NmFhNWQwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfYTtcbnZhciBfYjtcbl9iID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIFN0eWxlc1xuaW1wb3J0IHsgV3JhcHBlciwgU3R5bGVkQnV0dG9uLCBCdXR0b25Hcm91cCwgSW1hZ2UsIFN0eWxlZFRvb2xUaXBzLCBTdHlsZWRUeXBvZ3JhcGh5LCBTdHlsZWRBZGRJY29uLCB9IGZyb20gXCIuL0l0ZW0uc3R5bGVzXCI7XG5pbXBvcnQgSXRlbURldGFpbCBmcm9tIFwiLi4vSXRlbURldGFpbC9JdGVtRGV0YWlsXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG52YXIgSXRlbSA9IF9iKGZ1bmN0aW9uIChfYykge1xuICAgIHZhciBpdGVtID0gX2MuaXRlbSwgaGFuZGxlQWRkVG9DYXJ0ID0gX2MuaGFuZGxlQWRkVG9DYXJ0O1xuICAgIF9iKCk7XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBvcGVuID0gX2RbMF0sIHNldE9wZW4gPSBfZFsxXTtcbiAgICB2YXIgaGFuZGxlQ2xpY2tPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRPcGVuKHRydWUpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoV3JhcHBlciwgeyBjaGlsZHJlbjogW19qc3hzKEJ1dHRvbkdyb3VwLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9qc3goSXRlbURldGFpbCwgeyBpdGVtOiBpdGVtIH0sIHZvaWQgMCk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goSW1hZ2UsIHsgc3JjOiBpdGVtLmltYWdlLCBhbHQ6IGl0ZW0udGl0bGUgfSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goU3R5bGVkVHlwb2dyYXBoeSwgeyBjaGlsZHJlbjogaXRlbS50aXRsZSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3hzKFN0eWxlZFR5cG9ncmFwaHksIHsgY2hpbGRyZW46IFtcIiRcIiwgaXRlbS5wcmljZV0gfSwgdm9pZCAwKV0gfSwgdm9pZCAwKV0gfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KFN0eWxlZFRvb2xUaXBzLCBfX2Fzc2lnbih7IHRpdGxlOiBcIkFkZCBvbmUgdG8gY2FydFwiLCBwbGFjZW1lbnQ6IFwiYm90dG9tXCIgfSwgeyBjaGlsZHJlbjogX2pzeChTdHlsZWRCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlQWRkVG9DYXJ0KGl0ZW0pOyB9LCBcImRhdGEtY3lcIjogXCJhZGQtdG8tY2FydC1cIiArIGl0ZW0uaWQgfSwgeyBjaGlsZHJlbjogX2pzeChTdHlsZWRBZGRJY29uLCB7fSwgdm9pZCAwKSB9KSwgdm9pZCAwKSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3hzKERpYWxvZywgX19hc3NpZ24oeyBvcGVuOiBvcGVuLCBrZWVwTW91bnRlZDogdHJ1ZSwgb25DbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlQ2xvc2UoKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChEaWFsb2dUaXRsZSwgeyBjaGlsZHJlbjogaXRlbS50aXRsZSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICBfanN4KERpYWxvZ0NvbnRlbnQsIHsgY2hpbGRyZW46IF9qc3goRGlhbG9nQ29udGVudFRleHQsIHsgY2hpbGRyZW46IGl0ZW0uZGVzY3JpcHRpb24gfSwgdm9pZCAwKSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICBfanN4KERpYWxvZ0FjdGlvbnMsIHsgY2hpbGRyZW46IF9qc3goQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZUNsb3NlKCk7IH0sIGNvbG9yOiBcInByaW1hcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkNsb3NlXCIgfSksIHZvaWQgMCkgfSwgdm9pZCAwKV0gfSksIHZvaWQgMCldIH0sIHZvaWQgMCkpO1xufSwgXCJ4RzFUT05iS3REV3RkT1RyWGFUQXNOaFBnL1E9XCIpO1xuX2EgPSBJdGVtO1xuJFJlZnJlc2hSZWckKF9hLCBcIkl0ZW1cIik7XG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjk2ZDE5NGI4OGZmZmNlNTgwNTdcIikiXSwic291cmNlUm9vdCI6IiJ9