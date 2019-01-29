require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([7],{

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-wrapper"
  }, [_c('div', {
    staticClass: "my-header"
  }, [_c('header', {
    staticClass: "header"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "mode": "widthFix"
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.userInfo.nickName))])])]), _vm._v(" "), _c('section', [_c('p', {
    staticClass: "order",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.goOrder('all')
      }
    }
  }, [_c('span', [_vm._v("我的订单")]), _vm._v(" "), _c('span', [_vm._v("查看全部")])]), _vm._v(" "), _c('div', {
    staticClass: "type"
  }, [_c('li', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.goOrder('unpaid')
      }
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "commodity",
      "size": "30",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('span', [_vm._v("待付款")])], 1), _vm._v(" "), _c('li', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.goOrder('unshipped')
      }
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "commodity",
      "size": "30",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('span', [_vm._v("待发货")])], 1), _vm._v(" "), _c('li', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.goOrder('unreceived')
      }
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "commodity",
      "size": "30",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('span', [_vm._v("待收货")])], 1), _vm._v(" "), _c('li', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.goOrder('unevaluated')
      }
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "commodity",
      "size": "30",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('span', [_vm._v("评价")])], 1), _vm._v(" "), _c('li', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.goOrder('evaluated')
      }
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "commodity",
      "size": "30",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('span', [_vm._v("退款售后")])], 1)], 1)], 1), _vm._v(" "), _c('i-modal', {
    attrs: {
      "visible": _vm.showModal,
      "show-ok": "false",
      "show-cancel": "false",
      "mpcomid": '5'
    }
  }, [_c('view', [_vm._v("为了更好的提供服务,我们需要获取您的用户信息")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '6'
    },
    on: {
      "getuserinfo": _vm.getUserInfo,
      "click": function($event) {
        _vm.showModal = false
      }
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "openSetting",
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.showModal = false
      }
    }
  }, [_vm._v("取消")])], 1), _vm._v(" "), _c('div', {
    staticClass: "my-bottom"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '8'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("获取用户信息")]), _vm._v(" "), _c('i-cell-group', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "地址管理",
      "is-link": "",
      "url": "",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('button', [_vm._v("意见反馈")]), _vm._v(" "), _c('button', [_vm._v("在线客服")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4d761a47", esExports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_index_ts__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_4d761a47_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(111);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_awesome_typescript_loader_useCache_true_index_ts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_4d761a47_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d761a47", Component.options)
  } else {
    hotAPI.reload("data-v-4d761a47", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__ = __webpack_require__(14);








var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_object_get_own_property_descriptor___default()(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_define_property___default()(target, key, r), r;
};

var default_1 = function (_Vue) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(default_1, _Vue);

    function default_1() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, default_1);

        // 2.储存用户信息
        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (default_1.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(default_1)).apply(this, arguments));

        _this.userInfo = {};
        _this.showModal = false;
        return _this;
    }
    // 1.获取用户信息 前面已经绑定这个点击事件了


    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(default_1, [{
        key: "getUserInfo",
        value: function getUserInfo(res) {
            console.log('userInfo...', JSON.parse(res.mp.detail.rawData));
            // 判断
            if (res.mp.detail.rawData) {
                this.userInfo = JSON.parse(res.mp.detail.rawData); // 字符串
            }
        }
        // 3.代付款的点击事件

    }, {
        key: "goOrder",
        value: function goOrder(type) {
            // 4.跳转页面  每一次跳转将页面的类型送过去
            wx.navigateTo({
                url: "/pages/order/main?type=" + type
            });
        }
        // 4.在生命周期里面设置一些

    }, {
        key: "onShow",
        value: function onShow() {
            var _this2 = this;

            // 5.微信的授权检测  scope.userInfo  res.authSetting['scope.userInfo'] 布尔值 
            wx.getSetting({
                success: function success(res) {
                    if (res.authSetting['scope.userInfo']) {
                        // 6.为true 检测成功 授权成功
                        wx.getUserInfo({
                            success: function success(res) {
                                _this2.userInfo = res.rawData;
                            }
                        });
                    } else {
                        // 7.弹框提示去授权
                        _this2.showModal = true;
                    }
                }
            });
        }
    }]);

    return default_1;
}(__WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__["a" /* Vue */]);
default_1 = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_vue_property_decorator__["b" /* Component */])({})], default_1);
/* harmony default export */ __webpack_exports__["a"] = (default_1);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(77);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */]);
app.$mount();

/***/ })

},[92]);
//# sourceMappingURL=main.js.map