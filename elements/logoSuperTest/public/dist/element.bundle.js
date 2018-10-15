(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./logoSuperTest/component.js":
/*!************************************!*\
  !*** ./logoSuperTest/component.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _classnames = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\n\nvar LogoSuperTest = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(LogoSuperTest, _vcvAPI$elementCompon);\n\n  function LogoSuperTest(props) {\n    (0, _classCallCheck3.default)(this, LogoSuperTest);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (LogoSuperTest.__proto__ || (0, _getPrototypeOf2.default)(LogoSuperTest)).call(this, props));\n\n    _this.state = {\n      logo: window.vcvLogo || ''\n    };\n    return _this;\n  }\n\n  (0, _createClass3.default)(LogoSuperTest, [{\n    key: 'getLogo',\n    value: function getLogo() {\n      return _react2.default.createElement('div', { className: 'vcvhelper', 'data-vcvs-html': '[vcv_logo size=' + this.props.atts.size + ']', dangerouslySetInnerHTML: { __html: this.state.logo || '' } });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor;\n      var size = atts.size,\n          alignment = atts.alignment,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId;\n\n      var containerClasses = [];\n      var elementClasses = ['vce', 'vce-logo-widget'];\n      var containerStyle = {};\n      var customProps = {};\n\n      var Sizes = window.vcvImageSizes ? window.vcvImageSizes : {\n        thumbnail: { width: 150 },\n        medium: { width: 300 },\n        large: { width: 1024 }\n      };\n\n      if (Sizes[size] && Sizes[size].width) {\n        containerStyle.width = Sizes[size].width + 'px';\n      } else {\n        var sizeMatch = size.match(/\\d+x\\d+$/g);\n        if (sizeMatch && sizeMatch.length === 1) {\n          var sizes = sizeMatch[0].split('x');\n          containerStyle.width = sizes[0] + 'px';\n          containerStyle.height = sizes[1] + 'px';\n        } else {\n          containerStyle.width = '';\n          containerStyle.height = '';\n        }\n      }\n\n      if (alignment) {\n        containerClasses.push('vce-logo-widget--align-' + alignment);\n      }\n\n      if (typeof customClass === 'string' && customClass) {\n        containerClasses.push(customClass);\n      }\n\n      containerClasses = (0, _classnames2.default)(containerClasses);\n      elementClasses = (0, _classnames2.default)(elementClasses);\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var doAll = this.applyDO('all');\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({}, editor, { id: 'el-' + id, className: containerClasses }),\n        _react2.default.createElement(\n          'div',\n          (0, _extends3.default)({ className: elementClasses, style: containerStyle }, doAll, customProps),\n          'This is test logo: ',\n          this.getLogo()\n        )\n      );\n    }\n  }]);\n  return LogoSuperTest;\n}(vcvAPI.elementComponent);\n\nexports.default = LogoSuperTest;\n\n//# sourceURL=webpack:///./logoSuperTest/component.js?");

/***/ }),

/***/ "./logoSuperTest/index.js":
/*!********************************!*\
  !*** ./logoSuperTest/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(/*! ./component */ \"./logoSuperTest/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable import/no-webpack-loader-syntax */\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./logoSuperTest/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component2.default);\n},\n// css settings // css for element\n{\n  'css': __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./logoSuperTest/styles.css\"),\n  'editorCss': __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./logoSuperTest/editor.css\"),\n  'mixins': {}\n});\n\n//# sourceURL=webpack:///./logoSuperTest/index.js?");

/***/ }),

/***/ "./logoSuperTest/settings.json":
/*!*************************************!*\
  !*** ./logoSuperTest/settings.json ***!
  \*************************************/
/*! exports provided: size, alignment, customClass, designOptions, editFormTab1, metaEditFormTabs, relatedTo, metaCustomId, tag, default */
/***/ (function(module) {

eval("module.exports = {\"size\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"full\",\"options\":{\"label\":\"Size\",\"description\":\"Enter image size (Example: 'thumbnail', 'medium', 'large', 'full' or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height)).\"}},\"alignment\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"left\",\"options\":{\"label\":\"Alignment\",\"values\":[{\"label\":\"Left\",\"value\":\"left\",\"icon\":\"vcv-ui-icon-attribute-alignment-left\"},{\"label\":\"Center\",\"value\":\"center\",\"icon\":\"vcv-ui-icon-attribute-alignment-center\"},{\"label\":\"Right\",\"value\":\"right\",\"icon\":\"vcv-ui-icon-attribute-alignment-right\"}]}},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"size\",\"alignment\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"logoSuperTest\"}};\n\n//# sourceURL=webpack:///./logoSuperTest/settings.json?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./logoSuperTest/editor.css":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./logoSuperTest/editor.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-logo-widget {\\n  min-height: 1em;\\n}\\n\\n.vce-logo-widget vcvhelper, .vce-logo-widget .vcvhelper {\\n  height: 100%;\\n  border: 1px dotted #aaa;\\n}\"\n\n//# sourceURL=webpack:///./logoSuperTest/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./logoSuperTest/styles.css":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./logoSuperTest/styles.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vce-logo-widget {\\n  display: inline-block;\\n  width: 100%;\\n  max-width: 100%;\\n  overflow: hidden;\\n}\\n.vce-logo-widget--align-left {\\n  text-align: left;\\n}\\n.vce-logo-widget--align-center {\\n  text-align: center;\\n}\\n.vce-logo-widget--align-right {\\n  text-align: right;\\n}\\n.vce-logo-widget .custom-logo-link {\\n  padding-right: 0;\\n  box-shadow: none;\\n}\\n.vce-logo-widget .custom-logo-link img {\\n  box-shadow: none;\\n}\\n.vce-logo-widget img {\\n  max-height: 100%;\\n  max-width: 100%;\\n  box-shadow: none;\\n  height: auto;\\n}\\n\"\n\n//# sourceURL=webpack:///./logoSuperTest/styles.css?./node_modules/raw-loader");

/***/ })

},[['./logoSuperTest/index.js']]]);