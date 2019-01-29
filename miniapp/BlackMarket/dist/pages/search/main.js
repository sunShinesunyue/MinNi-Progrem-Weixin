require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(81);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', [_c('input', {
    attrs: {
      "confirm-type": "search",
      "value": _vm.value,
      "type": "text",
      "placeholder": "你随便搜 搜得到算我输",
      "eventid": '0'
    },
    on: {
      "focus": function($event) {
        _vm.showHistory = true
      },
      "input": _vm.change,
      "confirm": _vm.confirm
    }
  }), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("取消")])]), _vm._v(" "), (_vm.showHistory) ? _c('section', [_c('p', [_vm._v("历史记录")]), _vm._v(" "), _c('p', _vm._l((_vm.history), function(item, index) {
    return _c('span', {
      key: index
    }, [_vm._v(_vm._s(item))])
  }))], 1) : _c('section', {
    staticClass: "list"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "wrap"
    }, [_c('img', {
      attrs: {
        "src": item.cover_img,
        "mode": "widthFix"
      }
    })]), _vm._v(" "), (!item.shipping_fee) ? _c('span', {
      staticClass: "ship"
    }, [_vm._v("包邮")]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "point"
    }, [_vm._v(_vm._s(item.selling_point))]), _vm._v(" "), _c('span', {
      staticClass: "price"
    }, [_vm._v(_vm._s(item.sell_price))])])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7355317a", esExports)
  }
}

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_index_ts__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_7355317a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(4)
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7355317a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_index_ts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_7355317a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7355317a", Component.options)
  } else {
    hotAPI.reload("data-v-7355317a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_define_property__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_typeof__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_property_decorator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuex__ = __webpack_require__(22);










var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = __WEBPACK_IMPORTED_MODULE_9_babel_runtime_core_js_object_get_own_property_descriptor___default()(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_define_property___default()(target, key, r), r;
};


var Search = function (_Vue) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Search, _Vue);

    function Search() {
        __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Search);

        var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Search.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Search)).apply(this, arguments));

        _this.value = '充电器';
        _this.history = [];
        _this.showHistory = false;
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Search, [{
        key: "onShow",
        value: function onShow() {
            var history = wx.getStorageSync('search_history');
            if (history) {
                history = JSON.parse(history);
            } else {
                history = [];
            }
            this.history = history;
        }
        // 搜索

    }, {
        key: "confirm",
        value: function confirm() {
            console.log('点击回车....', this.value);
            var history = wx.getStorageSync('search_history');
            if (history) {
                history = JSON.parse(history);
            } else {
                history = [];
            }
            history.push(this.value);
            this.history = history;
            wx.setStorageSync('search_history', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(history));
            this['search'](this.value);
            this.showHistory = false;
        }
    }, {
        key: "change",
        value: function change(e) {
            this.value = e.target.value;
        }
        // 返回上一页

    }, {
        key: "goBack",
        value: function goBack() {
            wx.navigateBack();
        }
    }]);

    return Search;
}(__WEBPACK_IMPORTED_MODULE_10_vue_property_decorator__["a" /* Vue */]);
Search = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_vue_property_decorator__["b" /* Component */])({
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_vuex__["a" /* mapState */])({
        list: function list(state) {
            return state['search'].list;
        }
    })),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_vuex__["b" /* mapActions */])({
        search: 'search/search'
    }))
})], Search);
/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ })

},[100]);
//# sourceMappingURL=main.js.map