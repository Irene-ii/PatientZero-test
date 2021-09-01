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
var _b;
_b = __webpack_require__.$Refresh$.signature();








var ItemDetail = _b(function (item) {
    _b();
    var _c = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), open = _c[0], setOpen = _c[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__.default, __assign({ open: open, keepMounted: true, onClose: handleClose, "aria-labelledby": "alert-dialog-slide-title", "aria-describedby": "alert-dialog-slide-description" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__.default, __assign({ id: "alert-dialog-slide-title" }, { children: "Use Google's location service?" }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__.default, __assign({ id: "alert-dialog-slide-description" }, { children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), void 0) }, void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, __assign({ onClick: handleClose, color: "primary" }, { children: "Close" }), void 0) }, void 0)] }), void 0));
}, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
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
/******/ 	__webpack_require__.h = () => ("95c93db274ad7a90bfc6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9DYXJ0L0l0ZW1EZXRhaWwvSXRlbURldGFpbC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1Q0FBWTtBQUM4QztBQUNyQztBQUNvQjtBQUNjO0FBQ0E7QUFDUTtBQUNaO0FBQ1Y7QUFDOUM7QUFDQTtBQUNBLGFBQWEsMkNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBSyxDQUFDLDZEQUFNLHNMQUFzTCxzREFBSSxDQUFDLGtFQUFXO0FBQzlOLFlBQVksc0RBQUksQ0FBQyxvRUFBYSxjQUFjLHNEQUFJLENBQUMsd0VBQWlCO0FBQ2xFLFlBQVksc0RBQUksQ0FBQyxvRUFBYSxjQUFjLHNEQUFJLENBQUMsNkRBQU07QUFDdkQ7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckMxQixzRCIsImZpbGUiOiJtYWluLjMyNjlhM2UxMmNjNGEwNjhmYzFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9hO1xudmFyIF9iO1xuX2IgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG52YXIgSXRlbURldGFpbCA9IF9iKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgX2IoKTtcbiAgICB2YXIgX2MgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIG9wZW4gPSBfY1swXSwgc2V0T3BlbiA9IF9jWzFdO1xuICAgIHZhciBoYW5kbGVDbGlja09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhEaWFsb2csIF9fYXNzaWduKHsgb3Blbjogb3Blbiwga2VlcE1vdW50ZWQ6IHRydWUsIG9uQ2xvc2U6IGhhbmRsZUNsb3NlLCBcImFyaWEtbGFiZWxsZWRieVwiOiBcImFsZXJ0LWRpYWxvZy1zbGlkZS10aXRsZVwiLCBcImFyaWEtZGVzY3JpYmVkYnlcIjogXCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIiB9LCB7IGNoaWxkcmVuOiBbX2pzeChEaWFsb2dUaXRsZSwgX19hc3NpZ24oeyBpZDogXCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIiB9LCB7IGNoaWxkcmVuOiBcIlVzZSBHb29nbGUncyBsb2NhdGlvbiBzZXJ2aWNlP1wiIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChEaWFsb2dDb250ZW50LCB7IGNoaWxkcmVuOiBfanN4KERpYWxvZ0NvbnRlbnRUZXh0LCBfX2Fzc2lnbih7IGlkOiBcImFsZXJ0LWRpYWxvZy1zbGlkZS1kZXNjcmlwdGlvblwiIH0sIHsgY2hpbGRyZW46IFwiTGV0IEdvb2dsZSBoZWxwIGFwcHMgZGV0ZXJtaW5lIGxvY2F0aW9uLiBUaGlzIG1lYW5zIHNlbmRpbmcgYW5vbnltb3VzIGxvY2F0aW9uIGRhdGEgdG8gR29vZ2xlLCBldmVuIHdoZW4gbm8gYXBwcyBhcmUgcnVubmluZy5cIiB9KSwgdm9pZCAwKSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChEaWFsb2dBY3Rpb25zLCB7IGNoaWxkcmVuOiBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBoYW5kbGVDbG9zZSwgY29sb3I6IFwicHJpbWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiQ2xvc2VcIiB9KSwgdm9pZCAwKSB9LCB2b2lkIDApXSB9KSwgdm9pZCAwKSk7XG59LCBcInhHMVRPTmJLdERXdGRPVHJYYVRBc05oUGcvUT1cIik7XG5fYSA9IEl0ZW1EZXRhaWw7XG4kUmVmcmVzaFJlZyQoX2EsIFwiSXRlbURldGFpbFwiKTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWw7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NWM5M2RiMjc0YWQ3YTkwYmZjNlwiKSJdLCJzb3VyY2VSb290IjoiIn0=