"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var _excluded = ["open", "onClose", "title", "children", "clickClose", "escapeClose", "showClose", "fadeDuration", "fadeDelay", "modalClass"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dialog = function Dialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      title = _ref.title,
      children = _ref.children,
      clickClose = _ref.clickClose,
      escapeClose = _ref.escapeClose,
      showClose = _ref.showClose,
      fadeDuration = _ref.fadeDuration,
      fadeDelay = _ref.fadeDelay,
      modalClass = _ref.modalClass,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    var handleEscape = function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (escapeClose) {
      document.addEventListener("keydown", handleEscape);
    }

    return function () {
      if (escapeClose) {
        document.removeEventListener("keydown", handleEscape);
      }
    };
  }, [escapeClose, onClose]);
  if (!open) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Container, _objectSpread(_objectSpread({
    onClick: clickClose ? onClose : null,
    "aria-modal": "true",
    "aria-hidden": open ? "true" : "false",
    role: "dialog",
    fadeDuration: fadeDuration,
    fadeDelay: fadeDelay
  }, otherProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Modal, {
      onClick: function onClick(e) {
        e.stopPropagation();
      },
      modalClass: modalClass,
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(TitleContainer, {
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Content, {
        children: children
      }), showClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CloseButton.default, {
        onClick: onClose,
        "aria-label": "Close"
      })]
    })
  }));
};

exports.Dialog = Dialog;
Dialog.propTypes = {
  open: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  children: _propTypes.default.node.isRequired,
  clickClose: _propTypes.default.bool,
  escapeClose: _propTypes.default.bool,
  showClose: _propTypes.default.bool,
  fadeDuration: _propTypes.default.number,
  fadeDelay: _propTypes.default.number,
  modalClass: _propTypes.default.string
};
Dialog.defaultProps = {
  title: null,
  clickClose: true,
  escapeClose: true,
  showClose: true,
  fadeDuration: 0.3,
  fadeDelay: 0
};

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n\n    z-index: 1000;\n    display: flex;\n    padding: 2rem;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.5);\n\n    animation: fadeIn ", "s\n        ", "s ease-in-out;\n"])), function (props) {
  return props.fadeDuration;
}, function (props) {
  return props.fadeDelay;
});

var TitleContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 1em;\n"])));

var Modal = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    width: 100%;\n    max-width: 600px;\n    max-height: 80vh;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n"])));

var Content = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex: 1;\n    padding: 1em;\n"])));