/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["vcvWebpackJsonp4x"] = self["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./demoGrid/component.js":
/*!*******************************!*\
  !*** ./demoGrid/component.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DemoGrid; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var vc_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vc-helpers */ \"./node_modules/vc-helpers/lib/index.js\");\n/* harmony import */ var vc_helpers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vc_helpers__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar vcvAPI = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getService)('api');\nvar DemoGrid = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(DemoGrid, _vcvAPI$elementCompon);\n  var _super = _createSuper(DemoGrid);\n  function DemoGrid(props) {\n    var _this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, DemoGrid);\n    _this = _super.call(this, props);\n    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createRef();\n    _this.state = {\n      shortcode: '',\n      shortcodeContent: _this.spinnerHTML()\n    };\n    _this.debounceRequest = lodash__WEBPACK_IMPORTED_MODULE_8___default().debounce(_this.requestToServer, 750);\n    return _this;\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DemoGrid, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.requestToServer();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var isEqual = (lodash__WEBPACK_IMPORTED_MODULE_8___default().isEqual);\n      if (!isEqual(this.props.atts, prevProps.atts)) {\n        this.debounceRequest();\n      }\n    }\n  }, {\n    key: \"componentwillUnmount\",\n    value: function componentwillUnmount() {\n      if (this.serverRequest) {\n        this.serverRequest.cancelled = true;\n      }\n    }\n  }, {\n    key: \"requestToServer\",\n    value: function requestToServer() {\n      var _this2 = this;\n      if (!this.props.atts.gridItem || !this.props.atts.sourceItem) {\n        return;\n      }\n      var dataProcessService = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getService)('dataProcessor');\n      var Cook = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getService)('cook');\n      var GridItemComponent = Cook.get(this.props.atts.gridItem);\n      var SourceItemComponent = Cook.get(this.props.atts.sourceItem);\n      var gridItemOutput = GridItemComponent.render(null, false);\n      var sourceItemOutput = SourceItemComponent.render(null, false);\n      var ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.browser.js\");\n      var striptags = __webpack_require__(/*! striptags */ \"./node_modules/striptags/src/striptags.js\");\n      if (this.ref.current) {\n        this.ref.current.innerHTML = this.spinnerHTML();\n      }\n      this.serverRequest = dataProcessService.appServerRequest({\n        'vcv-action': 'elements:posts_grid:adminNonce',\n        'vcv-nonce': window.vcvNonce,\n        'vcv-content': ReactDOMServer.renderToStaticMarkup(gridItemOutput),\n        'vcv-source-id': window.vcvSourceID,\n        'vcv-atts': {\n          source: encodeURIComponent(JSON.stringify({\n            tag: this.props.atts.sourceItem.tag,\n            value: striptags(ReactDOMServer.renderToStaticMarkup(sourceItemOutput))\n          })),\n          unique_id: this.props.id,\n          excerpt: this.props.atts.atts_excerpt ? '1' : '0',\n          excerpt_length: this.props.atts.atts_excerpt_length,\n          pagination: this.props.atts.atts_pagination ? '1' : '0',\n          pagination_color: this.props.atts.atts_pagination_color,\n          pagination_per_page: this.props.atts.atts_pagination_per_page,\n          filter: this.props.atts.filtersToggle,\n          filter_atts: encodeURIComponent(JSON.stringify(this.props.atts.filterItem))\n        }\n      }).then(function (result) {\n        if (_this2.serverRequest && _this2.serverRequest.cancelled) {\n          _this2.serverRequest = null;\n          return;\n        }\n        var response = _this2.getResponse(result);\n        if (response && response.status) {\n          if (_this2.ref.current) {\n            _this2.ref.current.setAttribute('data-vcvs-html', response.shortcode);\n            _this2.ref.current.innerHTML = response.shortcodeContent || 'Failed to render the post grid';\n          }\n        } else {\n          if (_this2.ref.current) {\n            _this2.ref.current.setAttribute('data-vcvs-html', response.shortcode);\n            _this2.ref.current.innerHTML = response.shortcodeContent || 'Failed to render the post grid';\n          }\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n        id = _this$props.id,\n        atts = _this$props.atts,\n        editor = _this$props.editor;\n      var customClass = atts.customClass,\n        metaCustomId = atts.metaCustomId,\n        gap = atts.gap,\n        columns = atts.columns,\n        paginationColor = atts.atts_pagination_color,\n        paginationActiveColor = atts.atts_pagination_active_color,\n        paginationTextColor = atts.atts_pagination_text_color,\n        paginationActiveTextColor = atts.atts_pagination_active_text_color;\n      var gapPx = \"\".concat(gap, \"px\");\n      var paginationHoverColor = this.getColorShade(-0.1, paginationColor);\n      var paginationActiveHoverColor = this.getColorShade(-0.1, paginationActiveColor);\n      var cssVars = {\n        gapPx: gapPx,\n        columns: columns,\n        paginationColor: paginationColor,\n        paginationActiveColor: paginationActiveColor,\n        paginationTextColor: paginationTextColor,\n        paginationActiveTextColor: paginationActiveTextColor,\n        paginationHoverColor: paginationHoverColor,\n        paginationActiveHoverColor: paginationActiveHoverColor\n      };\n      var styleObj = (0,vc_helpers__WEBPACK_IMPORTED_MODULE_10__.setCssVariables)(cssVars);\n      var wrapperClasses = 'vce vce-demo-grid-wrapper';\n      var containerClasses = 'vce-demo-grid-container';\n      var customProps = {};\n      if (customClass) {\n        containerClasses + \" \".concat(customClass), (0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"containerClasses\");\n      }\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n      var doAll = this.applyDO('all');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: containerClasses\n      }, customProps, editor, {\n        style: styleObj\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: wrapperClasses,\n        id: 'el-' + id\n      }, doAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n        className: \"vcvhelper\",\n        ref: this.ref\n      })));\n    }\n  }]);\n  return DemoGrid;\n}(vcvAPI.elementComponent);\n\n\n//# sourceURL=webpack://vcwb/./demoGrid/component.js?");

/***/ }),

/***/ "./demoGrid/index.js":
/*!***************************!*\
  !*** ./demoGrid/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./demoGrid/component.js\");\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\nvar vcvAddElement = vc_cake__WEBPACK_IMPORTED_MODULE_0___default().getService('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./demoGrid/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n},\n// css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./demoGrid/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./demoGrid/editor.css\")\n});\n\n//# sourceURL=webpack://vcwb/./demoGrid/index.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./demoGrid/editor.css":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./demoGrid/editor.css ***!
  \****************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-demo-grid-container {\\n  min-height: 1em;\\n}\\n\"\n\n//# sourceURL=webpack://vcwb/./demoGrid/editor.css?./node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./demoGrid/styles.css":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader/index.js!./demoGrid/styles.css ***!
  \****************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-demo-grid-wrapper {\\n\\toverflow: hidden;\\n}\\n\\n.vce-demo-grid-container .vce-posts-grid-list {\\n\\tdisplay: flex;\\n\\tflex-direction: row;\\n\\tjustify-content: flex-start;\\n\\talign-items: stretch;\\n\\talign-content: flex-start;\\n\\tflex-wrap: wrap;\\n}\\n\\n.vce-demo-grid-container .vce-demo-grid-item {\\n\\tflex: 0 0 100%;\\n\\tmax-width: 100%;\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\toverflow: hidden;\\n\\tposition: relative;\\n\\tborder: none;\\n}\\n\\n.vce-demo-grid-container .vce-posts-grid-pagination {\\n\\ttext-align: center;\\n\\tmargin: 30px 0 12px;\\n\\tfont-style: italic;\\n}\\n\\n.vce-demo-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item {\\n\\tdisplay: inline-block;\\n\\tborder-radius: 50%;\\n\\tmargin: 3px 7px;\\n\\theight: 30px;\\n\\twidth: 30px;\\n\\ttext-decoration: none;\\n\\tline-height: 30px;\\n\\tbox-shadow: none;\\n\\tborder: 0;\\n\\toutline: none;\\n\\ttransition: background .2s ease-in-out;\\n}\\n\\n.vce-demo-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item:hover {\\n\\ttext-decoration: none;\\n\\tbox-shadow: none;\\n\\tborder: 0;\\n\\toutline: none;\\n}\\n\\n.vce-demo-grid-container .vce-posts-grid-pagination .vce-posts-grid-pagination-item:focus {\\n\\ttext-decoration: none;\\n\\tbox-shadow: none;\\n\\tborder: 0;\\n\\toutline: none;\\n}\\n\\n.vce-demo-grid-container .vce-posts-grid-pagination-rest-items {\\n\\tpadding: 0 18px;\\n}\\n\\n.vce.vce-demo-grid-wrapper .vce-posts-grid-list {\\n\\tmargin-left: calc(calc(var(--gapPx) * -1) / 2);\\n\\tmargin-right: calc(calc(var(--gapPx) * -1) / 2);\\n\\tmargin-bottom: calc(var(--gapPx) * -1);\\n}\\n\\n.vce.vce-demo-grid-wrapper .vce-demo-grid-item {\\n\\tpadding-left: calc(var(--gapPx) / 2);\\n\\tpadding-right: calc(var(--gapPx) / 2);\\n\\tmargin-bottom: var(--gapPx);\\n}\\n\\n@media (min-width: 544px) {\\n\\t.vce.vce-demo-grid-wrapper .vce-demo-grid-item {\\n\\t\\t-webkit-flex: 0 0 calc(100% / var(--columns));\\n\\t\\t-ms-flex: 0 0 calc(100% / var(--columns));\\n\\t\\tflex: 0 0 calc(100% / var(--columns));\\n\\t\\tmax-width: calc(100% / var(--columns));\\n\\t}\\n}\\n\\n.vce.vce-demo-grid-wrapper .vce-posts-grid-pagination .vce-posts-grid-pagination-item {\\n\\tbackground-color: var(--paginationColor);\\n\\tcolor: var(--paginationTextColor);\\n}\\n\\n.vce.vce-demo-grid-wrapper .vce-posts-grid-pagination .vce-posts-grid-pagination-item:hover {\\n\\tbackground-color: var(--paginationHoverColor);\\n\\tcolor: var(--paginationTextColor);\\n}\\n\\n.vce.vce-demo-grid-wrapper .vce-posts-grid-pagination-item.vce-state--active {\\n\\tbackground-color: var(--paginationActiveColor);\\n\\tcolor: var(--paginationActiveTextColor);\\n}\\n\\n.vce.vce-demo-grid-wrapper .vce-posts-grid-pagination-item.vce-state--active:hover {\\n\\tbackground-color: var(--paginationActiveHoverColor);\\n}\\n\\n.vce.vce-demo-grid-wrapper .vce-posts-grid-pagination-item.vce-state--active:hover,\\n.vce.vce-demo-grid-wrapper .vce-posts-grid-pagination-item.vce-state--active:focus {\\n\\tcolor: var(--paginationActiveTextColor);\\n}\"\n\n//# sourceURL=webpack://vcwb/./demoGrid/styles.css?./node_modules/raw-loader/index.js");

/***/ }),

/***/ "./demoGrid/settings.json":
/*!********************************!*\
  !*** ./demoGrid/settings.json ***!
  \********************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"gap\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"10\",\"options\":{\"label\":\"Gap\",\"description\":\"Enter the gap in pixels (example: 5).\"}},\"atts_excerpt\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Custom excerpt length\"}},\"atts_excerpt_length\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Excerpt length\",\"description\":\"Limit the post grid excerpt length.\",\"placeholder\":\"55\",\"onChange\":{\"rules\":{\"atts_excerpt\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleVisibility\"}]}}},\"columns\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"3\",\"options\":{\"label\":\"Number of columns\"}},\"atts_pagination\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Enable paging\",\"description\":\"Divide your post grid into pages and control the maximum number of posts per page.\"}},\"atts_pagination_per_page\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"10\",\"options\":{\"label\":\"Items per page\"}},\"atts_pagination_color\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#EEE\",\"options\":{\"label\":\"Inactive page color\"}},\"atts_pagination_active_color\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#557CBF\",\"options\":{\"label\":\"Active page color\"}},\"atts_pagination_text_color\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#3d3d3d\",\"options\":{\"label\":\"Inactive text color\"}},\"atts_pagination_active_text_color\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#FFF\",\"options\":{\"label\":\"Active text color\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"columns\",\"gap\",\"atts_excerpt\",\"atts_excerpt_length\",\"atts_pagination\",\"filtersToggle\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"filtersToggle\":{\"type\":\"toggle\",\"access\":\"public\",\"value\":false,\"options\":{\"label\":\"Enable filters\",\"description\":\"Display content by categories, tags, and other taxonomies.\"}},\"pagination\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"atts_pagination_per_page\",\"atts_pagination_color\",\"atts_pagination_active_color\",\"atts_pagination_text_color\",\"atts_pagination_active_text_color\"],\"options\":{\"label\":\"Pagination\",\"tooltip\":\"Specify how many items will be displayed within the page.\",\"onChange\":{\"rules\":{\"atts_pagination\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleSectionVisibility\"}]}}},\"filterItem\":{\"type\":\"element\",\"access\":\"public\",\"value\":{\"tag\":\"postGridFilter\"},\"options\":{\"category\":\"_postsGridFilters\",\"label\":\"Filters\",\"tooltip\":\"Specify what filters will be displayed within the grid.\",\"onChange\":{\"rules\":{\"filtersToggle\":{\"rule\":\"toggle\"}},\"actions\":[{\"action\":\"toggleSectionVisibility\"}]}}},\"sourceItem\":{\"type\":\"element\",\"access\":\"public\",\"value\":{\"tag\":\"postsGridDataSourcePost\"},\"options\":{\"category\":\"_postsGridSources\",\"_fixElementDownload\":[{\"tag\":\"postsGridDataSourcePost\"},{\"tag\":\"postsGridDataSourcePage\"},{\"tag\":\"postsGridDataSourceCustomPostType\"},{\"tag\":\"postsGridDataSourceListOfIds\"}],\"label\":\"Data Source\",\"tooltip\":\"Specify the type of content to display in the Post grid element.\",\"replaceView\":\"dropdown\",\"merge\":{\"attributes\":[{\"key\":\"attsOffset\",\"type\":\"string\"},{\"key\":\"attsLimit\",\"type\":\"string\"}]}}},\"gridItem\":{\"type\":\"element\",\"access\":\"public\",\"value\":{\"tag\":\"demoGridItem\"},\"options\":{\"_category\":\"postsGridItems\",\"tabLabel\":\"Grid Item\",\"tooltip\":\"Modify existing parameters of a single grid item of the chosen grid element.\"}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":[],\"options\":{\"label\":\"Design Options\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"filterItem\",\"sourceItem\",\"pagination\",\"gridItem\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only).\"}},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from the custom CSS option.\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"demoGrid\"}}');\n\n//# sourceURL=webpack://vcwb/./demoGrid/settings.json?");

/***/ })

},[['./demoGrid/index.js']]]);