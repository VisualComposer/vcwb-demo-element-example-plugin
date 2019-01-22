(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./node_modules/raw-loader/index.js!./textTest/editor.css":
/*!*******************************************************!*\
  !*** ./node_modules/raw-loader!./textTest/editor.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-text-block {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack:///./textTest/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./textTest/component.js":
/*!*******************************!*\
  !*** ./textTest/component.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\n\nvar TextTestElement = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(TextTestElement, _vcvAPI$elementCompon);\n\n  function TextTestElement() {\n    (0, _classCallCheck3.default)(this, TextTestElement);\n    return (0, _possibleConstructorReturn3.default)(this, (TextTestElement.__proto__ || (0, _getPrototypeOf2.default)(TextTestElement)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(TextTestElement, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor;\n      var output = atts.output,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId; // destructuring assignment for attributes from settings.json with access public\n\n      var textBlockClasses = 'vce-text-test-block';\n      var wrapperClasses = 'vce-text-block-test-wrapper vce';\n      var customProps = {};\n      if (typeof customClass === 'string' && customClass) {\n        textBlockClasses = textBlockClasses.concat(' ' + customClass);\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({ className: textBlockClasses }, editor, customProps),\n        _react2.default.createElement(\n          'div',\n          (0, _extends3.default)({ className: wrapperClasses, id: 'el-' + id }, doAll),\n          output\n        )\n      );\n    }\n  }]);\n  return TextTestElement;\n}(vcvAPI.elementComponent);\n\nexports.default = TextTestElement;\n\n//# sourceURL=webpack:///./textTest/component.js?");

/***/ }),

/***/ "./textTest/index.js":
/*!***************************!*\
  !*** ./textTest/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(/*! ./component */ \"./textTest/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./textTest/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component2.default);\n},\n// css settings // css for element\n{\n  css: false,\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./textTest/editor.css\")\n});\n\n//# sourceURL=webpack:///./textTest/index.js?");

/***/ }),

/***/ "./textTest/settings.json":
/*!********************************!*\
  !*** ./textTest/settings.json ***!
  \********************************/
/*! exports provided: output, darkTextSkin, designOptions, editFormTab1, metaEditFormTabs, relatedTo, metaOrder, customClass, metaCustomId, tag, default */
/***/ (function(module) {

eval("module.exports = {\"output\":{\"type\":\"htmleditor\",\"access\":\"public\",\"value\":\"<p>Testing Elements API. HTML editor also the part of the editor</p>\",\"options\":{\"label\":\"Content\",\"description\":\"Content for text block\",\"inline\":true,\"skinToggle\":\"darkTextSkin\"}},\"darkTextSkin\":{\"type\":\"toggleSmall\",\"access\":\"public\",\"value\":false},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"output\",\"outputInline\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"metaOrder\":{\"type\":\"number\",\"access\":\"protected\",\"value\":3},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"textTest\"}};\n\n//# sourceURL=webpack:///./textTest/settings.json?");

/***/ })

},[['./textTest/index.js']]]);