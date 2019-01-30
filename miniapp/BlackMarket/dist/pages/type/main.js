require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(82);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(22);

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
        current.cover_url = current.cover_url.replace("/commodity/details", "/detail/main");
        // 13.将替换好的路径返出
        return current;
      } else {
        // 14.就返回一个undefined
        return undefined;
      }
    }
  }),
  // 8.方法
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    // 9.将要渲染的数据请求出来
    getCategories: "index/getCategories"
  }), {
    // 15.点击获取
    tabClick: function tabClick(e) {
      // 16.当点击的这一项是undefined && 不和当前点击的这一项相对应
      if (e.target.dataset.index != undefined && e.target.dataset.index != this.current) {
        // 17.就让current 和当前点击的这一项对应上
        this.current = e.target.dataset.index;
      }
    },

    // 1-1 模板消息推送通知
    submit: function submit(e) {
      console.log('--模板消息推送通知', e);
    }
  }),
  // 9.调用这个获取数据的方法
  onShow: function onShow() {
    this.getCategories();
  }
});

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "type-wrapper"
  }, [_c('div', {
    staticClass: "type-header"
  }, [_vm._v("\n    搜索 头部\n  ")]), _vm._v(" "), _c('section', {
    staticClass: "list"
  }, [_c('ul', {
    staticClass: "type-left",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.tabClick
    }
  }, [_c('form', {
    attrs: {
      "report-submit": "",
      "eventid": '0'
    },
    on: {
      "submit": _vm.submit
    }
  }), _vm._v(" "), _vm._l((_vm.categories), function(item, index) {
    return _c('li', {
      key: index,
      class: index == _vm.current ? 'active' : '',
      attrs: {
        "data-index": index
      }
    }, [_c('button', {
      attrs: {
        "form-type": "submit"
      }
    }, [_vm._v(" \n            " + _vm._s(item.name) + "\n        ")])], 1)
  })], 2), _vm._v(" "), (_vm.currentList) ? _c('div', {
    staticClass: "content"
  }, [_c('a', {
    attrs: {
      "href": _vm.currentList.cover_url
    }
  }, [_c('img', {
    staticClass: "imgFirst",
    attrs: {
      "src": _vm.currentList.cover_img,
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "children"
  }, _vm._l((_vm.currentList.children), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('img', {
      staticClass: "imgSecond",
      attrs: {
        "src": item.image.url,
        "mode": "widthFix"
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.name))])])
  }))]) : _vm._e()], 1)], 1)
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_3ff96255_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ff96255"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_3ff96255_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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


/***/ })

},[101]);
//# sourceMappingURL=main.js.map