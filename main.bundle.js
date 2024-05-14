/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/photos/pizzaBG.jpg */ "./src/assets/photos/pizzaBG.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --HomeBGImg: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  --brown1: #451a03;
  --brown2: #78350f;
  --brown3: #92400e;
  --orange1: #b45309;
  --orange2: #d97706;
  --yellow1: #f59e0b;
  --yellow2: #fbbf24;
  --yellow3: #fcd34d;
  --yellow4: #fde68a;
  --yellow5: #fef3c7;
  --white: #fffbeb;
}
p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
body {
  background-color: black;
  background-image: var(--HomeBGImg);
  background-size: cover;
  background-attachment: fixed;
  background-position: 10%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--white);

  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input {
  color: inherit;
  font: inherit;
}

button {
  border: none;
  appearance: none;
  outline: none;
  background: none;
  cursor: pointer;
}

#content{
  overflow-x:hidden ;
}

/* Home */

header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

header > nav {
  display: flex;
  margin: 0 20px;
}

nav button:hover {
  border-bottom: 3px solid;
  border-color: var(--yellow1);
}

nav > button {
  margin: 0 20px;
  font-size: 1.2rem;
  padding: 0;
}

.titleName {
  margin-left: 40px;
  font-weight: 800;
  font-size: 2.5rem;
}

/* home.js */
.homeContainer {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 700px;
  margin-left: 5rem;
  margin-top: 2rem;
}

.restName {
  font-size: 7rem;
  font-weight: 700;
  color: var(--orange2);
  align-self: center;
}

.tagline {
  align-self: center;
  font-size: 1.2rem;
  color: var(--white);
  margin: 0 10px 40px 10px;
}

.homeContainer button {
  width: 150px;
  align-self: center;
  display: inline-block;
  flex-grow: 0;
  background-color: var(--orange2);
  color: var(--white);
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: 500;
}

.homeContainer button:hover {
  color: var(--white);
  background-color: var(--yellow1);
}

/* menu */
.menuContainer{
  background-color:rgba(0, 0, 0, 0.551);
  margin:20px auto;
  width:90vw;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
}

.ourMenu{
  color: white;
  margin:10px auto;
  width: 90%;
}
.ourMenu h1{
  font-size: 3rem;
  text-align: center;
  margin-bottom: 10px;
}
.ourMenu p{
  text-align: center;
  color: var(--yellow3);
  border-bottom: 2px solid var(--orange2);
  padding-bottom: 20px;
  font-size: 1.3rem;
}

.pizzaCards{
  display: grid;
  width:95%;
  grid-template-columns:repeat( auto-fit, minmax(250px, 1fr) );
  grid-auto-rows: 1fr;
  gap: 30px;
  margin:20px auto;
}

.pizzaCard{
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1.5fr 50px 70px 70px;
  background-color: rgba(0, 0, 0, 0.693);
  border-radius: 10px;
}
.pizzaImg{
  grid-row: 1/2;
  grid-column: 1/3;
  width:100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
.pizzaName{
  grid-column: 1/2;
  grid-row: 2/3;
  align-self: center;
  justify-self: center;
  font-weight: 500;
}
.pizzaPrice{
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: var(--brown3);
  color: var(--white);
  text-align: center;
  padding-top:14px;
  font-weight: 500;
  border-radius: 10px 0 10px 10px;
}
.pizzaDesc{
  grid-row: -2/-3;
  grid-column: 1/-1;
  text-align: center;
  padding:20px 10px 0px 10px;
}
.buyBtn{
  background-color: var(--orange2);
  color: var(--white);
  grid-column: 1/3;
  grid-row:-1/-2;
  margin:15px 30px;
  border-radius: 20px;
}
.buyBtn:hover{
  background-color:var(--orange1);
}
.seeBtn{
  width: 150px;
  font-size: 1.3rem;
  align-self: center;
  background-color: var(--orange2);
  color: var(--white);
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: 500;
  margin: 20px 0;
}
.seeBtn:hover {
  color: var(--white);
  background-color: var(--yellow1);
}

/* contact */
.contContainer{
  margin:auto;
  background-color: rgba(0, 0, 0, 0.614);
  border-radius: 20px;
  width: 90vw;
  display: flex;
  margin-top: 20px;
}

.addressContainer{
  height: inherit;
  width:50%;
  overflow:hidden;
  padding:20px;
}
.addressTitle{
  font-size: 2rem;
  color: var(--yellow1);
}
.addressLine{
  padding:10px 0;
  font-weight: 500;
}
.addressImg{
  object-fit: cover;
}

.formContainer{
  height: inherit;
  width:50%;
  padding:20px;
  /* outline: 1px solid red; */
}
.formTitle{
  margin-bottom: 30px;
  color: var(--yellow1);
}
.formLabel{
  display:block;
  width:100%;
  font-size: 1.2rem;
  font-weight: bold;
}
.formInput{
  font-weight: 400;
  margin-top: 5px;
  font-size: 14px;
  width: 90%;
  margin-bottom: 20px;
  outline: none;
  border-radius: 20px;
  padding:5px 10px;
  color:black;
}
.formBtn{
  width: 95%;
  color: var(--white);
  background-color: var(--orange2);
  border-radius: 20px;
  padding:10px 0;
}
.formBtn:hover{
  background-color: var(--yellow1);
}
.hidden {
  display: none;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),\r\n    0 4px 6px -4px rgb(0 0 0 / 0.1);\r\n  --HomeBGImg: url(./assets/photos/pizzaBG.jpg);\r\n  --brown1: #451a03;\r\n  --brown2: #78350f;\r\n  --brown3: #92400e;\r\n  --orange1: #b45309;\r\n  --orange2: #d97706;\r\n  --yellow1: #f59e0b;\r\n  --yellow2: #fbbf24;\r\n  --yellow3: #fcd34d;\r\n  --yellow4: #fde68a;\r\n  --yellow5: #fef3c7;\r\n  --white: #fffbeb;\r\n}\r\np,h1,h2,h3{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbody {\r\n  background-color: black;\r\n  background-image: var(--HomeBGImg);\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: 10%;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  color: var(--white);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  color: inherit;\r\n  font: inherit;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  appearance: none;\r\n  outline: none;\r\n  background: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#content{\r\n  overflow-x:hidden ;\r\n}\r\n\r\n/* Home */\r\n\r\nheader {\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader > nav {\r\n  display: flex;\r\n  margin: 0 20px;\r\n}\r\n\r\nnav button:hover {\r\n  border-bottom: 3px solid;\r\n  border-color: var(--yellow1);\r\n}\r\n\r\nnav > button {\r\n  margin: 0 20px;\r\n  font-size: 1.2rem;\r\n  padding: 0;\r\n}\r\n\r\n.titleName {\r\n  margin-left: 40px;\r\n  font-weight: 800;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n/* home.js */\r\n.homeContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 300px;\r\n  width: 700px;\r\n  margin-left: 5rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.restName {\r\n  font-size: 7rem;\r\n  font-weight: 700;\r\n  color: var(--orange2);\r\n  align-self: center;\r\n}\r\n\r\n.tagline {\r\n  align-self: center;\r\n  font-size: 1.2rem;\r\n  color: var(--white);\r\n  margin: 0 10px 40px 10px;\r\n}\r\n\r\n.homeContainer button {\r\n  width: 150px;\r\n  align-self: center;\r\n  display: inline-block;\r\n  flex-grow: 0;\r\n  background-color: var(--orange2);\r\n  color: var(--white);\r\n  border-radius: 20px;\r\n  padding: 10px 20px;\r\n  font-weight: 500;\r\n}\r\n\r\n.homeContainer button:hover {\r\n  color: var(--white);\r\n  background-color: var(--yellow1);\r\n}\r\n\r\n/* menu */\r\n.menuContainer{\r\n  background-color:rgba(0, 0, 0, 0.551);\r\n  margin:20px auto;\r\n  width:90vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.ourMenu{\r\n  color: white;\r\n  margin:10px auto;\r\n  width: 90%;\r\n}\r\n.ourMenu h1{\r\n  font-size: 3rem;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.ourMenu p{\r\n  text-align: center;\r\n  color: var(--yellow3);\r\n  border-bottom: 2px solid var(--orange2);\r\n  padding-bottom: 20px;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.pizzaCards{\r\n  display: grid;\r\n  width:95%;\r\n  grid-template-columns:repeat( auto-fit, minmax(250px, 1fr) );\r\n  grid-auto-rows: 1fr;\r\n  gap: 30px;\r\n  margin:20px auto;\r\n}\r\n\r\n.pizzaCard{\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  grid-template-rows: 1.5fr 50px 70px 70px;\r\n  background-color: rgba(0, 0, 0, 0.693);\r\n  border-radius: 10px;\r\n}\r\n.pizzaImg{\r\n  grid-row: 1/2;\r\n  grid-column: 1/3;\r\n  width:100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 10px 10px 0 0;\r\n}\r\n.pizzaName{\r\n  grid-column: 1/2;\r\n  grid-row: 2/3;\r\n  align-self: center;\r\n  justify-self: center;\r\n  font-weight: 500;\r\n}\r\n.pizzaPrice{\r\n  grid-column: 2/3;\r\n  grid-row: 2/3;\r\n  background-color: var(--brown3);\r\n  color: var(--white);\r\n  text-align: center;\r\n  padding-top:14px;\r\n  font-weight: 500;\r\n  border-radius: 10px 0 10px 10px;\r\n}\r\n.pizzaDesc{\r\n  grid-row: -2/-3;\r\n  grid-column: 1/-1;\r\n  text-align: center;\r\n  padding:20px 10px 0px 10px;\r\n}\r\n.buyBtn{\r\n  background-color: var(--orange2);\r\n  color: var(--white);\r\n  grid-column: 1/3;\r\n  grid-row:-1/-2;\r\n  margin:15px 30px;\r\n  border-radius: 20px;\r\n}\r\n.buyBtn:hover{\r\n  background-color:var(--orange1);\r\n}\r\n.seeBtn{\r\n  width: 150px;\r\n  font-size: 1.3rem;\r\n  align-self: center;\r\n  background-color: var(--orange2);\r\n  color: var(--white);\r\n  border-radius: 30px;\r\n  padding: 10px 20px;\r\n  font-weight: 500;\r\n  margin: 20px 0;\r\n}\r\n.seeBtn:hover {\r\n  color: var(--white);\r\n  background-color: var(--yellow1);\r\n}\r\n\r\n/* contact */\r\n.contContainer{\r\n  margin:auto;\r\n  background-color: rgba(0, 0, 0, 0.614);\r\n  border-radius: 20px;\r\n  width: 90vw;\r\n  display: flex;\r\n  margin-top: 20px;\r\n}\r\n\r\n.addressContainer{\r\n  height: inherit;\r\n  width:50%;\r\n  overflow:hidden;\r\n  padding:20px;\r\n}\r\n.addressTitle{\r\n  font-size: 2rem;\r\n  color: var(--yellow1);\r\n}\r\n.addressLine{\r\n  padding:10px 0;\r\n  font-weight: 500;\r\n}\r\n.addressImg{\r\n  object-fit: cover;\r\n}\r\n\r\n.formContainer{\r\n  height: inherit;\r\n  width:50%;\r\n  padding:20px;\r\n  /* outline: 1px solid red; */\r\n}\r\n.formTitle{\r\n  margin-bottom: 30px;\r\n  color: var(--yellow1);\r\n}\r\n.formLabel{\r\n  display:block;\r\n  width:100%;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n.formInput{\r\n  font-weight: 400;\r\n  margin-top: 5px;\r\n  font-size: 14px;\r\n  width: 90%;\r\n  margin-bottom: 20px;\r\n  outline: none;\r\n  border-radius: 20px;\r\n  padding:5px 10px;\r\n  color:black;\r\n}\r\n.formBtn{\r\n  width: 95%;\r\n  color: var(--white);\r\n  background-color: var(--orange2);\r\n  border-radius: 20px;\r\n  padding:10px 0;\r\n}\r\n.formBtn:hover{\r\n  background-color: var(--yellow1);\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/photos sync recursive ^\\.\\/pizza.*\\.jpg$":
/*!****************************************************!*\
  !*** ./src/assets/photos/ sync ^\.\/pizza.*\.jpg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pizza0.jpg": "./src/assets/photos/pizza0.jpg",
	"./pizza1.jpg": "./src/assets/photos/pizza1.jpg",
	"./pizza2.jpg": "./src/assets/photos/pizza2.jpg",
	"./pizza3.jpg": "./src/assets/photos/pizza3.jpg",
	"./pizza4.jpg": "./src/assets/photos/pizza4.jpg",
	"./pizza5.jpg": "./src/assets/photos/pizza5.jpg",
	"./pizza6.jpg": "./src/assets/photos/pizza6.jpg",
	"./pizza7.jpg": "./src/assets/photos/pizza7.jpg",
	"./pizzaBG.jpg": "./src/assets/photos/pizzaBG.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/photos sync recursive ^\\.\\/pizza.*\\.jpg$";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContContent: () => (/* binding */ createContContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_photos_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/photos/map.png */ "./src/assets/photos/map.png");
' use strict'

;


function createContContent(){  

    const content = document.querySelector("#content");
    const contContainer=document.createElement('div');
    contContainer.classList.add('contContainer','hidden');
     
    const addressContainer=document.createElement('div');
    addressContainer.classList.add('addressContainer');
    const addressTitle=document.createElement('h1');
    addressTitle.textContent='Address';
    addressTitle.classList.add('addressTitle');
    addressContainer.appendChild(addressTitle);
    const addressLine=document.createElement('p');
    addressLine.classList.add('addressLine');
    addressLine.textContent='39, DLF New Town, Akshaynagar, Bannerghatta Road, Bangalore'
    addressContainer.appendChild(addressLine);
    const addressImg=document.createElement('img');
    addressImg.classList.add('addressImg');
    addressImg.src=_assets_photos_map_png__WEBPACK_IMPORTED_MODULE_1__;
    addressContainer.appendChild(addressImg);

    const formContainer=document.createElement('form');
    formContainer.classList.add('formContainer');

    const formTitle=document.createElement('h1');
    formTitle.textContent='Contact Us';
    formTitle.classList.add('formTitle');
    formContainer.appendChild(formTitle);

    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    nameLabel.classList.add('formLabel')
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.classList.add('formInput')
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Enter your name';
    nameLabel.appendChild(nameInput);
    form.appendChild(nameLabel);

    const emailLabel = document.createElement('label');
    emailLabel.classList.add('formLabel');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.classList.add('formInput')
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Enter your email';
    emailLabel.appendChild(emailInput);
    form.appendChild(emailLabel);

    const messageLabel = document.createElement('label');
    messageLabel.classList.add('formLabel');
    messageLabel.textContent = 'Write a Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.classList.add('formInput');
    messageTextarea.name = 'message';
    messageTextarea.placeholder = 'Enter your message here';
    messageTextarea.rows = 10; 
    messageLabel.appendChild(messageTextarea);
    form.appendChild(messageLabel);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('formBtn');
    submitBtn.type = 'reset';
    submitBtn.textContent = 'Submit';

    form.appendChild(submitBtn);
    formContainer.appendChild(form);
    

    contContainer.appendChild(addressContainer);
    contContainer.appendChild(formContainer);
    content.appendChild(contContainer);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeContent: () => (/* binding */ createHomeContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function createHomeContent(){    
    const content = document.querySelector("#content");
    const homeContainer = document.createElement("div");
    
    homeContainer.classList.add("homeContainer", "hidden");
    
    const restName = document.createElement("div");
    restName.textContent = "Welcome!";
    restName.classList.add("restName");
    const tagline = document.createElement("div");
    tagline.textContent =
    '"Savor Every Bite: Crafted with Passion, Delivered with Flavor!"';
    tagline.classList.add("tagline");
    const bookBtn = document.createElement("button");
    bookBtn.classList.add('bookBtn');
    bookBtn.textContent = "Book Now";
    
    homeContainer.appendChild(restName);
    homeContainer.appendChild(tagline);
    homeContainer.appendChild(bookBtn);
    
    content.appendChild(homeContainer);
}
    

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuContent: () => (/* binding */ createMenuContent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const pizzaImages = [];
for (let i = 0; i < 8; i++) {
    pizzaImages.push(__webpack_require__("./src/assets/photos sync recursive ^\\.\\/pizza.*\\.jpg$")(`./pizza${i}.jpg`));
}

function createMenuContent(){    
    const content = document.querySelector("#content");
    const menuContainer=document.createElement('div');
    menuContainer.classList.add('menuContainer','hidden');

    const ourMenu=document.createElement('div');
    ourMenu.classList.add('ourMenu');
    ourMenu.innerHTML=`
        <h1>Our Menu</h1>
        <p>Fish is one of the most wholesome foods that man can eat.In fact, people have been<br> eating fish throughout human history.</p>
    `
    const pizzaCards=document.createElement('div');
    pizzaCards.classList.add('pizzaCards');

    for(let i=0;i<8;i++){
        const pizzaCard=document.createElement('div');
        pizzaCard.classList.add('pizzaCard');
        const pizzaImg=document.createElement('img');
        pizzaImg.classList.add('pizzaImg');
        pizzaImg.src=pizzaImages[i]
        pizzaCard.appendChild(pizzaImg);
        
        const pizzaName=document.createElement('div');
        pizzaName.classList.add('pizzaName');
        pizzaName.textContent='Pizza Margherita'
        pizzaCard.appendChild(pizzaName);

        const pizzaPrice=document.createElement('div');
        pizzaPrice.classList.add('pizzaPrice');
        pizzaPrice.textContent='₹400';
        pizzaCard.appendChild(pizzaPrice);

        const pizzaDesc=document.createElement('div');
        pizzaDesc.classList.add('pizzaDesc');
        pizzaDesc.textContent='Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque'
        pizzaCard.appendChild(pizzaDesc);   
        
        const buyBtn=document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent='Add to Cart';
        pizzaCard.appendChild(buyBtn);
    
        pizzaCards.appendChild(pizzaCard);
    }

    const seeBtn=document.createElement('button');
    seeBtn.classList.add('seeBtn');
    seeBtn.textContent='See More';
    
    menuContainer.appendChild(ourMenu);
    menuContainer.appendChild(pizzaCards);
    menuContainer.appendChild(seeBtn);

    content.appendChild(menuContainer);
}

/***/ }),

/***/ "./src/assets/photos/map.png":
/*!***********************************!*\
  !*** ./src/assets/photos/map.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6d19461671c8f465aed.png";

/***/ }),

/***/ "./src/assets/photos/pizza0.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza0.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2097bd4bbcc98afb9ef.jpg";

/***/ }),

/***/ "./src/assets/photos/pizza1.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bb21f8417ec885599416.jpg";

/***/ }),

/***/ "./src/assets/photos/pizza2.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1e2a83b52d408b15b99c.jpg";

/***/ }),

/***/ "./src/assets/photos/pizza3.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dcd3aaa1596e0bf44f78.jpg";

/***/ }),

/***/ "./src/assets/photos/pizza4.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ba21af007a494821a7bf.jpg";

/***/ }),

/***/ "./src/assets/photos/pizza5.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza5.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b30044b9ffc60aabf139.jpg";

/***/ }),

/***/ "./src/assets/photos/pizza6.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza6.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7981ad1e1fda447df11e.jpg";

/***/ }),

/***/ "./src/assets/photos/pizza7.jpg":
/*!**************************************!*\
  !*** ./src/assets/photos/pizza7.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "718e471b33d5d9050adf.jpg";

/***/ }),

/***/ "./src/assets/photos/pizzaBG.jpg":
/*!***************************************!*\
  !*** ./src/assets/photos/pizzaBG.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ce4a67d403e9e9bee038.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







const nav = document.querySelector("nav");
const header = document.querySelector("header");

const createHomeBtn = document.createElement("button");
createHomeBtn.id = "home";
createHomeBtn.textContent = "Home";
const createMenuBtn = document.createElement("button");
createMenuBtn.textContent = "Menu";
createMenuBtn.id = "menu";
const createContBtn = document.createElement("button");
createContBtn.id = "contact";
createContBtn.textContent = "Contact Us";

nav.classList.add("navButtons");
nav.append(createHomeBtn, createMenuBtn, createContBtn);

const titleName = document.createElement("div");
titleName.classList.add("titleName");
titleName.textContent = "Pizzeria";

header.insertBefore(titleName, nav);


//functioning 
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomeContent)();
(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuContent)();
(0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.createContContent)();

const homeContainer = document.querySelector(".homeContainer");
const menuContainer = document.querySelector(".menuContainer");
const contContainer=document.querySelector('.contContainer');


const homeBtn = document.querySelector("#home");
const menuBtn=document.querySelector('#menu');
const contBtn=document.querySelector('#contact');
const bookBtn=document.querySelector('.bookBtn');

window.addEventListener("load", function (e) {
  homeContainer.classList.remove("hidden");
});

function handleClicks(){
    homeContainer.classList.add('hidden');
    menuContainer.classList.add('hidden');
    contContainer.classList.add('hidden');
}

homeBtn.addEventListener('click', function(){
    handleClicks();
    homeContainer.classList.remove("hidden");
})

menuBtn.addEventListener('click', function(){
  handleClicks();
  menuContainer.classList.remove("hidden");
})

bookBtn.addEventListener('click', function(){
  handleClicks();
  menuContainer.classList.remove("hidden");
})

contBtn.addEventListener('click',function(){
  handleClicks();
  contContainer.classList.remove('hidden');
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSUFBOEM7QUFDMUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssT0FBTyxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxX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LGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0EsQ0FBcUI7QUFDcUI7QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZhO0FBQ1E7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmE7QUFDUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIscUJBQXFCLGdGQUFRLFFBQXNCLEVBQUUsRUFBRSxLQUFLLENBQUM7QUFDN0Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDcUI7QUFDdUI7QUFDQztBQUNFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQWlCO0FBQ2pCLDJEQUFpQjtBQUNqQiw4REFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYXNzZXRzL3Bob3Rvcy8gc3luYyBeXFwuXFwvcGl6emEuKlxcLmpwZyQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9waG90b3MvcGl6emFCRy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICAtLXNoYWRvdy1sZzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLFxyXG4gICAgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICAtLUhvbWVCR0ltZzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIC0tYnJvd24xOiAjNDUxYTAzO1xyXG4gIC0tYnJvd24yOiAjNzgzNTBmO1xyXG4gIC0tYnJvd24zOiAjOTI0MDBlO1xyXG4gIC0tb3JhbmdlMTogI2I0NTMwOTtcclxuICAtLW9yYW5nZTI6ICNkOTc3MDY7XHJcbiAgLS15ZWxsb3cxOiAjZjU5ZTBiO1xyXG4gIC0teWVsbG93MjogI2ZiYmYyNDtcclxuICAtLXllbGxvdzM6ICNmY2QzNGQ7XHJcbiAgLS15ZWxsb3c0OiAjZmRlNjhhO1xyXG4gIC0teWVsbG93NTogI2ZlZjNjNztcclxuICAtLXdoaXRlOiAjZmZmYmViO1xyXG59XHJcbnAsaDEsaDIsaDN7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tSG9tZUJHSW1nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcclxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jY29udGVudHtcclxuICBvdmVyZmxvdy14OmhpZGRlbiA7XHJcbn1cclxuXHJcbi8qIEhvbWUgKi9cclxuXHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaGVhZGVyID4gbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG59XHJcblxyXG5uYXYgYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcclxufVxyXG5cclxubmF2ID4gYnV0dG9uIHtcclxuICBtYXJnaW46IDAgMjBweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGl0bGVOYW1lIHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4vKiBob21lLmpzICovXHJcbi5ob21lQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnJlc3ROYW1lIHtcclxuICBmb250LXNpemU6IDdyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tb3JhbmdlMik7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4udGFnbGluZSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgbWFyZ2luOiAwIDEwcHggNDBweCAxMHB4O1xyXG59XHJcblxyXG4uaG9tZUNvbnRhaW5lciBidXR0b24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ob21lQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcclxufVxyXG5cclxuLyogbWVudSAqL1xyXG4ubWVudUNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41NTEpO1xyXG4gIG1hcmdpbjoyMHB4IGF1dG87XHJcbiAgd2lkdGg6OTB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ub3VyTWVudXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOjEwcHggYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5vdXJNZW51IGgxe1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ub3VyTWVudSBwe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0teWVsbG93Myk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW9yYW5nZTIpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4ucGl6emFDYXJkc3tcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOjk1JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpICk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuICBnYXA6IDMwcHg7XHJcbiAgbWFyZ2luOjIwcHggYXV0bztcclxufVxyXG5cclxuLnBpenphQ2FyZHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDUwcHggNzBweCA3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OTMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBpenphSW1ne1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcbi5waXp6YU5hbWV7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICBncmlkLXJvdzogMi8zO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5waXp6YVByaWNle1xyXG4gIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgZ3JpZC1yb3c6IDIvMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bjMpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOjE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMTBweCAxMHB4O1xyXG59XHJcbi5waXp6YURlc2N7XHJcbiAgZ3JpZC1yb3c6IC0yLy0zO1xyXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOjIwcHggMTBweCAwcHggMTBweDtcclxufVxyXG4uYnV5QnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTIpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICBncmlkLXJvdzotMS8tMjtcclxuICBtYXJnaW46MTVweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmJ1eUJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW9yYW5nZTEpO1xyXG59XHJcbi5zZWVCdG57XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLnNlZUJ0bjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcclxufVxyXG5cclxuLyogY29udGFjdCAqL1xyXG4uY29udENvbnRhaW5lcntcclxuICBtYXJnaW46YXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFkZHJlc3NDb250YWluZXJ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOjUwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgcGFkZGluZzoyMHB4O1xyXG59XHJcbi5hZGRyZXNzVGl0bGV7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcclxufVxyXG4uYWRkcmVzc0xpbmV7XHJcbiAgcGFkZGluZzoxMHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWRkcmVzc0ltZ3tcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmZvcm1Db250YWluZXJ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOjUwJTtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cclxufVxyXG4uZm9ybVRpdGxle1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgY29sb3I6IHZhcigtLXllbGxvdzEpO1xyXG59XHJcbi5mb3JtTGFiZWx7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5mb3JtSW5wdXR7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzo1cHggMTBweDtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4uZm9ybUJ0bntcclxuICB3aWR0aDogOTUlO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOjEwcHggMDtcclxufVxyXG4uZm9ybUJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcclxufVxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwRUFBMEU7RUFDMUU7bUNBQ2lDO0VBQ2pDLG9EQUE2QztFQUM3QyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1o7d0VBQ3NFO0VBQ3RFLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBLFlBQVk7QUFDWjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBLFNBQVM7QUFDVDtFQUNFLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1Q0FBdUM7RUFDdkMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsNERBQTREO0VBQzVELG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix3Q0FBd0M7RUFDeEMsc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBLFlBQVk7QUFDWjtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcXHJcXG4gIC0tc2hhZG93LWxnOiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksXFxyXFxuICAgIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XFxyXFxuICAtLUhvbWVCR0ltZzogdXJsKC4vYXNzZXRzL3Bob3Rvcy9waXp6YUJHLmpwZyk7XFxyXFxuICAtLWJyb3duMTogIzQ1MWEwMztcXHJcXG4gIC0tYnJvd24yOiAjNzgzNTBmO1xcclxcbiAgLS1icm93bjM6ICM5MjQwMGU7XFxyXFxuICAtLW9yYW5nZTE6ICNiNDUzMDk7XFxyXFxuICAtLW9yYW5nZTI6ICNkOTc3MDY7XFxyXFxuICAtLXllbGxvdzE6ICNmNTllMGI7XFxyXFxuICAtLXllbGxvdzI6ICNmYmJmMjQ7XFxyXFxuICAtLXllbGxvdzM6ICNmY2QzNGQ7XFxyXFxuICAtLXllbGxvdzQ6ICNmZGU2OGE7XFxyXFxuICAtLXllbGxvdzU6ICNmZWYzYzc7XFxyXFxuICAtLXdoaXRlOiAjZmZmYmViO1xcclxcbn1cXHJcXG5wLGgxLGgyLGgze1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLUhvbWVCR0ltZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcclxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICBvdmVyZmxvdy14OmhpZGRlbiA7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IG5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiBidXR0b246aG92ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGVOYW1lIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBob21lLmpzICovXFxyXFxuLmhvbWVDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdE5hbWUge1xcclxcbiAgZm9udC1zaXplOiA3cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZ2xpbmUge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgbWFyZ2luOiAwIDEwcHggNDBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZUNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZmxleC1ncm93OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93MSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG4ubWVudUNvbnRhaW5lcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjU1MSk7XFxyXFxuICBtYXJnaW46MjBweCBhdXRvO1xcclxcbiAgd2lkdGg6OTB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vdXJNZW51e1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOjEwcHggYXV0bztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbi5vdXJNZW51IGgxe1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLm91ck1lbnUgcHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3czKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1vcmFuZ2UyKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5waXp6YUNhcmRze1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHdpZHRoOjk1JTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikgKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBtYXJnaW46MjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGl6emFDYXJke1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgNTBweCA3MHB4IDcwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjkzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5waXp6YUltZ3tcXHJcXG4gIGdyaWQtcm93OiAxLzI7XFxyXFxuICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgd2lkdGg6MTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXHJcXG59XFxyXFxuLnBpenphTmFtZXtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4ucGl6emFQcmljZXtcXHJcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICBncmlkLXJvdzogMi8zO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24zKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDoxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxufVxcclxcbi5waXp6YURlc2N7XFxyXFxuICBncmlkLXJvdzogLTIvLTM7XFxyXFxuICBncmlkLWNvbHVtbjogMS8tMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6MjBweCAxMHB4IDBweCAxMHB4O1xcclxcbn1cXHJcXG4uYnV5QnRue1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gIGdyaWQtcm93Oi0xLy0yO1xcclxcbiAgbWFyZ2luOjE1cHggMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbi5idXlCdG46aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW9yYW5nZTEpO1xcclxcbn1cXHJcXG4uc2VlQnRue1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG4uc2VlQnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29udGFjdCAqL1xcclxcbi5jb250Q29udGFpbmVye1xcclxcbiAgbWFyZ2luOmF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjE0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzc0NvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOjUwJTtcXHJcXG4gIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6MjBweDtcXHJcXG59XFxyXFxuLmFkZHJlc3NUaXRsZXtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcXHJcXG59XFxyXFxuLmFkZHJlc3NMaW5le1xcclxcbiAgcGFkZGluZzoxMHB4IDA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uYWRkcmVzc0ltZ3tcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUNvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOjUwJTtcXHJcXG4gIHBhZGRpbmc6MjBweDtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcbi5mb3JtVGl0bGV7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXllbGxvdzEpO1xcclxcbn1cXHJcXG4uZm9ybUxhYmVse1xcclxcbiAgZGlzcGxheTpibG9jaztcXHJcXG4gIHdpZHRoOjEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uZm9ybUlucHV0e1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOjVweCAxMHB4O1xcclxcbiAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbi5mb3JtQnRue1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOjEwcHggMDtcXHJcXG59XFxyXFxuLmZvcm1CdG46aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cxKTtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vcGl6emEwLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emEwLmpwZ1wiLFxuXHRcIi4vcGl6emExLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emExLmpwZ1wiLFxuXHRcIi4vcGl6emEyLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emEyLmpwZ1wiLFxuXHRcIi4vcGl6emEzLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emEzLmpwZ1wiLFxuXHRcIi4vcGl6emE0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emE0LmpwZ1wiLFxuXHRcIi4vcGl6emE1LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emE1LmpwZ1wiLFxuXHRcIi4vcGl6emE2LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emE2LmpwZ1wiLFxuXHRcIi4vcGl6emE3LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9waG90b3MvcGl6emE3LmpwZ1wiLFxuXHRcIi4vcGl6emFCRy5qcGdcIjogXCIuL3NyYy9hc3NldHMvcGhvdG9zL3BpenphQkcuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9waG90b3Mgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC9waXp6YS4qXFxcXC5qcGckXCI7IiwiJyB1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IG1hcDEgZnJvbSAnLi9hc3NldHMvcGhvdG9zL21hcC5wbmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udENvbnRlbnQoKXsgIFxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb25zdCBjb250Q29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250Q29udGFpbmVyJywnaGlkZGVuJyk7XHJcbiAgICAgXHJcbiAgICBjb25zdCBhZGRyZXNzQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBhZGRyZXNzVGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGFkZHJlc3NUaXRsZS50ZXh0Q29udGVudD0nQWRkcmVzcyc7XHJcbiAgICBhZGRyZXNzVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWRkcmVzc1RpdGxlJyk7XHJcbiAgICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NUaXRsZSk7XHJcbiAgICBjb25zdCBhZGRyZXNzTGluZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzTGluZS5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzTGluZScpO1xyXG4gICAgYWRkcmVzc0xpbmUudGV4dENvbnRlbnQ9JzM5LCBETEYgTmV3IFRvd24sIEFrc2hheW5hZ2FyLCBCYW5uZXJnaGF0dGEgUm9hZCwgQmFuZ2Fsb3JlJ1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzTGluZSk7XHJcbiAgICBjb25zdCBhZGRyZXNzSW1nPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYWRkcmVzc0ltZy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzSW1nJyk7XHJcbiAgICBhZGRyZXNzSW1nLnNyYz1tYXAxO1xyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSW1nKTtcclxuXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1UaXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50PSdDb250YWN0IFVzJztcclxuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtVGl0bGUnKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKVxyXG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ05hbWU6JztcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybUlucHV0JylcclxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZUlucHV0Lm5hbWUgPSAnbmFtZSc7XHJcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBuYW1lJztcclxuICAgIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZW1haWxMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKTtcclxuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWw6JztcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKVxyXG4gICAgZW1haWxJbnB1dC50eXBlID0gJ2VtYWlsJztcclxuICAgIGVtYWlsSW5wdXQubmFtZSA9ICdlbWFpbCc7XHJcbiAgICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgZW1haWwnO1xyXG4gICAgZW1haWxMYWJlbC5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG1lc3NhZ2VMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKTtcclxuICAgIG1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdXcml0ZSBhIE1lc3NhZ2U6JztcclxuICAgIGNvbnN0IG1lc3NhZ2VUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBtZXNzYWdlVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybUlucHV0Jyk7XHJcbiAgICBtZXNzYWdlVGV4dGFyZWEubmFtZSA9ICdtZXNzYWdlJztcclxuICAgIG1lc3NhZ2VUZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG1lc3NhZ2UgaGVyZSc7XHJcbiAgICBtZXNzYWdlVGV4dGFyZWEucm93cyA9IDEwOyBcclxuICAgIG1lc3NhZ2VMYWJlbC5hcHBlbmRDaGlsZChtZXNzYWdlVGV4dGFyZWEpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2Zvcm1CdG4nKTtcclxuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3Jlc2V0JztcclxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBcclxuXHJcbiAgICBjb250Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NDb250YWluZXIpO1xyXG4gICAgY29udENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udENvbnRhaW5lcik7XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lQ29udGVudCgpeyAgICBcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZUNvbnRhaW5lclwiLCBcImhpZGRlblwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVzdE5hbWUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUhXCI7XHJcbiAgICByZXN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdE5hbWVcIik7XHJcbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhZ2xpbmUudGV4dENvbnRlbnQgPVxyXG4gICAgJ1wiU2F2b3IgRXZlcnkgQml0ZTogQ3JhZnRlZCB3aXRoIFBhc3Npb24sIERlbGl2ZXJlZCB3aXRoIEZsYXZvciFcIic7XHJcbiAgICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0YWdsaW5lXCIpO1xyXG4gICAgY29uc3QgYm9va0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBib29rQnRuLmNsYXNzTGlzdC5hZGQoJ2Jvb2tCdG4nKTtcclxuICAgIGJvb2tCdG4udGV4dENvbnRlbnQgPSBcIkJvb2sgTm93XCI7XHJcbiAgICBcclxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdE5hbWUpO1xyXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcclxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9va0J0bik7XHJcbiAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XHJcbn1cclxuICAgICIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgcGl6emFJbWFnZXMgPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgIHBpenphSW1hZ2VzLnB1c2gocmVxdWlyZShgLi9hc3NldHMvcGhvdG9zL3BpenphJHtpfS5qcGdgKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51Q29udGVudCgpeyAgICBcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGFpbmVyJywnaGlkZGVuJyk7XHJcblxyXG4gICAgY29uc3Qgb3VyTWVudT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG91ck1lbnUuY2xhc3NMaXN0LmFkZCgnb3VyTWVudScpO1xyXG4gICAgb3VyTWVudS5pbm5lckhUTUw9YFxyXG4gICAgICAgIDxoMT5PdXIgTWVudTwvaDE+XHJcbiAgICAgICAgPHA+RmlzaCBpcyBvbmUgb2YgdGhlIG1vc3Qgd2hvbGVzb21lIGZvb2RzIHRoYXQgbWFuIGNhbiBlYXQuSW4gZmFjdCwgcGVvcGxlIGhhdmUgYmVlbjxicj4gZWF0aW5nIGZpc2ggdGhyb3VnaG91dCBodW1hbiBoaXN0b3J5LjwvcD5cclxuICAgIGBcclxuICAgIGNvbnN0IHBpenphQ2FyZHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaXp6YUNhcmRzLmNsYXNzTGlzdC5hZGQoJ3BpenphQ2FyZHMnKTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDtpPDg7aSsrKXtcclxuICAgICAgICBjb25zdCBwaXp6YUNhcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGl6emFDYXJkLmNsYXNzTGlzdC5hZGQoJ3BpenphQ2FyZCcpO1xyXG4gICAgICAgIGNvbnN0IHBpenphSW1nPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHBpenphSW1nLmNsYXNzTGlzdC5hZGQoJ3BpenphSW1nJyk7XHJcbiAgICAgICAgcGl6emFJbWcuc3JjPXBpenphSW1hZ2VzW2ldXHJcbiAgICAgICAgcGl6emFDYXJkLmFwcGVuZENoaWxkKHBpenphSW1nKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwaXp6YU5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGl6emFOYW1lLmNsYXNzTGlzdC5hZGQoJ3BpenphTmFtZScpO1xyXG4gICAgICAgIHBpenphTmFtZS50ZXh0Q29udGVudD0nUGl6emEgTWFyZ2hlcml0YSdcclxuICAgICAgICBwaXp6YUNhcmQuYXBwZW5kQ2hpbGQocGl6emFOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl6emFQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwaXp6YVByaWNlLmNsYXNzTGlzdC5hZGQoJ3BpenphUHJpY2UnKTtcclxuICAgICAgICBwaXp6YVByaWNlLnRleHRDb250ZW50PSfigrk0MDAnO1xyXG4gICAgICAgIHBpenphQ2FyZC5hcHBlbmRDaGlsZChwaXp6YVByaWNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl6emFEZXNjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBpenphRGVzYy5jbGFzc0xpc3QuYWRkKCdwaXp6YURlc2MnKTtcclxuICAgICAgICBwaXp6YURlc2MudGV4dENvbnRlbnQ9J0FlbmVhbiBjb21tb2RvIGxpZ3VsYSBlZ2V0IGRvbG9yIGFlbmVhbiBtYXNzYS4gQ3VtIHNvY2lpcyBuYXRvcXVlJ1xyXG4gICAgICAgIHBpenphQ2FyZC5hcHBlbmRDaGlsZChwaXp6YURlc2MpOyAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJ1eUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXlCdG4uY2xhc3NMaXN0LmFkZCgnYnV5QnRuJyk7XHJcbiAgICAgICAgYnV5QnRuLnRleHRDb250ZW50PSdBZGQgdG8gQ2FydCc7XHJcbiAgICAgICAgcGl6emFDYXJkLmFwcGVuZENoaWxkKGJ1eUJ0bik7XHJcbiAgICBcclxuICAgICAgICBwaXp6YUNhcmRzLmFwcGVuZENoaWxkKHBpenphQ2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VlQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc2VlQnRuLmNsYXNzTGlzdC5hZGQoJ3NlZUJ0bicpO1xyXG4gICAgc2VlQnRuLnRleHRDb250ZW50PSdTZWUgTW9yZSc7XHJcbiAgICBcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQob3VyTWVudSk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphQ2FyZHMpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWVCdG4pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQge2NyZWF0ZUhvbWVDb250ZW50fSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCB7Y3JlYXRlTWVudUNvbnRlbnQgfSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCB7Y3JlYXRlQ29udENvbnRlbnR9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG5cclxuY29uc3QgY3JlYXRlSG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmNyZWF0ZUhvbWVCdG4uaWQgPSBcImhvbWVcIjtcclxuY3JlYXRlSG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5jb25zdCBjcmVhdGVNZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuY3JlYXRlTWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5jcmVhdGVNZW51QnRuLmlkID0gXCJtZW51XCI7XHJcbmNvbnN0IGNyZWF0ZUNvbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5jcmVhdGVDb250QnRuLmlkID0gXCJjb250YWN0XCI7XHJcbmNyZWF0ZUNvbnRCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcclxuXHJcbm5hdi5jbGFzc0xpc3QuYWRkKFwibmF2QnV0dG9uc1wiKTtcclxubmF2LmFwcGVuZChjcmVhdGVIb21lQnRuLCBjcmVhdGVNZW51QnRuLCBjcmVhdGVDb250QnRuKTtcclxuXHJcbmNvbnN0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnRpdGxlTmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVOYW1lXCIpO1xyXG50aXRsZU5hbWUudGV4dENvbnRlbnQgPSBcIlBpenplcmlhXCI7XHJcblxyXG5oZWFkZXIuaW5zZXJ0QmVmb3JlKHRpdGxlTmFtZSwgbmF2KTtcclxuXHJcblxyXG4vL2Z1bmN0aW9uaW5nIFxyXG5jcmVhdGVIb21lQ29udGVudCgpO1xyXG5jcmVhdGVNZW51Q29udGVudCgpO1xyXG5jcmVhdGVDb250Q29udGVudCgpO1xyXG5cclxuY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZUNvbnRhaW5lclwiKTtcclxuY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUNvbnRhaW5lclwiKTtcclxuY29uc3QgY29udENvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udENvbnRhaW5lcicpO1xyXG5cclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XHJcbmNvbnN0IG1lbnVCdG49ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcclxuY29uc3QgY29udEJ0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xyXG5jb25zdCBib29rQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rQnRuJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tzKCl7XHJcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNvbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn1cclxuXHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlQ2xpY2tzKCk7XHJcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn0pXHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICBoYW5kbGVDbGlja3MoKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn0pXHJcblxyXG5ib29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICBoYW5kbGVDbGlja3MoKTtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn0pXHJcblxyXG5jb250QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gIGhhbmRsZUNsaWNrcygpO1xyXG4gIGNvbnRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=