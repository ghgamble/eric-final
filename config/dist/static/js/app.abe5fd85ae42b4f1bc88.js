webpackJsonp([1],{

/***/ "0he4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",attrs:{"id":"app"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"panel panel-default"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_c('table',{staticClass:"table table-striped"},[_vm._m(2),_vm._v(" "),_c('tbody',_vm._l((_vm.search),function(searched){return _c('tr',[_c('td',[_vm._v("\n              "+_vm._s(searched.searchEntry)+"\n            ")]),_vm._v(" "),_c('td',[_vm._v("\n              "+_vm._s(searched.firstResult)+"\n            ")]),_vm._v(" "),_c('td',[_vm._v("\n              "+_vm._s(searched.secondResult)+"\n            ")]),_vm._v(" "),_c('td',[_vm._v("\n              "+_vm._s(searched.zipCode)+"\n            ")])])}))])])]),_vm._v(" "),_c('div',{staticClass:"panel panel-default"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_c('form',{staticClass:"form-inline",attrs:{"id":"form"},on:{"submit":function($event){$event.preventDefault();_vm.addSearch($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"searchEntry"}},[_vm._v("Search Entry:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newSearch.searchEntry),expression:"newSearch.searchEntry"}],staticClass:"form-control",attrs:{"type":"text","id":"searchEntry"},domProps:{"value":(_vm.newSearch.searchEntry)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newSearch.searchEntry=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"firstResult"}},[_vm._v("First Result:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newSearch.firstResult),expression:"newSearch.firstResult"}],staticClass:"form-control",attrs:{"type":"text","id":"firstResult"},domProps:{"value":(_vm.newSearch.firstResult)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newSearch.firstResult=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"secondResult"}},[_vm._v("Second Result:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newSearch.secondResult),expression:"newSearch.secondResult"}],staticClass:"form-control",attrs:{"type":"text","id":"secondResult"},domProps:{"value":(_vm.newSearch.secondResult)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newSearch.secondResult=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"zipCode"}},[_vm._v("Zip Code:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newSearch.zipCode),expression:"newSearch.zipCode"}],staticClass:"form-control",attrs:{"type":"text","id":"zipCode"},domProps:{"value":(_vm.newSearch.zipCode)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newSearch.zipCode=$event.target.value}}})]),_vm._v(" "),_c('input',{staticClass:"btn btn-primary",attrs:{"type":"submit","value":"Add Search Input Item"}})])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header"},[_c('h1',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("S")]),_c('span',{staticStyle:{"color":"red"}},[_vm._v("e")]),_c('span',{staticStyle:{"color":"yellow"}},[_vm._v("a")]),_c('span',{staticStyle:{"color":"blue"}},[_vm._v("r")]),_c('span',{staticStyle:{"color":"green"}},[_vm._v("c")]),_c('span',{staticStyle:{"color":"red"}},[_vm._v("h")]),_vm._v(" "),_c('span',{staticStyle:{"color":"blue"}},[_vm._v("S")]),_c('span',{staticStyle:{"color":"red"}},[_vm._v("c")]),_c('span',{staticStyle:{"color":"yellow"}},[_vm._v("r")]),_c('span',{staticStyle:{"color":"color: blue"}},[_vm._v("u")]),_c('span',{staticStyle:{"color":"green"}},[_vm._v("t")]),_c('span',{staticStyle:{"color":"red"}},[_vm._v("i")]),_c('span',{staticStyle:{"color":"blue"}},[_vm._v("n")]),_c('span',{staticStyle:{"color":"red"}},[_vm._v("y")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel-heading"},[_c('h3',[_vm._v("Preventing search engine bias")]),_vm._v(" "),_c('h5',[_vm._v("An example of a google search (Search Entry) and it's associated autofill results.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Search Entry")]),_vm._v(" "),_c('th',[_vm._v("First Result")]),_vm._v(" "),_c('th',[_vm._v("Second Result")]),_vm._v(" "),_c('th',[_vm._v("Zip Code")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel-heading"},[_c('h5',[_vm._v("Found a different autofill? Enter you results here.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "1Wm0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f8efb10_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("0he4");
function injectStyle (ssrContext) {
  __webpack_require__("Yy2G")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f8efb10_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuefire__ = __webpack_require__("1mcD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuefire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuefire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__("M93x");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuefire___default.a);

// Vue.config.productionTip = false

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */] }
});

/***/ }),

/***/ "Yy2G":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pMZz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
});

/***/ }),

/***/ "qSdX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__("pMZz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d399e0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__("vD4L");
function injectStyle (ssrContext) {
  __webpack_require__("1Wm0")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d399e0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d399e0c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),

/***/ "vD4L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_vm._m(1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank"}},[_vm._v("Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank"}},[_vm._v("Twitter")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank"}},[_vm._v("Docs for This Template")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank"}},[_vm._v("awesome-vue")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Hello__ = __webpack_require__("qSdX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("q6Ae");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





let config = {
  apiKey: "AIzaSyA7yrYpQ-PFX-Z_m9YK9FpcBC67T_u-mQY",
  authDomain: "final-app-b3318.firebaseapp.com",
  databaseURL: "https://final-app-b3318.firebaseio.com",
  projectId: "final-app-b3318",
  storageBucket: "final-app-b3318.appspot.com",
  messagingSenderId: "686178515094"
};
let firebaseApp = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.initializeApp({ databaseURL: 'https://final-app-b3318.firebaseapp.com/' });

let db = firebaseApp.database();

let searchRef = db.ref('search');

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  firebase: {
    search: searchRef
  },
  data() {
    return {
      newSearch: {
        searchEntry: '',
        firstResult: '',
        secondResult: '',
        zipCode: ''
      }
    };
  },
  methods: {
    addSearch: function () {
      searchRef.push(this.newSearch);
      this.newSearch.searchEntry = '';
      this.newSearch.firstResult = '';
      this.newSearch.secondResult = '';
      this.newSearch.zipCode = '';
    }
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.abe5fd85ae42b4f1bc88.js.map