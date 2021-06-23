/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".next {\\n  cursor: pointer;\\n}\\n\\n.fade-out {\\n  animation-name: fadeOutUp;\\n  animation-duration: 0.5s;\\n  animation-fill-mode: both;\\n  animation-delay: 0;\\n}\\n\\n.hide {\\n  width: 0 !important;\\n  height: 0 !important;\\n  display: none !important;\\n}\\n.hide * {\\n  width: 0 !important;\\n  height: 0 !important;\\n  display: none !important;\\n}\\n\\n.fade-in {\\n  animation-name: fadeInUp;\\n  animation-duration: 0.5s;\\n  animation-fill-mode: both;\\n  animation-delay: 0.5s;\\n}\\n\\nbody {\\n  display: flex;\\n  height: 100vh;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #e0e0e0;\\n  margin: 0;\\n}\\nbody .resume-page {\\n  margin-top: auto;\\n  margin-bottom: auto;\\n  opacity: 0;\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: center;\\n  flex-direction: column;\\n  font-family: \\\"Raleway\\\", sans-serif;\\n  width: 100%;\\n}\\nbody .resume-page ::selection {\\n  background: #e0e0e0;\\n}\\nbody .home-page {\\n  margin-top: auto;\\n  margin-bottom: auto;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n}\\nbody .home-page ::selection {\\n  background: #f5f5f5;\\n}\\nbody .home-page .name {\\n  display: flex;\\n  justify-content: center;\\n  font-family: \\\"Raleway\\\", sans-serif;\\n  color: #511370;\\n  font-size: 86px;\\n  opacity: 0;\\n  animation-name: fadeInUp;\\n  animation-duration: 0.5s;\\n  animation-fill-mode: both;\\n  animation-delay: 0.25s;\\n  margin-bottom: 2vh;\\n  text-align: center;\\n  width: 100%;\\n}\\nbody .home-page .desc {\\n  opacity: 0;\\n  display: block;\\n  text-align: center;\\n  animation-name: fadeInUp;\\n  animation-duration: 0.5s;\\n  animation-fill-mode: both;\\n  animation-delay: 0.5s;\\n  color: #511370;\\n  font-size: 36px;\\n  font-family: \\\"Raleway\\\", sans-serif;\\n  margin-bottom: 2vh;\\n  width: 100%;\\n}\\nbody .home-page .desc a {\\n  color: #4e4e4e;\\n}\\nbody .home-page .links {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: row;\\n  justify-content: center;\\n  width: 90%;\\n  padding: 0 5%;\\n}\\nbody .home-page .links .link {\\n  animation-name: fadeInUp;\\n  animation-duration: 0.5s;\\n  animation-fill-mode: both;\\n  animation-delay: 1s;\\n  margin: 8px;\\n  width: 64px;\\n  height: 64px;\\n  opacity: 0;\\n  width: 100%;\\n  color: #511370;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-decoration: none;\\n  border-radius: 10%;\\n  border: 2px solid #511370;\\n}\\nbody .home-page .links .link:nth-child(2) {\\n  animation-delay: 1.1s;\\n}\\nbody .home-page .links .link:nth-child(3) {\\n  animation-delay: 1.2s;\\n}\\nbody .home-page .links .link:nth-child(4) {\\n  animation-delay: 1.3s;\\n}\\nbody .home-page .links .link:nth-child(5) {\\n  animation-delay: 1.4s;\\n}\\nbody .home-page .links .link:nth-child(6) {\\n  animation-delay: 1.5s;\\n}\\nbody .home-page .links .link:nth-child(7) {\\n  animation-delay: 1.6s;\\n}\\nbody .home-page .links .link:nth-child(8) {\\n  animation-delay: 1.7s;\\n}\\nbody .home-page .links .link i {\\n  width: 46px;\\n  height: 46px;\\n  font-size: 46px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\nbody .home-page .links .link:hover {\\n  background-color: #f5f5f5;\\n  transition: 250ms background-color, 250ms box-shadow, 250ms max-height;\\n  box-shadow: 4px 4px 0 #511370;\\n}\\nbody .home-page .links .title {\\n  z-index: 1;\\n  position: absolute;\\n  width: 100%;\\n  text-align: center;\\n  top: 0;\\n  height: 20%;\\n}\\n\\n@keyframes fadeInUp {\\n  from {\\n    opacity: 0;\\n    transform: translate3d(0, 4vh, 0);\\n  }\\n  to {\\n    transform: translate3d(0, 0, 0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes fadeOutUp {\\n  from {\\n    transform: translate3d(0, 0, 0);\\n    opacity: 1;\\n  }\\n  to {\\n    transform: translate3d(0, -4vh, 0);\\n    opacity: 0;\\n  }\\n}\\n@media (min-width: 0px) {\\n  body .home-page {\\n    width: 240px;\\n  }\\n  body .home-page .name {\\n    font-size: 36px;\\n  }\\n  body .home-page .desc {\\n    font-size: 16px;\\n  }\\n  body .home-page .links .link {\\n    margin: 12px;\\n    width: 64px;\\n    height: 64px;\\n  }\\n  body .home-page .links .link i {\\n    width: 48px;\\n    height: 48px;\\n    font-size: 48px;\\n  }\\n}\\n@media (min-width: 360px) {\\n  body .home-page {\\n    width: 350px;\\n  }\\n  body .home-page .name {\\n    font-size: 42px;\\n  }\\n  body .home-page .desc {\\n    font-size: 16px;\\n  }\\n  body .home-page .links .link {\\n    margin: 12px;\\n    width: 64px;\\n    height: 64px;\\n  }\\n  body .home-page .links .link i {\\n    width: 48px;\\n    height: 48px;\\n    font-size: 48px;\\n  }\\n}\\n@media (min-width: 540px) {\\n  body .home-page {\\n    width: 520px;\\n  }\\n  body .home-page .name {\\n    font-size: 48px;\\n  }\\n  body .home-page .desc {\\n    font-size: 24px;\\n  }\\n  body .home-page .links {\\n    width: 360px;\\n  }\\n  body .home-page .links .link {\\n    margin: 12px;\\n    width: 48px;\\n    height: 48px;\\n  }\\n  body .home-page .links .link i {\\n    width: 36px;\\n    height: 36px;\\n    font-size: 36px;\\n  }\\n}\\n@media (min-width: 820px) {\\n  body .home-page,\\nbody .resume-page {\\n    width: 820px;\\n    display: flex;\\n    justify-content: center;\\n  }\\n  body .home-page .name,\\nbody .resume-page .name {\\n    font-size: 86px;\\n  }\\n  body .home-page .desc,\\nbody .resume-page .desc {\\n    font-size: 36px;\\n  }\\n  body .home-page .back-button-container,\\nbody .resume-page .back-button-container {\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    margin-bottom: 2vh;\\n  }\\n  body .home-page .back-button-container div,\\nbody .resume-page .back-button-container div {\\n    padding: 14px;\\n    color: #511370;\\n    font-family: \\\"Raleway\\\", sans-serif;\\n    background-color: #f5f5f5;\\n    box-shadow: 4px 4px 0 #511370;\\n    border: 1px solid #511370;\\n    cursor: pointer;\\n  }\\n  body .home-page .resume-container,\\nbody .resume-page .resume-container {\\n    margin: 2vh 0;\\n    background-color: #f5f5f5;\\n    padding: 24px;\\n    box-shadow: 4px 4px 0 #511370;\\n    border: 1px solid #511370;\\n  }\\n  body .home-page .resume-container .resume-header,\\nbody .resume-page .resume-container .resume-header {\\n    width: 100%;\\n    text-align: center;\\n    font-size: 36px;\\n    color: #511370;\\n  }\\n  body .home-page .resume-container .resume-header a,\\nbody .resume-page .resume-container .resume-header a {\\n    font-size: 24px;\\n    color: #511370;\\n  }\\n  body .home-page .resume-container .resume-section,\\nbody .resume-page .resume-container .resume-section {\\n    margin-bottom: 2vh;\\n  }\\n  body .home-page .resume-container .resume-section .resume-title,\\nbody .resume-page .resume-container .resume-section .resume-title {\\n    font-weight: bold;\\n    font-size: 30px;\\n    color: #511370;\\n  }\\n  body .home-page .resume-container .resume-section .resume-subtitle,\\nbody .resume-page .resume-container .resume-section .resume-subtitle {\\n    font-size: 24px;\\n    color: #511370;\\n    margin-bottom: 1vh;\\n  }\\n  body .home-page .resume-container .resume-section .resume-desc,\\nbody .resume-page .resume-container .resume-section .resume-desc {\\n    font-size: 18px;\\n    color: #4e4e4e;\\n    margin-bottom: 8px;\\n  }\\n  body .home-page .links,\\nbody .resume-page .links {\\n    width: 600px;\\n  }\\n  body .home-page .links .link,\\nbody .resume-page .links .link {\\n    margin: 12px;\\n    width: 97px;\\n    height: 97px;\\n  }\\n  body .home-page .links .link i,\\nbody .resume-page .links .link i {\\n    width: 64px;\\n    height: 64px;\\n    font-size: 64px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shipio/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://shipio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://shipio/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shipio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\r\nvar homeEl = document.getElementsByClassName('home-page')[0];\r\nvar resumeEl = document.getElementsByClassName('resume-page')[0];\r\ndocument.getElementById('resume-button').onclick = function (_) {\r\n    hide(homeEl);\r\n    show(resumeEl);\r\n};\r\ndocument.getElementById('home-button').onclick = function (_) {\r\n    show(homeEl);\r\n    hide(resumeEl);\r\n};\r\nvar hide = function (el) {\r\n    el.classList.remove('fade-in');\r\n    el.classList.add('fade-out');\r\n    setTimeout(function () { return el.classList.add('hide'); }, 500);\r\n};\r\nvar show = function (el) {\r\n    el.classList.add('fade-in');\r\n    el.classList.remove('fade-out');\r\n    setTimeout(function () { return el.classList.remove('hide'); }, 500);\r\n};\r\n\n\n//# sourceURL=webpack://shipio/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;