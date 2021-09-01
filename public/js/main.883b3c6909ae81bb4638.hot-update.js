self["webpackHotUpdatereact_shopping_cart"]("main",{

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _Cart_Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart/Item/Item */ "./src/client/Cart/Item/Item.tsx");
/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart/Cart */ "./src/client/Cart/Cart.tsx");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Restore */ "./node_modules/@material-ui/icons/Restore.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony import */ var _App_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.styles */ "./src/client/App.styles.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();



// Components








// Styles


var getCheeses = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_c) {
    switch (_c.label) {
        case 0: return [4 /*yield*/, fetch("api/cheeses")];
        case 1: return [4 /*yield*/, (_c.sent()).json()];
        case 2: return [2 /*return*/, _c.sent()];
    }
}); }); };
// const getPurchased = async (): Promise<CartItemType[]> =>
//   await (await fetch(`api/purchased`)).json();
var App = _b(function () {
    _b();
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), cartOpen = _c[0], setCartOpen = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = _d[0], setCartItems = _d[1];
    var _e = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)("cheeses", getCheeses), data = _e.data, isLoading = _e.isLoading, error = _e.error;
    console.log(data);
    var getTotalItems = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount; }, 0);
    };
    var handleAddToCart = function (clickedItem) {
        setCartItems(function (prev) {
            // 1. Is the item already added in the cart?
            var isItemInCart = prev.find(function (item) { return item.id === clickedItem.id; });
            if (isItemInCart) {
                return prev.map(function (item) {
                    return item.id === clickedItem.id
                        ? __assign(__assign({}, item), { amount: item.amount + 1 }) : item;
                });
            }
            // First time the item is added
            return __spreadArrays(prev, [__assign(__assign({}, clickedItem), { amount: 1 })]);
        });
    };
    var handleRemoveFromCart = function (id) {
        setCartItems(function (prev) {
            return prev.reduce(function (ack, item) {
                if (item.id === id) {
                    if (item.amount === 1)
                        return ack;
                    return __spreadArrays(ack, [__assign(__assign({}, item), { amount: item.amount - 1 })]);
                }
                else {
                    return __spreadArrays(ack, [item]);
                }
            }, []);
        });
    };
    if (isLoading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0);
    if (error)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Something went wrong ..." }, void 0);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledAppBar, __assign({ position: "static" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, __assign({ container: true, direction: "row", justify: "space-between", alignItems: "center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledButton, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0),
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ variant: "subtitle2" }, { children: "Recent Purchases" }), void 0)] }, void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderTypography, __assign({ variant: "h4", noWrap: true }, { children: "Patient Zero's Cheeseria" }), void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledButton, __assign({ onClick: function () { return setCartOpen(true); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_11__.default, __assign({ badgeContent: getTotalItems(cartItems), color: "error", "data-cy": "badge-count" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0) }), void 0),
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ variant: "subtitle2" }, { children: "Cart" }), void 0)] }), void 0)] }), void 0) }, void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__.default, __assign({ anchor: "right", open: cartOpen, onClose: function () { return setCartOpen(false); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_3__.default, { cartItems: cartItems, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart }, void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, __assign({ container: true, spacing: 5 }, { children: data === null || data === void 0 ? void 0 : data.map(function (item) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, __assign({ item: true, xs: 12, sm: 4 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cart_Item_Item__WEBPACK_IMPORTED_MODULE_2__.default, { item: item, handleAddToCart: handleAddToCart }, void 0) }), item.id)); }) }), void 0)] }, void 0));
}, "sNjVdc7sEflwnqV2PP/uW1253TQ=", false, function () { return [react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery]; });
_a = App;
__webpack_require__.$Refresh$.register(_a, "App");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


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
/******/ 	__webpack_require__.h = () => ("5d5e87b388f77cdeedd4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFJLElBQUksU0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1Q0FBWTtBQUM4QztBQUM5QjtBQUNNO0FBQ3ZDO0FBQ29DO0FBQ0w7QUFDZTtBQUNnQjtBQUNwQjtBQUMyQjtBQUNoQjtBQUNUO0FBQzVDO0FBQ3NGO0FBQzlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCLGFBQWEsK0NBQVE7QUFDckIsYUFBYSxxREFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNEQUFJLENBQUMscUVBQWM7QUFDbEM7QUFDQSxlQUFlLHNEQUFJO0FBQ25CLFlBQVksdURBQUssQ0FBQyxnREFBTyxlQUFlLHNEQUFJLENBQUMscURBQVksK0NBQStDLHNEQUFJLENBQUMsc0RBQU8sY0FBYyx1REFBSyxDQUFDLDJEQUFJLCtHQUErRyx1REFBSyxDQUFDLHFEQUFZLGVBQWUsc0RBQUksQ0FBQywrREFBVztBQUM1UyxvQ0FBb0Msc0RBQUksQ0FBQyx1REFBVTtBQUNuRCw0QkFBNEIsc0RBQUksQ0FBQyx5REFBZ0I7QUFDakQsNEJBQTRCLHVEQUFLLENBQUMscURBQVksZ0ZBQWdGLHNEQUFJLENBQUMsNkRBQUssNkdBQTZHLHNEQUFJLENBQUMsd0VBQW1CO0FBQzdRLG9DQUFvQyxzREFBSSxDQUFDLHVEQUFVO0FBQ25ELFlBQVksc0RBQUksQ0FBQyw4REFBTSxpSEFBaUgsc0RBQUksQ0FBQywrQ0FBSTtBQUNqSixZQUFZLHNEQUFJLENBQUMsMkRBQUksdUlBQXVJLHNEQUFJLENBQUMsMkRBQUksc0RBQXNELHNEQUFJLENBQUMsb0RBQUk7QUFDcE8sZ0VBQWdFLGlEQUFRO0FBQ3hFO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwSW5CLHNEIiwiZmlsZSI6Im1haW4uODgzYjNjNjkwOWFlODFiYjQ2MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG52YXIgX2E7XG52YXIgX2I7XG5fYiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vQ2FydC9JdGVtL0l0ZW1cIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuL0NhcnQvQ2FydFwiO1xuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IEFkZFNob3BwaW5nQ2FydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRTaG9wcGluZ0NhcnRcIjtcbmltcG9ydCBSZXN0b3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Jlc3RvcmVcIjtcbmltcG9ydCBCYWRnZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIjtcbi8vIFN0eWxlc1xuaW1wb3J0IHsgV3JhcHBlciwgU3R5bGVkQnV0dG9uLCBTdHlsZWRBcHBCYXIsIEhlYWRlclR5cG9ncmFwaHksIH0gZnJvbSBcIi4vQXBwLnN0eWxlc1wiO1xuaW1wb3J0IHsgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xudmFyIGdldENoZWVzZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiYXBpL2NoZWVzZXNcIildO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIChfYy5zZW50KCkpLmpzb24oKV07XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9jLnNlbnQoKV07XG4gICAgfVxufSk7IH0pOyB9O1xuLy8gY29uc3QgZ2V0UHVyY2hhc2VkID0gYXN5bmMgKCk6IFByb21pc2U8Q2FydEl0ZW1UeXBlW10+ID0+XG4vLyAgIGF3YWl0IChhd2FpdCBmZXRjaChgYXBpL3B1cmNoYXNlZGApKS5qc29uKCk7XG52YXIgQXBwID0gX2IoZnVuY3Rpb24gKCkge1xuICAgIF9iKCk7XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoZmFsc2UpLCBjYXJ0T3BlbiA9IF9jWzBdLCBzZXRDYXJ0T3BlbiA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKFtdKSwgY2FydEl0ZW1zID0gX2RbMF0sIHNldENhcnRJdGVtcyA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVF1ZXJ5KFwiY2hlZXNlc1wiLCBnZXRDaGVlc2VzKSwgZGF0YSA9IF9lLmRhdGEsIGlzTG9hZGluZyA9IF9lLmlzTG9hZGluZywgZXJyb3IgPSBfZS5lcnJvcjtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB2YXIgZ2V0VG90YWxJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhY2ssIGl0ZW0pIHsgcmV0dXJuIGFjayArIGl0ZW0uYW1vdW50OyB9LCAwKTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVBZGRUb0NhcnQgPSBmdW5jdGlvbiAoY2xpY2tlZEl0ZW0pIHtcbiAgICAgICAgc2V0Q2FydEl0ZW1zKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgICAvLyAxLiBJcyB0aGUgaXRlbSBhbHJlYWR5IGFkZGVkIGluIHRoZSBjYXJ0P1xuICAgICAgICAgICAgdmFyIGlzSXRlbUluQ2FydCA9IHByZXYuZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gY2xpY2tlZEl0ZW0uaWQ7IH0pO1xuICAgICAgICAgICAgaWYgKGlzSXRlbUluQ2FydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PT0gY2xpY2tlZEl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX19hc3NpZ24oX19hc3NpZ24oe30sIGl0ZW0pLCB7IGFtb3VudDogaXRlbS5hbW91bnQgKyAxIH0pIDogaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpcnN0IHRpbWUgdGhlIGl0ZW0gaXMgYWRkZWRcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhwcmV2LCBbX19hc3NpZ24oX19hc3NpZ24oe30sIGNsaWNrZWRJdGVtKSwgeyBhbW91bnQ6IDEgfSldKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlUmVtb3ZlRnJvbUNhcnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgc2V0Q2FydEl0ZW1zKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldi5yZWR1Y2UoZnVuY3Rpb24gKGFjaywgaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5hbW91bnQgPT09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoYWNrLCBbX19hc3NpZ24oX19hc3NpZ24oe30sIGl0ZW0pLCB7IGFtb3VudDogaXRlbS5hbW91bnQgLSAxIH0pXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoYWNrLCBbaXRlbV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoaXNMb2FkaW5nKVxuICAgICAgICByZXR1cm4gX2pzeChMaW5lYXJQcm9ncmVzcywge30sIHZvaWQgMCk7XG4gICAgaWYgKGVycm9yKVxuICAgICAgICByZXR1cm4gX2pzeChcImRpdlwiLCB7IGNoaWxkcmVuOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIC4uLlwiIH0sIHZvaWQgMCk7XG4gICAgcmV0dXJuIChfanN4cyhXcmFwcGVyLCB7IGNoaWxkcmVuOiBbX2pzeChTdHlsZWRBcHBCYXIsIF9fYXNzaWduKHsgcG9zaXRpb246IFwic3RhdGljXCIgfSwgeyBjaGlsZHJlbjogX2pzeChUb29sYmFyLCB7IGNoaWxkcmVuOiBfanN4cyhHcmlkLCBfX2Fzc2lnbih7IGNvbnRhaW5lcjogdHJ1ZSwgZGlyZWN0aW9uOiBcInJvd1wiLCBqdXN0aWZ5OiBcInNwYWNlLWJldHdlZW5cIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9LCB7IGNoaWxkcmVuOiBbX2pzeHMoU3R5bGVkQnV0dG9uLCB7IGNoaWxkcmVuOiBbX2pzeChSZXN0b3JlSWNvbiwge30sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJzdWJ0aXRsZTJcIiB9LCB7IGNoaWxkcmVuOiBcIlJlY2VudCBQdXJjaGFzZXNcIiB9KSwgdm9pZCAwKV0gfSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KEhlYWRlclR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJoNFwiLCBub1dyYXA6IHRydWUgfSwgeyBjaGlsZHJlbjogXCJQYXRpZW50IFplcm8ncyBDaGVlc2VyaWFcIiB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4cyhTdHlsZWRCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q2FydE9wZW4odHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goQmFkZ2UsIF9fYXNzaWduKHsgYmFkZ2VDb250ZW50OiBnZXRUb3RhbEl0ZW1zKGNhcnRJdGVtcyksIGNvbG9yOiBcImVycm9yXCIsIFwiZGF0YS1jeVwiOiBcImJhZGdlLWNvdW50XCIgfSwgeyBjaGlsZHJlbjogX2pzeChBZGRTaG9wcGluZ0NhcnRJY29uLCB7fSwgdm9pZCAwKSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiBcInN1YnRpdGxlMlwiIH0sIHsgY2hpbGRyZW46IFwiQ2FydFwiIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCkgfSwgdm9pZCAwKSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goRHJhd2VyLCBfX2Fzc2lnbih7IGFuY2hvcjogXCJyaWdodFwiLCBvcGVuOiBjYXJ0T3Blbiwgb25DbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q2FydE9wZW4oZmFsc2UpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goQ2FydCwgeyBjYXJ0SXRlbXM6IGNhcnRJdGVtcywgYWRkVG9DYXJ0OiBoYW5kbGVBZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0OiBoYW5kbGVSZW1vdmVGcm9tQ2FydCB9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChHcmlkLCBfX2Fzc2lnbih7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogNSB9LCB7IGNoaWxkcmVuOiBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoX2pzeChHcmlkLCBfX2Fzc2lnbih7IGl0ZW06IHRydWUsIHhzOiAxMiwgc206IDQgfSwgeyBjaGlsZHJlbjogX2pzeChJdGVtLCB7IGl0ZW06IGl0ZW0sIGhhbmRsZUFkZFRvQ2FydDogaGFuZGxlQWRkVG9DYXJ0IH0sIHZvaWQgMCkgfSksIGl0ZW0uaWQpKTsgfSkgfSksIHZvaWQgMCldIH0sIHZvaWQgMCkpO1xufSwgXCJzTmpWZGM3c0VmbHducVYyUFAvdVcxMjUzVFE9XCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbdXNlUXVlcnldOyB9KTtcbl9hID0gQXBwO1xuJFJlZnJlc2hSZWckKF9hLCBcIkFwcFwiKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVkNWU4N2IzODhmNzdjZGVlZGQ0XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==