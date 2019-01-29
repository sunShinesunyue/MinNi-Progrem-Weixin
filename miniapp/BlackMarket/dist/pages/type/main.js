require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([4],{

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "type-wrapper"
  }, [_c('div', {
    staticClass: "type-header"
  }, [_vm._v("\n        搜索 头部\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "type-container"
  }, [_c('section', {
    staticClass: "list"
  }, [_c('ul', [_c('li', [_vm._v("\n                " + _vm._s(_vm.categories) + "\n            ")])], 1)], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3ff96255", esExports)
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_3ff96255_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(6)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_3ff96255_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\type\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ff96255", Component.options)
  } else {
    hotAPI.reload("data-v-3ff96255", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(79);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);

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

// 1.从vuex里面引入

// 2.抛出
/* harmony default export */ __webpack_exports__["a"] = ({
  // 3.数据
  data: function data() {
    return {
      current: 0 // 4.切换的下标
    };
  },

  // // 4.计算属性
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])({
    // 5.要渲染的数据 6.从数据仓下面取出数据
    categories: function categories(state) {
      return state.index.categories;
    }
  }), {
    // 7.做一些判断
    currentList: function currentList() {
      // 10.判断数据的长度
      if (this.categories.length) {
        // 11.获取当前切换下面所对应的内容
        var current = this.categories[this.current];
        // 12.替换所切换跳转的路径
        current.cover_url = current.cover_url.replace('/commodity/details', '/detail/main');
        // 13.将替换好的路径返出
        return current;
      } else {
        // 14.就返回一个undefined
        return undefined;
      }
    },

    // 8.方法
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
      // 9.将要渲染的数据请求出来
      getCategories: 'index/getCategories'
    }), {
      // 15.点击获取
      tabClick: function tabClick(e) {
        // 16.当点击的这一项是undefined && 不和当前点击的这一项相对应
        if (e.target.dataset.index != undefined && e.target.dataset.index != this.current) {
          // 17.就让current 和当前点击的这一项对应上
          this.current = e.target.dataset.index;
        }
      },

      // 9.调用这个获取数据的方法
      onShow: function onShow() {
        this.getCategories();
      }
    })
  })
});

/***/ })

},[94]);
//# sourceMappingURL=main.js.map