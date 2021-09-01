self["webpackHotUpdatereact_shopping_cart"]("main",{

/***/ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Dialog/Dialog.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _Paper__WEBPACK_IMPORTED_MODULE_7__.default : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_8__.default : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

  var mouseDownTarget = react__WEBPACK_IMPORTED_MODULE_3__.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.


    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_10__.default,
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true,
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.container, classes["scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PaperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.paper, classes["paperScroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))], classes["paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 true ? Dialog.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * @ignore
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Dialog children, usually the included sub-components.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['lg', 'md', 'sm', 'xl', 'xs', false]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the dialog exits.
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog has exited.
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * If `true`, the Dialog is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * The component used to render the body of the dialog.
   */
  PaperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['body', 'paper']),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiDialog'
})(Dialog));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 true ? DialogActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiDialogActions'
})(DialogActions));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$dividers = props.dividers,
      dividers = _props$dividers === void 0 ? false : _props$dividers,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "dividers"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
 true ? DialogContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Display the top and bottom dividers.
   */
  dividers: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__.default)(styles, {
  name: 'MuiDialogContent'
})(DialogContent));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");





var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 true ? DialogContentText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__.default)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    component: "h2",
    variant: "h6"
  }, children));
});
 true ? DialogTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));

/***/ }),

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
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/Slide.js");
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
var _a, _b, _c;








var _d = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), open = _d[0], setOpen = _d[1];
var handleClickOpen = function () {
    setOpen(true);
};
var handleClose = function () {
    setOpen(false);
};
var Transition = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_a = function Transition(props, ref) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_2__.default, __assign({ direction: "up", ref: ref }, props), void 0);
});
__webpack_require__.$Refresh$.register(_a, "Transition$React.forwardRef");
_b = Transition;
__webpack_require__.$Refresh$.register(_b, "Transition");
var ItemDetail = function (_d) {
    var item = _d.item;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__.default, __assign({ open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-labelledby": "alert-dialog-slide-title", "aria-describedby": "alert-dialog-slide-description" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__.default, __assign({ id: "alert-dialog-slide-title" }, { children: "Use Google's location service?" }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__.default, __assign({ id: "alert-dialog-slide-description" }, { children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), void 0) }, void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__.default, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, __assign({ onClick: handleClose, color: "primary" }, { children: "Disagree" }), void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, __assign({ onClick: handleClose, color: "primary" }, { children: "Agree" }), void 0)] }, void 0)] }), void 0));
};
_c = ItemDetail;
__webpack_require__.$Refresh$.register(_c, "ItemDetail");
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
/******/ 	__webpack_require__.h = () => ("02da7df724523173d3e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EaWFsb2cvRGlhbG9nLmpzIiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0RpYWxvZ0FjdGlvbnMvRGlhbG9nQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EaWFsb2dDb250ZW50L0RpYWxvZ0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRGlhbG9nQ29udGVudFRleHQvRGlhbG9nQ29udGVudFRleHQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRGlhbG9nVGl0bGUvRGlhbG9nVGl0bGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC8uL3NyYy9jbGllbnQvQ2FydC9JdGVtRGV0YWlsL0l0ZW1EZXRhaWwudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDZ0M7QUFDbEI7QUFDekM7QUFDSTtBQUNYO0FBQ3NCO0FBQ0Q7QUFDaEI7QUFDTTtBQUNSO0FBQ3NCO0FBQ3BCO0FBQ3RCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMERBQWdCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFnQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQWM7QUFDbkMsQ0FBQyxHQUFHLENBQU07QUFDVixpRUFBZSwyREFBVTtBQUN6QjtBQUNBLENBQUMsY0FBYyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RmLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ3JDO0FBQ29CO0FBQ2M7QUFDQTtBQUNRO0FBQ1o7QUFDWjtBQUM1QyxTQUFTLDJDQUFjO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBZ0I7QUFDakMsV0FBVyxzREFBSSxDQUFDLDREQUFLO0FBQ3JCO0FBQ0Esc0NBQVk7QUFDWjtBQUNBLHNDQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVksdURBQUssQ0FBQyw2REFBTSx1TkFBdU4sc0RBQUksQ0FBQyxrRUFBVztBQUMvUCxZQUFZLHNEQUFJLENBQUMsb0VBQWEsY0FBYyxzREFBSSxDQUFDLHdFQUFpQjtBQUNsRSxZQUFZLHVEQUFLLENBQUMsb0VBQWEsZUFBZSxzREFBSTtBQUNsRCxvQkFBb0Isc0RBQUk7QUFDeEI7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUMxQixzRCIsImZpbGUiOiJtYWluLjgxMGE0ZDVlNjM1MTRkNzk0MmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4uL0JhY2tkcm9wJztcbmltcG9ydCBGYWRlIGZyb20gJy4uL0ZhZGUnO1xuaW1wb3J0IHsgZHVyYXRpb24gfSBmcm9tICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgICAvLyBVc2UgIWltcG9ydGFudCB0byBvdmVycmlkZSB0aGUgTW9kYWwgaW5saW5lLXN0eWxlLlxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCBpZiBgc2Nyb2xsPVwicGFwZXJcImAuICovXG4gICAgc2Nyb2xsUGFwZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCBpZiBgc2Nyb2xsPVwiYm9keVwiYC4gKi9cbiAgICBzY3JvbGxCb2R5OiB7XG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcwJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuICovXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICB9LFxuICAgICAgLy8gV2UgZGlzYWJsZSB0aGUgZm9jdXMgcmluZyBmb3IgbW91c2UsIHRvdWNoIGFuZCBrZXlib2FyZCB1c2Vycy5cbiAgICAgIG91dGxpbmU6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50LiAqL1xuICAgIHBhcGVyOiB7XG4gICAgICBtYXJnaW46IDMyLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIC8vIEZpeCBJRSAxMSBpc3N1ZSwgdG8gcmVtb3ZlIGF0IHNvbWUgcG9pbnQuXG4gICAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgICBvdmVyZmxvd1k6ICd2aXNpYmxlJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBzY3JvbGw9XCJwYXBlclwiYC4gKi9cbiAgICBwYXBlclNjcm9sbFBhcGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIG1heEhlaWdodDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYHNjcm9sbD1cImJvZHlcImAuICovXG4gICAgcGFwZXJTY3JvbGxCb2R5OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcgLy8gJ2luaXRpYWwnIGRvZXNuJ3Qgd29yayBvbiBJRSAxMVxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9ZmFsc2VgLiAqL1xuICAgIHBhcGVyV2lkdGhGYWxzZToge1xuICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1cInhzXCJgLiAqL1xuICAgIHBhcGVyV2lkdGhYczoge1xuICAgICAgbWF4V2lkdGg6IE1hdGgubWF4KHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54cywgNDQ0KSxcbiAgICAgICcmJHBhcGVyU2Nyb2xsQm9keSc6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMuZG93bihNYXRoLm1heCh0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueHMsIDQ0NCkgKyAzMiAqIDIpLCB7XG4gICAgICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwic21cImAuICovXG4gICAgcGFwZXJXaWR0aFNtOiB7XG4gICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnNtLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5zbSArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9XCJtZFwiYC4gKi9cbiAgICBwYXBlcldpZHRoTWQ6IHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubWQsXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24odGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLm1kICsgMzIgKiAyKSwge1xuICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1cImxnXCJgLiAqL1xuICAgIHBhcGVyV2lkdGhMZzoge1xuICAgICAgbWF4V2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5sZyxcbiAgICAgICcmJHBhcGVyU2Nyb2xsQm9keSc6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMuZG93bih0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubGcgKyAzMiAqIDIpLCB7XG4gICAgICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwieGxcImAuICovXG4gICAgcGFwZXJXaWR0aFhsOiB7XG4gICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54bCArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgcGFwZXJGdWxsV2lkdGg6IHtcbiAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgZnVsbFNjcmVlbj17dHJ1ZX1gLiAqL1xuICAgIHBhcGVyRnVsbFNjcmVlbjoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1heEhlaWdodDogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5Jzoge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24gPSB7XG4gIGVudGVyOiBkdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgZXhpdDogZHVyYXRpb24ubGVhdmluZ1NjcmVlblxufTtcbi8qKlxuICogRGlhbG9ncyBhcmUgb3ZlcmxhaWQgbW9kYWwgcGFwZXIgYmFzZWQgY29tcG9uZW50cyB3aXRoIGEgYmFja2Ryb3AuXG4gKi9cblxudmFyIERpYWxvZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIERpYWxvZyhwcm9wcywgcmVmKSB7XG4gIHZhciBCYWNrZHJvcFByb3BzID0gcHJvcHMuQmFja2Ryb3BQcm9wcyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlQmFja2RybyA9IHByb3BzLmRpc2FibGVCYWNrZHJvcENsaWNrLFxuICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2sgPSBfcHJvcHMkZGlzYWJsZUJhY2tkcm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVCYWNrZHJvLFxuICAgICAgX3Byb3BzJGRpc2FibGVFc2NhcGVLID0gcHJvcHMuZGlzYWJsZUVzY2FwZUtleURvd24sXG4gICAgICBkaXNhYmxlRXNjYXBlS2V5RG93biA9IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVzY2FwZUssXG4gICAgICBfcHJvcHMkZnVsbFNjcmVlbiA9IHByb3BzLmZ1bGxTY3JlZW4sXG4gICAgICBmdWxsU2NyZWVuID0gX3Byb3BzJGZ1bGxTY3JlZW4gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxTY3JlZW4sXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJG1heFdpZHRoID0gcHJvcHMubWF4V2lkdGgsXG4gICAgICBtYXhXaWR0aCA9IF9wcm9wcyRtYXhXaWR0aCA9PT0gdm9pZCAwID8gJ3NtJyA6IF9wcm9wcyRtYXhXaWR0aCxcbiAgICAgIG9uQmFja2Ryb3BDbGljayA9IHByb3BzLm9uQmFja2Ryb3BDbGljayxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQgPSBwcm9wcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9uRXNjYXBlS2V5RG93biA9IHByb3BzLm9uRXNjYXBlS2V5RG93bixcbiAgICAgIG9uRXhpdCA9IHByb3BzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGVkID0gcHJvcHMub25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcgPSBwcm9wcy5vbkV4aXRpbmcsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRQYXBlckNvbXBvbmVudCA9IHByb3BzLlBhcGVyQ29tcG9uZW50LFxuICAgICAgUGFwZXJDb21wb25lbnQgPSBfcHJvcHMkUGFwZXJDb21wb25lbnQgPT09IHZvaWQgMCA/IFBhcGVyIDogX3Byb3BzJFBhcGVyQ29tcG9uZW50LFxuICAgICAgX3Byb3BzJFBhcGVyUHJvcHMgPSBwcm9wcy5QYXBlclByb3BzLFxuICAgICAgUGFwZXJQcm9wcyA9IF9wcm9wcyRQYXBlclByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRQYXBlclByb3BzLFxuICAgICAgX3Byb3BzJHNjcm9sbCA9IHByb3BzLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9wcm9wcyRzY3JvbGwgPT09IHZvaWQgMCA/ICdwYXBlcicgOiBfcHJvcHMkc2Nyb2xsLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Db21wID0gcHJvcHMuVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQgPSBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPT09IHZvaWQgMCA/IEZhZGUgOiBfcHJvcHMkVHJhbnNpdGlvbkNvbXAsXG4gICAgICBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPSBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPT09IHZvaWQgMCA/IGRlZmF1bHRUcmFuc2l0aW9uRHVyYXRpb24gOiBfcHJvcHMkdHJhbnNpdGlvbkR1cmEsXG4gICAgICBUcmFuc2l0aW9uUHJvcHMgPSBwcm9wcy5UcmFuc2l0aW9uUHJvcHMsXG4gICAgICBhcmlhRGVzY3JpYmVkYnkgPSBwcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuICAgICAgYXJpYUxhYmVsbGVkYnkgPSBwcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiQmFja2Ryb3BQcm9wc1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVCYWNrZHJvcENsaWNrXCIsIFwiZGlzYWJsZUVzY2FwZUtleURvd25cIiwgXCJmdWxsU2NyZWVuXCIsIFwiZnVsbFdpZHRoXCIsIFwibWF4V2lkdGhcIiwgXCJvbkJhY2tkcm9wQ2xpY2tcIiwgXCJvbkNsb3NlXCIsIFwib25FbnRlclwiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRW50ZXJpbmdcIiwgXCJvbkVzY2FwZUtleURvd25cIiwgXCJvbkV4aXRcIiwgXCJvbkV4aXRlZFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9wZW5cIiwgXCJQYXBlckNvbXBvbmVudFwiLCBcIlBhcGVyUHJvcHNcIiwgXCJzY3JvbGxcIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCIsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCIsIFwiVHJhbnNpdGlvblByb3BzXCIsIFwiYXJpYS1kZXNjcmliZWRieVwiLCBcImFyaWEtbGFiZWxsZWRieVwiXSk7XG5cbiAgdmFyIG1vdXNlRG93blRhcmdldCA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIHZhciBoYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICBtb3VzZURvd25UYXJnZXQuY3VycmVudCA9IGV2ZW50LnRhcmdldDtcbiAgfTtcblxuICB2YXIgaGFuZGxlQmFja2Ryb3BDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50cyBub3QgY29taW5nIGZyb20gdGhlIFwiYmFja2Ryb3BcIlxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gY2xvc2UgdGhlIGRpYWxvZyB3aGVuIGNsaWNraW5nIHRoZSBkaWFsb2cgY29udGVudC5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBNYWtlIHN1cmUgdGhlIGV2ZW50IHN0YXJ0cyBhbmQgZW5kcyBvbiB0aGUgc2FtZSBET00gZWxlbWVudC5cblxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gbW91c2VEb3duVGFyZ2V0LmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb3VzZURvd25UYXJnZXQuY3VycmVudCA9IG51bGw7XG5cbiAgICBpZiAob25CYWNrZHJvcENsaWNrKSB7XG4gICAgICBvbkJhY2tkcm9wQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICghZGlzYWJsZUJhY2tkcm9wQ2xpY2sgJiYgb25DbG9zZSkge1xuICAgICAgb25DbG9zZShldmVudCwgJ2JhY2tkcm9wQ2xpY2snKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBCYWNrZHJvcENvbXBvbmVudDogQmFja2Ryb3AsXG4gICAgQmFja2Ryb3BQcm9wczogX2V4dGVuZHMoe1xuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAgICB9LCBCYWNrZHJvcFByb3BzKSxcbiAgICBjbG9zZUFmdGVyVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICBkaXNhYmxlQmFja2Ryb3BDbGljazogZGlzYWJsZUJhY2tkcm9wQ2xpY2ssXG4gICAgZGlzYWJsZUVzY2FwZUtleURvd246IGRpc2FibGVFc2NhcGVLZXlEb3duLFxuICAgIG9uRXNjYXBlS2V5RG93bjogb25Fc2NhcGVLZXlEb3duLFxuICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgb3Blbjogb3BlbixcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBhcHBlYXI6IHRydWUsXG4gICAgaW46IG9wZW4sXG4gICAgdGltZW91dDogdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgIG9uRW50ZXI6IG9uRW50ZXIsXG4gICAgb25FbnRlcmluZzogb25FbnRlcmluZyxcbiAgICBvbkVudGVyZWQ6IG9uRW50ZXJlZCxcbiAgICBvbkV4aXQ6IG9uRXhpdCxcbiAgICBvbkV4aXRpbmc6IG9uRXhpdGluZyxcbiAgICBvbkV4aXRlZDogb25FeGl0ZWQsXG4gICAgcm9sZTogXCJub25lIHByZXNlbnRhdGlvblwiXG4gIH0sIFRyYW5zaXRpb25Qcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5jb250YWluZXIsIGNsYXNzZXNbXCJzY3JvbGxcIi5jb25jYXQoY2FwaXRhbGl6ZShzY3JvbGwpKV0pLFxuICAgIG9uTW91c2VVcDogaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgZWxldmF0aW9uOiAyNCxcbiAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBhcmlhRGVzY3JpYmVkYnksXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkYnlcbiAgfSwgUGFwZXJQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzW1wicGFwZXJTY3JvbGxcIi5jb25jYXQoY2FwaXRhbGl6ZShzY3JvbGwpKV0sIGNsYXNzZXNbXCJwYXBlcldpZHRoXCIuY29uY2F0KGNhcGl0YWxpemUoU3RyaW5nKG1heFdpZHRoKSkpXSwgUGFwZXJQcm9wcy5jbGFzc05hbWUsIGZ1bGxTY3JlZW4gJiYgY2xhc3Nlcy5wYXBlckZ1bGxTY3JlZW4sIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLnBhcGVyRnVsbFdpZHRoKVxuICB9KSwgY2hpbGRyZW4pKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBEaWFsb2cucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGlkKHMpIG9mIHRoZSBlbGVtZW50KHMpIHRoYXQgZGVzY3JpYmUgdGhlIGRpYWxvZy5cbiAgICovXG4gICdhcmlhLWRlc2NyaWJlZGJ5JzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGlkKHMpIG9mIHRoZSBlbGVtZW50KHMpIHRoYXQgbGFiZWwgdGhlIGRpYWxvZy5cbiAgICovXG4gICdhcmlhLWxhYmVsbGVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBCYWNrZHJvcFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBEaWFsb2cgY2hpbGRyZW4sIHVzdWFsbHkgdGhlIGluY2x1ZGVkIHN1Yi1jb21wb25lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBjbGlja2luZyB0aGUgYmFja2Ryb3Agd2lsbCBub3QgZmlyZSB0aGUgYG9uQ2xvc2VgIGNhbGxiYWNrLlxuICAgKi9cbiAgZGlzYWJsZUJhY2tkcm9wQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhpdHRpbmcgZXNjYXBlIHdpbGwgbm90IGZpcmUgdGhlIGBvbkNsb3NlYCBjYWxsYmFjay5cbiAgICovXG4gIGRpc2FibGVFc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgZGlhbG9nIHdpbGwgYmUgZnVsbC1zY3JlZW5cbiAgICovXG4gIGZ1bGxTY3JlZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBkaWFsb2cgc3RyZXRjaGVzIHRvIGBtYXhXaWR0aGAuXG4gICAqXG4gICAqIE5vdGljZSB0aGF0IHRoZSBkaWFsb2cgd2lkdGggZ3JvdyBpcyBsaW1pdGVkIGJ5IHRoZSBkZWZhdWx0IG1hcmdpbi5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgbWF4LXdpZHRoIG9mIHRoZSBkaWFsb2cuXG4gICAqIFRoZSBkaWFsb2cgd2lkdGggZ3Jvd3Mgd2l0aCB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuLlxuICAgKiBTZXQgdG8gYGZhbHNlYCB0byBkaXNhYmxlIGBtYXhXaWR0aGAuXG4gICAqL1xuICBtYXhXaWR0aDogUHJvcFR5cGVzLm9uZU9mKFsnbGcnLCAnbWQnLCAnc20nLCAneGwnLCAneHMnLCBmYWxzZV0pLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25CYWNrZHJvcENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIENhbiBiZTogYFwiZXNjYXBlS2V5RG93blwiYCwgYFwiYmFja2Ryb3BDbGlja1wiYC5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGRpYWxvZyBlbnRlcnMuXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZGlhbG9nIGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGVudGVyaW5nLlxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZCxcbiAgICogYGRpc2FibGVLZXlib2FyZGAgaXMgZmFsc2UgYW5kIHRoZSBtb2RhbCBpcyBpbiBmb2N1cy5cbiAgICovXG4gIG9uRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgZGlhbG9nIGV4aXRzLlxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZGlhbG9nIGhhcyBleGl0ZWQuXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGRpYWxvZyBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgRGlhbG9nIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgdG8gcmVuZGVyIHRoZSBib2R5IG9mIHRoZSBkaWFsb2cuXG4gICAqL1xuICBQYXBlckNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFBhcGVyYF0oL2FwaS9wYXBlci8pIGVsZW1lbnQuXG4gICAqL1xuICBQYXBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIGNvbnRhaW5lciBmb3Igc2Nyb2xsaW5nIHRoZSBkaWFsb2cuXG4gICAqL1xuICBzY3JvbGw6IFByb3BUeXBlcy5vbmVPZihbJ2JvZHknLCAncGFwZXInXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHRyYW5zaXRpb24uXG4gICAqIFtGb2xsb3cgdGhpcyBndWlkZV0oL2NvbXBvbmVudHMvdHJhbnNpdGlvbnMvI3RyYW5zaXRpb25jb21wb25lbnQtcHJvcCkgdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgcmVxdWlyZW1lbnRzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BUcmFuc2l0aW9uYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wcykgZWxlbWVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlEaWFsb2cnXG59KShEaWFsb2cpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IDgsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgZmxleDogJzAgMCBhdXRvJ1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVTcGFjaW5nPXtmYWxzZX1gLiAqL1xuICBzcGFjaW5nOiB7XG4gICAgJyYgPiA6bm90KDpmaXJzdC1jaGlsZCknOiB7XG4gICAgICBtYXJnaW5MZWZ0OiA4XG4gICAgfVxuICB9XG59O1xudmFyIERpYWxvZ0FjdGlvbnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaWFsb2dBY3Rpb25zKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRkaXNhYmxlU3BhY2luZyA9IHByb3BzLmRpc2FibGVTcGFjaW5nLFxuICAgICAgZGlzYWJsZVNwYWNpbmcgPSBfcHJvcHMkZGlzYWJsZVNwYWNpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTcGFjaW5nLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiZGlzYWJsZVNwYWNpbmdcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgIWRpc2FibGVTcGFjaW5nICYmIGNsYXNzZXMuc3BhY2luZyksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRGlhbG9nQWN0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYWN0aW9ucyBkbyBub3QgaGF2ZSBhZGRpdGlvbmFsIG1hcmdpbi5cbiAgICovXG4gIGRpc2FibGVTcGFjaW5nOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlEaWFsb2dBY3Rpb25zJ1xufSkoRGlhbG9nQWN0aW9ucyk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgIC8vIEFkZCBpT1MgbW9tZW50dW0gc2Nyb2xsaW5nLlxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwYWRkaW5nOiAnOHB4IDI0cHgnLFxuICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIC8vIGRpYWxvZyB3aXRob3V0IHRpdGxlXG4gICAgICAgIHBhZGRpbmdUb3A6IDIwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpdmlkZXJzPXt0cnVlfWAuICovXG4gICAgZGl2aWRlcnM6IHtcbiAgICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnLFxuICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKSxcbiAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuZGl2aWRlcilcbiAgICB9XG4gIH07XG59O1xudmFyIERpYWxvZ0NvbnRlbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaWFsb2dDb250ZW50KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpdmlkZXJzID0gcHJvcHMuZGl2aWRlcnMsXG4gICAgICBkaXZpZGVycyA9IF9wcm9wcyRkaXZpZGVycyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGl2aWRlcnMsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpdmlkZXJzXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgZGl2aWRlcnMgJiYgY2xhc3Nlcy5kaXZpZGVycyksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRGlhbG9nQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogRGlzcGxheSB0aGUgdG9wIGFuZCBib3R0b20gZGl2aWRlcnMuXG4gICAqL1xuICBkaXZpZGVyczogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpRGlhbG9nQ29udGVudCdcbn0pKERpYWxvZ0NvbnRlbnQpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEyXG4gIH1cbn07XG52YXIgRGlhbG9nQ29udGVudFRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaWFsb2dDb250ZW50VGV4dChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCBfZXh0ZW5kcyh7XG4gICAgY29tcG9uZW50OiBcInBcIixcbiAgICB2YXJpYW50OiBcImJvZHkxXCIsXG4gICAgY29sb3I6IFwidGV4dFNlY29uZGFyeVwiLFxuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZ0NvbnRlbnRUZXh0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlEaWFsb2dDb250ZW50VGV4dCdcbn0pKERpYWxvZ0NvbnRlbnRUZXh0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9UeXBvZ3JhcGh5JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnLFxuICAgIGZsZXg6ICcwIDAgYXV0bydcbiAgfVxufTtcbnZhciBEaWFsb2dUaXRsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIERpYWxvZ1RpdGxlKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlVHlwb2dyYSA9IHByb3BzLmRpc2FibGVUeXBvZ3JhcGh5LFxuICAgICAgZGlzYWJsZVR5cG9ncmFwaHkgPSBfcHJvcHMkZGlzYWJsZVR5cG9ncmEgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVUeXBvZ3JhLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVUeXBvZ3JhcGh5XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBkaXNhYmxlVHlwb2dyYXBoeSA/IGNoaWxkcmVuIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIGNvbXBvbmVudDogXCJoMlwiLFxuICAgIHZhcmlhbnQ6IFwiaDZcIlxuICB9LCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBEaWFsb2dUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2hpbGRyZW4gd29uJ3QgYmUgd3JhcHBlZCBieSBhIHR5cG9ncmFwaHkgY29tcG9uZW50LlxuICAgKiBGb3IgaW5zdGFuY2UsIHRoaXMgY2FuIGJlIHVzZWZ1bCB0byByZW5kZXIgYW4gaDQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBoMi5cbiAgICovXG4gIGRpc2FibGVUeXBvZ3JhcGh5OiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlEaWFsb2dUaXRsZSdcbn0pKERpYWxvZ1RpdGxlKTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9hLCBfYiwgX2M7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIjtcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcbmltcG9ydCBTbGlkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVcIjtcbnZhciBfZCA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSwgb3BlbiA9IF9kWzBdLCBzZXRPcGVuID0gX2RbMV07XG52YXIgaGFuZGxlQ2xpY2tPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHNldE9wZW4odHJ1ZSk7XG59O1xudmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHNldE9wZW4oZmFsc2UpO1xufTtcbnZhciBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihfYSA9IGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIHJlZikge1xuICAgIHJldHVybiBfanN4KFNsaWRlLCBfX2Fzc2lnbih7IGRpcmVjdGlvbjogXCJ1cFwiLCByZWY6IHJlZiB9LCBwcm9wcyksIHZvaWQgMCk7XG59KTtcbiRSZWZyZXNoUmVnJChfYSwgXCJUcmFuc2l0aW9uJFJlYWN0LmZvcndhcmRSZWZcIik7XG5fYiA9IFRyYW5zaXRpb247XG4kUmVmcmVzaFJlZyQoX2IsIFwiVHJhbnNpdGlvblwiKTtcbnZhciBJdGVtRGV0YWlsID0gZnVuY3Rpb24gKF9kKSB7XG4gICAgdmFyIGl0ZW0gPSBfZC5pdGVtO1xuICAgIHJldHVybiAoX2pzeHMoRGlhbG9nLCBfX2Fzc2lnbih7IG9wZW46IG9wZW4sIFRyYW5zaXRpb25Db21wb25lbnQ6IFRyYW5zaXRpb24sIGtlZXBNb3VudGVkOiB0cnVlLCBvbkNsb3NlOiBoYW5kbGVDbG9zZSwgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiYWxlcnQtZGlhbG9nLXNsaWRlLWRlc2NyaXB0aW9uXCIgfSwgeyBjaGlsZHJlbjogW19qc3goRGlhbG9nVGl0bGUsIF9fYXNzaWduKHsgaWQ6IFwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCIgfSwgeyBjaGlsZHJlbjogXCJVc2UgR29vZ2xlJ3MgbG9jYXRpb24gc2VydmljZT9cIiB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goRGlhbG9nQ29udGVudCwgeyBjaGlsZHJlbjogX2pzeChEaWFsb2dDb250ZW50VGV4dCwgX19hc3NpZ24oeyBpZDogXCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIiB9LCB7IGNoaWxkcmVuOiBcIkxldCBHb29nbGUgaGVscCBhcHBzIGRldGVybWluZSBsb2NhdGlvbi4gVGhpcyBtZWFucyBzZW5kaW5nIGFub255bW91cyBsb2NhdGlvbiBkYXRhIHRvIEdvb2dsZSwgZXZlbiB3aGVuIG5vIGFwcHMgYXJlIHJ1bm5pbmcuXCIgfSksIHZvaWQgMCkgfSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3hzKERpYWxvZ0FjdGlvbnMsIHsgY2hpbGRyZW46IFtfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBoYW5kbGVDbG9zZSwgY29sb3I6IFwicHJpbWFyeVwiIH0sIHsgY2hpbGRyZW46IFwiRGlzYWdyZWVcIiB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogaGFuZGxlQ2xvc2UsIGNvbG9yOiBcInByaW1hcnlcIiB9LCB7IGNoaWxkcmVuOiBcIkFncmVlXCIgfSksIHZvaWQgMCldIH0sIHZvaWQgMCldIH0pLCB2b2lkIDApKTtcbn07XG5fYyA9IEl0ZW1EZXRhaWw7XG4kUmVmcmVzaFJlZyQoX2MsIFwiSXRlbURldGFpbFwiKTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWw7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMmRhN2RmNzI0NTIzMTczZDNlM1wiKSJdLCJzb3VyY2VSb290IjoiIn0=