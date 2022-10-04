"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseButton = function CloseButton(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Container, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "#fff",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M18 6L6 18",
        stroke: "white",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M6 6L18 18",
        stroke: "white",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    })
  }));
};

var Container = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.3rem;\n    border: none;\n    background-color: black;\n    color: white;\n    fill: white;\n    line-height: 0;\n    cursor: pointer;\n    border-radius: 50%;\n    transform: translate(50%, -50%);\n\n    svg {\n        width: 1.1em;\n        height: 1.1em;\n    }\n"])));

var _default = CloseButton;
exports.default = _default;