self["webpackHotUpdatereact_shopping_cart"]("main",{

/***/ "./src/client/Cart/ItemDetail/ItemDetail.tsx":
/*!***************************************************!*\
  !*** ./src/client/Cart/ItemDetail/ItemDetail.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
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








var _b = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), open = _b[0], setOpen = _b[1];
var handleClickOpen = function () {
    setOpen(true);
};
var handleClose = function () {
    setOpen(false);
};
var ItemDetail = function (_b) {
    var item = _b.item;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__.default, __assign({ open: open, keepMounted: true, onClose: handleClose, "aria-labelledby": "alert-dialog-slide-title", "aria-describedby": "alert-dialog-slide-description" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__.default, __assign({ id: "alert-dialog-slide-title" }, { children: "Use Google's location service?" }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__.default, __assign({ id: "alert-dialog-slide-description" }, { children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), void 0) }, void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, __assign({ onClick: handleClose, color: "primary" }, { children: "Close" }), void 0) }, void 0)] }), void 0));
};
_a = ItemDetail;
__webpack_require__.$Refresh$.register(_a, "ItemDetail");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemDetail);


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
/******/ 	__webpack_require__.h = () => ("6c88920136a48cb32693")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0l0ZW1EZXRhaWwvSXRlbURldGFpbC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNyQztBQUNvQjtBQUNjO0FBQ0E7QUFDUTtBQUNaO0FBQ1Y7QUFDOUMsU0FBUywyQ0FBYztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBSyxDQUFDLDZEQUFNLHNMQUFzTCxzREFBSSxDQUFDLGtFQUFXO0FBQzlOLFlBQVksc0RBQUksQ0FBQyxvRUFBYSxjQUFjLHNEQUFJLENBQUMsd0VBQWlCO0FBQ2xFLFlBQVksc0RBQUksQ0FBQyxvRUFBYSxjQUFjLHNEQUFJLENBQUMsNkRBQU07QUFDdkQ7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkMxQixzRCIsImZpbGUiOiJtYWluLjljYWUzZmVjZDc5ZjA5YmU4M2QwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9hO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbnZhciBfYiA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgb3BlbiA9IF9iWzBdLCBzZXRPcGVuID0gX2JbMV07XG52YXIgaGFuZGxlQ2xpY2tPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG59O1xudmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xufTtcbnZhciBJdGVtRGV0YWlsID0gZnVuY3Rpb24gKF9iKSB7XG4gICAgdmFyIGl0ZW0gPSBfYi5pdGVtO1xuICAgIHJldHVybiAoX2pzeHMoRGlhbG9nLCBfX2Fzc2lnbih7IG9wZW46IG9wZW4sIGtlZXBNb3VudGVkOiB0cnVlLCBvbkNsb3NlOiBoYW5kbGVDbG9zZSwgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiYWxlcnQtZGlhbG9nLXNsaWRlLWRlc2NyaXB0aW9uXCIgfSwgeyBjaGlsZHJlbjogW19qc3goRGlhbG9nVGl0bGUsIF9fYXNzaWduKHsgaWQ6IFwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCIgfSwgeyBjaGlsZHJlbjogXCJVc2UgR29vZ2xlJ3MgbG9jYXRpb24gc2VydmljZT9cIiB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goRGlhbG9nQ29udGVudCwgeyBjaGlsZHJlbjogX2pzeChEaWFsb2dDb250ZW50VGV4dCwgX19hc3NpZ24oeyBpZDogXCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIiB9LCB7IGNoaWxkcmVuOiBcIkxldCBHb29nbGUgaGVscCBhcHBzIGRldGVybWluZSBsb2NhdGlvbi4gVGhpcyBtZWFucyBzZW5kaW5nIGFub255bW91cyBsb2NhdGlvbiBkYXRhIHRvIEdvb2dsZSwgZXZlbiB3aGVuIG5vIGFwcHMgYXJlIHJ1bm5pbmcuXCIgfSksIHZvaWQgMCkgfSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goRGlhbG9nQWN0aW9ucywgeyBjaGlsZHJlbjogX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogaGFuZGxlQ2xvc2UsIGNvbG9yOiBcInByaW1hcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkNsb3NlXCIgfSksIHZvaWQgMCkgfSwgdm9pZCAwKV0gfSksIHZvaWQgMCkpO1xufTtcbl9hID0gSXRlbURldGFpbDtcbiRSZWZyZXNoUmVnJChfYSwgXCJJdGVtRGV0YWlsXCIpO1xuZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZjODg5MjAxMzZhNDhjYjMyNjkzXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==