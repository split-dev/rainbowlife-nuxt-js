import * as __WEBPACK_EXTERNAL_MODULE_h3__ from 'h3';
import * as __WEBPACK_EXTERNAL_MODULE_ufo__ from 'ufo';
import * as __WEBPACK_EXTERNAL_MODULE_url__ from 'url';
import * as __WEBPACK_EXTERNAL_MODULE_vue__ from 'vue';
import * as __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__ from 'vue/server-renderer';
import * as __WEBPACK_EXTERNAL_MODULE_ohash__ from 'ohash';
import * as destr from 'destr';
import * as __WEBPACK_EXTERNAL_MODULE_hookable__ from 'hookable';
import * as __WEBPACK_EXTERNAL_MODULE_unctx__ from 'unctx';
import * as __WEBPACK_EXTERNAL_MODULE_ofetch__ from 'ofetch';
import * as __WEBPACK_EXTERNAL_MODULE__unhead_vue_609689db__ from '@unhead/vue';
import * as __WEBPACK_EXTERNAL_MODULE__unhead_dom_2b61a37b__ from '@unhead/dom';
import * as __WEBPACK_EXTERNAL_MODULE__unhead_ssr_a0c369cc__ from '@unhead/ssr';
import * as __WEBPACK_EXTERNAL_MODULE__css_render_vue3_ssr_990d088a__ from '@css-render/vue3-ssr';
import * as __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__ from 'naive-ui';
import * as __WEBPACK_EXTERNAL_MODULE_swiper_vue_5f09e7c9__ from 'swiper/vue';
import { a as useRuntimeConfig } from '../nitro/vercel.mjs';
import 'node-fetch-native/polyfill';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'defu';
import 'radix3';

/******/ var __webpack_modules__ = ({

/***/ 583:
/***/ ((module) => {



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

/***/ 688:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 438:
/***/ ((__unused_webpack_module, exports) => {
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(688);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(583);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{--vt-c-white:#fff;--vt-c-white-soft:#f8f8f8;--vt-c-white-mute:#f2f2f2;--vt-c-black:#181818;--vt-c-black-soft:#222;--vt-c-black-mute:#282828;--vt-c-indigo:#2c3e50;--vt-c-divider-light-1:rgba(60,60,60,.29);--vt-c-divider-light-2:rgba(60,60,60,.12);--vt-c-divider-dark-1:rgba(84,84,84,.65);--vt-c-divider-dark-2:rgba(84,84,84,.48);--vt-c-text-light-1:var(--vt-c-indigo);--vt-c-text-light-2:rgba(60,60,60,.66);--vt-c-text-dark-1:var(--vt-c-white);--vt-c-text-dark-2:hsla(0,0%,92%,.64);--color-background:var(--vt-c-white);--color-background-soft:var(--vt-c-white-soft);--color-background-mute:var(--vt-c-white-mute);--color-border:var(--vt-c-divider-light-2);--color-border-hover:var(--vt-c-divider-light-1);--color-heading:var(--vt-c-text-light-1);--color-text:var(--vt-c-text-light-1);--section-gap:160px}@media (prefers-color-scheme:dark){:root{--color-background:var(--vt-c-black);--color-background-soft:var(--vt-c-black-soft);--color-background-mute:var(--vt-c-black-mute);--color-border:var(--vt-c-divider-dark-2);--color-border-hover:var(--vt-c-divider-dark-1);--color-heading:var(--vt-c-text-dark-1);--color-text:var(--vt-c-text-dark-2)}}*,:after,:before{box-sizing:border-box;margin:0;position:relative}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:var(--color-background);color:var(--color-text);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;line-height:1.6;min-height:100vh;text-rendering:optimizeLegibility;transition:color .5s,background-color .5s}svg{overflow:visible}#__nuxt{font-weight:400;margin:0 auto;max-width:1380px;padding:2rem 20px;width:100%}.green,a{color:#00bd7e;text-decoration:none;transition:.4s}@media (hover:hover){a:hover{background-color:rgba(0,189,126,.2)}}@media (min-width:1024px){body{display:flex;place-items:center}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(688);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(583);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".quiz-slide{background:#fff;box-shadow:0 4px 28px 13px rgba(0,0,0,.25);margin:auto;max-width:1045px;width:100%}.quiz-slide .slick-slide_1 .slick-prev{visibility:hidden}@media (max-width:768px){.quiz-slide .slick-slide_1 .slick-prev{position:absolute}}.quiz__map{margin-right:60px}@media (max-width:1200px){.quiz__map{margin-bottom:30px;margin-right:0}.quiz__map img{margin:auto}}@media (max-width:576px){.quiz__map{width:100%}.quiz__map img{height:auto;width:100%}}.quiz-inputs{width:100%}.quiz-inputs .form-control{margin-bottom:13px}.quiz-inputs .form-control input{font-size:24px;font-weight:600;height:46px;line-height:46px;padding:0 0 0 13px}.quiz-inputs .form-control input::-moz-placeholder,.quiz-inputs .form-control textarea::-moz-placeholder{color:#000;opacity:1}.quiz-inputs .form-control input::placeholder,.quiz-inputs .form-control textarea::placeholder{color:#000;opacity:1}.quiz-inputs .form-control input:-ms-input-placeholder,.quiz-inputs .form-control textarea:-ms-input-placeholder{color:#000}.quiz-inputs .form-control input::-ms-input-placeholder,.quiz-inputs .form-control textarea::-ms-input-placeholder{color:#000}.quiz-inputs .form-control input[type=text]{width:100%}.quiz-inputs .form-control input[type=checkbox]{height:0;left:-9999px;position:absolute;visibility:hidden;width:0}.quiz-inputs .form-control input[type=checkbox]:checked+span{box-shadow:0 1px 1px rgba(0,0,0,.25)}.quiz-inputs .form-control input[type=checkbox]+span{background:#fff;border:0;box-shadow:0 4px 4px rgba(0,0,0,.25);color:#000;cursor:pointer;display:block;font-size:20px;font-weight:600;height:94px;line-height:92px;margin:10px;padding:0;position:relative;text-align:center;transition:.4s}.quiz-inputs .form-control input[type=checkbox]+span:hover{box-shadow:0 1px 1px rgba(0,0,0,.25)}@media (max-width:576px){.quiz-inputs .form-control input[type=checkbox]+span{height:61px;line-height:59px}}.quiz-inputs-checkbox{display:flex;flex-wrap:wrap;justify-content:center}.quiz-inputs-checkbox .form-control{margin-bottom:0!important;width:333px}@media (max-width:992px){.quiz-inputs-checkbox .form-control{width:50%}}@media (max-width:576px){.quiz-inputs-checkbox .form-control{width:100%}}.quiz-inputs-checkbox_small{justify-content:flex-start}.quiz-inputs-checkbox_small .form-control{width:213px}@media (max-width:992px){.quiz-inputs-checkbox_small .form-control{width:25%}}@media (max-width:576px){.quiz-inputs-checkbox_small .form-control{width:100%}}.quiz-inputs-checkbox_small .form-control input[type=checkbox]+span{font-size:14px;height:61px;line-height:59px}@media (max-width:576px){.quiz-inputs-checkbox_small .form-control input[type=checkbox]+span{font-size:20px}}.quiz-body{display:flex}@media (max-width:1200px){.quiz-body{flex-direction:column}}.quiz-buttons{align-items:center;display:flex;justify-content:space-between;margin:50px auto;max-width:606px}@media (max-width:768px){.quiz-buttons{flex-direction:column;margin-bottom:30px;margin-top:30px}}.quiz-buttons button{background:#fff;border:0;box-shadow:0 4px 4px rgba(0,0,0,.25);color:#000;cursor:pointer;font-size:24px;font-weight:600;height:75px;line-height:73px;padding:0;position:relative;text-transform:uppercase;transition:.4s}.quiz-buttons button:hover{box-shadow:0 1px 1px rgba(0,0,0,.25)}.quiz-buttons button.slick-prev{width:246px}@media (max-width:768px){.quiz-buttons button.slick-prev{margin-bottom:15px}}.quiz-buttons button.slick-prev svg{left:25px;margin-top:-21px;position:absolute;top:50%}.quiz-buttons button.slick-next{width:285px}.quiz-buttons button.slick-next svg{margin-top:-21px;position:absolute;right:25px;top:50%}@media (max-width:992px){.quiz-buttons button{font-size:20px;width:48%!important}.quiz-buttons button svg{width:30px}}@media (max-width:576px){.quiz-buttons button{width:100%!important}}.quiz-item{padding:55px 55px 0}@media (max-width:768px){.quiz-item{padding:15px}}.quiz-item_has-checkbox h2{margin-bottom:90px}.quiz-item_has-checkbox .quiz-buttons button{width:285px}.quiz-item h2{color:#000;font-size:36px;font-weight:600;line-height:44px;margin-bottom:42px;text-align:center}@media (max-width:992px){.quiz-item h2{font-size:28px;line-height:34px;margin-bottom:30px}}.quiz-modal{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;visibility:hidden;width:100%;z-index:9991}.quiz-modal.show{visibility:visible}.quiz-modal__close{color:#000;cursor:pointer;position:absolute;right:15px;top:15px;z-index:991}.quiz-inputs .form-control input[type=date]{width:100%}.quiz-inputs .form-control textarea{color:#000;font-family:inherit;font-size:24px;font-weight:600;line-height:46px;padding:0 0 0 13px;resize:none;width:100%}.quiz-buttons button.hide{visibility:hidden}.quiz-inputs .form-control label{color:#000;cursor:pointer;font-size:24px;font-weight:600}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(688);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(583);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".interactive-map{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;width:100%}.interactive-map .details-view{word-wrap:break-word;display:flex;flex-direction:column;max-width:350px;min-width:350px;overflow:hidden;padding:0 0 0 20px;white-space:pre-wrap;width:350px}.interactive-map .details-view .n-card-header__main{font-size:24px}@media(max-width:1024px){.interactive-map .details-view{max-width:250px;min-width:250px;width:250px}.interactive-map .details-view .n-card-header__main{font-size:16px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(688);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(583);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".map-legends{display:block;margin-bottom:20px;min-width:100%;width:100%}.map-legends .n-text{display:block;margin-bottom:15px}.map-legends .n-checkbox__label{text-transform:capitalize}@media(max-width:1024px){.map-legends{min-width:850px;width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 962:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
module.exports = x({ ["createError"]: () => __WEBPACK_EXTERNAL_MODULE_h3__.createError, ["sendRedirect"]: () => __WEBPACK_EXTERNAL_MODULE_h3__.sendRedirect });

/***/ }),

/***/ 932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
module.exports = x({ ["hasProtocol"]: () => __WEBPACK_EXTERNAL_MODULE_ufo__.hasProtocol, ["isEqual"]: () => __WEBPACK_EXTERNAL_MODULE_ufo__.isEqual, ["joinURL"]: () => __WEBPACK_EXTERNAL_MODULE_ufo__.joinURL, ["parseQuery"]: () => __WEBPACK_EXTERNAL_MODULE_ufo__.parseQuery, ["parseURL"]: () => __WEBPACK_EXTERNAL_MODULE_ufo__.parseURL, ["stringifyParsedURL"]: () => __WEBPACK_EXTERNAL_MODULE_ufo__.stringifyParsedURL, ["stringifyQuery"]: () => __WEBPACK_EXTERNAL_MODULE_ufo__.stringifyQuery });

/***/ }),

/***/ 575:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
module.exports = x({ ["URL"]: () => __WEBPACK_EXTERNAL_MODULE_url__.URL, ["URLSearchParams"]: () => __WEBPACK_EXTERNAL_MODULE_url__.URLSearchParams });

/***/ }),

/***/ 609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
module.exports = x({ ["Fragment"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.Fragment, ["Teleport"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.Teleport, ["computed"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.computed, ["createApp"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.createApp, ["createBlock"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.createBlock, ["createElementBlock"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.createElementBlock, ["createTextVNode"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.createTextVNode, ["createVNode"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.createVNode, ["defineAsyncComponent"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.defineAsyncComponent, ["defineComponent"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.defineComponent, ["getCurrentInstance"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.getCurrentInstance, ["h"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.h, ["inject"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.inject, ["isReadonly"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.isReadonly, ["isRef"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.isRef, ["mergeProps"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.mergeProps, ["onErrorCaptured"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.onErrorCaptured, ["onServerPrefetch"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.onServerPrefetch, ["openBlock"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.openBlock, ["provide"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.provide, ["reactive"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.reactive, ["ref"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.ref, ["renderList"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.renderList, ["resolveComponent"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.resolveComponent, ["toDisplayString"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.toDisplayString, ["toRef"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.toRef, ["unref"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.unref, ["version"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.version, ["watchEffect"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.watchEffect, ["withCtx"]: () => __WEBPACK_EXTERNAL_MODULE_vue__.withCtx });

/***/ }),

/***/ 344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
module.exports = x({ ["ssrInterpolate"]: () => __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrInterpolate, ["ssrRenderAttr"]: () => __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderAttr, ["ssrRenderAttrs"]: () => __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderAttrs, ["ssrRenderClass"]: () => __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderClass, ["ssrRenderComponent"]: () => __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderComponent, ["ssrRenderList"]: () => __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderList, ["ssrRenderSuspense"]: () => __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__.ssrRenderSuspense });

/***/ }),

/***/ 314:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ 201:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export defineNuxtLink */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(932);
/* harmony import */ __webpack_require__(529);
/* harmony import */ __webpack_require__(832);
/* harmony import */ var _composables_router_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ __webpack_require__(532);
/* harmony import */ __webpack_require__(314);







const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return (0, vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = (0, _composables_router_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useRouter */ .tv)();
      const to = (0, vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return props.to || props.href || "";
      });
      const isExternal = (0, vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || (0, ufo__WEBPACK_IMPORTED_MODULE_1__.hasProtocol)(to.value, true);
      });
      const prefetched = (0, vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      const el =  void 0 ;
      return () => {
        if (!isExternal.value) {
          return (0, vue__WEBPACK_IMPORTED_MODULE_0__.h)(
            (0, vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink"),
            {
              ref:  void 0 ,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom,
              rel: props.rel
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => (0, _composables_router_mjs__WEBPACK_IMPORTED_MODULE_4__/* .navigateTo */ .T8)(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = (0, ufo__WEBPACK_IMPORTED_MODULE_1__.parseURL)(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return (0, ufo__WEBPACK_IMPORTED_MODULE_1__.parseQuery)(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return (0, vue__WEBPACK_IMPORTED_MODULE_0__.h)("a", { ref: el, href, rel, target }, slots.default?.());
      };
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineNuxtLink({ componentName: "NuxtLink" }));


/***/ }),

/***/ 955:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tr": () => (/* binding */ createError),
/* harmony export */   "VI": () => (/* binding */ useError),
/* harmony export */   "x2": () => (/* binding */ showError)
/* harmony export */ });
/* unused harmony exports clearError, isNuxtError */
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(962);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(532);



const useError = () => (0, vue__WEBPACK_IMPORTED_MODULE_1__.toRef)((0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useNuxtApp */ .e)().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useNuxtApp */ .e)();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = (0, h3__WEBPACK_IMPORTED_MODULE_0__.createError)(err);
  _err.__nuxt_error = true;
  return _err;
};


/***/ }),

/***/ 529:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports preloadComponents, prefetchComponents, preloadRouteComponents */
/* harmony import */ __webpack_require__(532);
/* harmony import */ __webpack_require__(76);


/***/ }),

/***/ 832:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export onNuxtReady */
/* harmony import */ __webpack_require__(532);
/* harmony import */ __webpack_require__(314);


/***/ }),

/***/ 76:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T8": () => (/* binding */ navigateTo),
/* harmony export */   "tv": () => (/* binding */ useRouter),
/* harmony export */   "yj": () => (/* binding */ useRoute)
/* harmony export */ });
/* unused harmony exports onBeforeRouteLeave, onBeforeRouteUpdate, defineNuxtRouteMiddleware, addRouteMiddleware, abortNavigation, setPageLayout */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(962);
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(932);
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(532);
/* harmony import */ __webpack_require__(955);
/* harmony import */ __webpack_require__(101);
/* harmony import */ var _ssr_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(984);







const useRouter = () => {
  return (0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .e)()?.$router;
};
const useRoute = () => {
  if ((0, vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()) {
    return (0, vue__WEBPACK_IMPORTED_MODULE_0__.inject)("_route", (0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .e)()._route);
  }
  return (0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .e)()._route;
};
const isProcessingMiddleware = () => {
  try {
    if ((0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .e)()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (0, ufo__WEBPACK_IMPORTED_MODULE_2__.hasProtocol)(toPath, true);
  if (isExternal && !options?.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && (0, ufo__WEBPACK_IMPORTED_MODULE_2__.parseURL)(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = (0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useNuxtApp */ .e)();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      if (isProcessingMiddleware() && !isExternal) {
        (0, _ssr_mjs__WEBPACK_IMPORTED_MODULE_6__/* .setResponseStatus */ .ut)(options?.redirectCode || 302);
        return to;
      }
      const redirectLocation = isExternal ? toPath : (0, ufo__WEBPACK_IMPORTED_MODULE_2__.joinURL)((0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useRuntimeConfig */ .BE)().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => (0, h3__WEBPACK_IMPORTED_MODULE_1__.sendRedirect)(nuxtApp.ssrContext.event, redirectLocation, options?.redirectCode || 302));
    }
  }
  if (isExternal) {
    if (options?.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};


/***/ }),

/***/ 984:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ut": () => (/* binding */ setResponseStatus),
/* harmony export */   "x_": () => (/* binding */ useRequestFetch),
/* harmony export */   "yj": () => (/* binding */ useRequestEvent)
/* harmony export */ });
/* unused harmony export useRequestHeaders */
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(532);
function useRequestEvent(nuxtApp = (0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useNuxtApp */ .e)()) {
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  const event = (0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useNuxtApp */ .e)().ssrContext?.event;
  return event?.$fetch || globalThis.$fetch;
}
function setResponseStatus(code, message) {
  const event =  useRequestEvent();
  if (event) {
    event.node.res.statusCode = code;
    if (message) {
      event.node.res.statusMessage = message;
    }
  }
}


/***/ }),

/***/ 101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useState)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(532);


function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = (0, _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useNuxtApp */ .e)();
  const state = (0, vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if ((0, vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}


/***/ }),

/***/ 659:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fm": () => (/* reexport */ app_nuxt/* defineNuxtPlugin */.fm),
  "ib": () => (/* reexport */ useFetch),
  "Kf": () => (/* reexport */ composables_useHead)
});

// UNUSED EXPORTS: NuxtPluginIndicator, _getAppConfig, abortNavigation, addRouteMiddleware, applyPlugin, applyPlugins, callWithNuxt, clearError, clearNuxtData, createError, createNuxtApp, defineAppConfig, defineNuxtComponent, defineNuxtLink, defineNuxtRouteMiddleware, isNuxtError, isNuxtPlugin, isPrerendered, isVue2, isVue3, loadPayload, navigateTo, normalizePlugins, onBeforeRouteLeave, onBeforeRouteUpdate, onNuxtReady, prefetchComponents, preloadComponents, preloadPayload, preloadRouteComponents, refreshNuxtData, setPageLayout, setResponseStatus, showError, updateAppConfig, useAppConfig, useAsyncData, useCookie, useError, useHydration, useLazyAsyncData, useLazyFetch, useNuxtApp, useNuxtData, useRequestEvent, useRequestFetch, useRequestHeaders, useRoute, useRouter, useRuntimeConfig, useSeoMeta, useServerSeoMeta, useState

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/nuxt.mjs + 2 modules
var app_nuxt = __webpack_require__(532);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/error.mjs
var error = __webpack_require__(955);



const getDefault = () => null;
function asyncData_useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = (0, app_nuxt/* useNuxtApp */.e)();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: (0, external_vue_.ref)(getCachedData() ?? options.default?.() ?? null),
      pending: (0, external_vue_.ref)(!hasCachedData()),
      error: (0, external_vue_.ref)(nuxt.payload._errors[key] ? (0, error/* createError */.Tr)(nuxt.payload._errors[key]) : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = (0, external_vue_.unref)(options.default?.() ?? null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = (0, error/* createError */.Tr)(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if ( fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if ((0, external_vue_.getCurrentInstance)()) {
      (0, external_vue_.onServerPrefetch)(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/router.mjs
__webpack_require__(76);


function composables_useHead(input, options) {
  return (0, app_nuxt/* useNuxtApp */.e)()._useHead(input, options);
}

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/state.mjs
__webpack_require__(101);
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const external_ohash_namespaceObject = x({ ["hash"]: () => __WEBPACK_EXTERNAL_MODULE_ohash__.hash });
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/ssr.mjs
var ssr = __webpack_require__(984);




function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || (0, external_ohash_namespaceObject.hash)([autoKey, (0, external_vue_.unref)(opts.baseURL), typeof request === "string" ? request : "", (0, external_vue_.unref)(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = (0, external_vue_.computed)(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return (0, external_vue_.unref)(r);
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = (0, external_vue_.reactive)({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    watch: [
      _fetchOptions,
      _request,
      ...watch || []
    ]
  };
  let controller;
  const asyncData = asyncData_useAsyncData(key, () => {
    controller?.abort?.();
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if ( !opts.$fetch && isLocalFetch) {
      _$fetch = (0, ssr/* useRequestFetch */.x_)();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
var external_cookie_es_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
external_cookie_es_x({  });
// EXTERNAL MODULE: external "h3"
__webpack_require__(962);
var external_destr_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
external_destr_x({ ["default"]: () => destr["default"] });

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/ready.mjs
__webpack_require__(832);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/preload.mjs
__webpack_require__(529);
// EXTERNAL MODULE: external "ufo"
__webpack_require__(932);
/* provided dependency */ __webpack_require__(575)["URL"];














// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/components/nuxt-link.mjs
__webpack_require__(201);
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

const inlineConfig = {};
/* harmony default export */ (defuFn(inlineConfig));


/***/ }),

/***/ 532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zd": () => (/* binding */ applyPlugins),
  "zt": () => (/* binding */ callWithNuxt),
  "dX": () => (/* binding */ createNuxtApp),
  "fm": () => (/* binding */ defineNuxtPlugin),
  "YB": () => (/* binding */ normalizePlugins),
  "e": () => (/* binding */ useNuxtApp),
  "BE": () => (/* binding */ useRuntimeConfig)
});

// UNUSED EXPORTS: NuxtPluginIndicator, applyPlugin, defineAppConfig, isNuxtPlugin

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const external_hookable_namespaceObject = x({ ["createHooks"]: () => __WEBPACK_EXTERNAL_MODULE_hookable__.createHooks });
var external_unctx_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const external_unctx_namespaceObject = external_unctx_x({ ["getContext"]: () => __WEBPACK_EXTERNAL_MODULE_unctx__.getContext });



const nuxtAppCtx = (0, external_unctx_namespaceObject.getContext)("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: (0, external_vue_.reactive)({
      data: {},
      state: {},
      _errors: {},
      ... { serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = (0, external_hookable_namespaceObject.createHooks)();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hook("app:error", (...args) => {
    console.error("[nuxt] error caught during app initialization", ...args);
  });
  const runtimeConfig =  options.ssrContext.runtimeConfig ;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins) {
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = (0, external_vue_.getCurrentInstance)();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".mjs";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/ })();
/******/ 
/******/ /* webpack/runtime/import chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		143: 0
/******/ 	};
/******/ 	
/******/ 	var installChunk = (data) => {
/******/ 		var {ids, modules, runtime} = data;
/******/ 		// add "modules" to the modules object,
/******/ 		// then flag all "ids" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		for(moduleId in modules) {
/******/ 			if(__webpack_require__.o(modules, moduleId)) {
/******/ 				__webpack_require__.m[moduleId] = modules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(runtime) runtime(__webpack_require__);
/******/ 		for(;i < ids.length; i++) {
/******/ 			chunkId = ids[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[ids[i]] = 0;
/******/ 		}
/******/ 	
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// import() chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[1]);
/******/ 				} else {
/******/ 					{ // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = import('../rollup/_dynamic-require.mjs').then(r => r.default || r).then(dynamicRequire => dynamicRequire( __webpack_require__.u(chunkId))).then(installChunk, (e) => {
/******/ 							if(installedChunks[chunkId] !== 0) installedChunks[chunkId] = undefined;
/******/ 							throw e;
/******/ 						});
/******/ 						var promise = Promise.race([promise, new Promise((resolve) => (installedChunkData = installedChunks[chunkId] = [resolve]))]);
/******/ 						promises.push(installedChunkData[1] = promise);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no external install chunk
/******/ 	
/******/ 	// no on chunks loaded
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ app_entry)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const external_ofetch_namespaceObject = x({ ["$fetch"]: () => __WEBPACK_EXTERNAL_MODULE_ofetch__.$fetch });
/* provided dependency */ __webpack_require__(575)["URLSearchParams"];
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const index of input.filter((url2) => isNonEmptyURL(url2))) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(index) : index;
  }
  return url;
}
var nitro_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const nitro_namespaceObject = nitro_x({ ["useRuntimeConfig"]: () => useRuntimeConfig });


const appConfig = (0, nitro_namespaceObject.useRuntimeConfig)().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};

__webpack_require__.p = buildAssetsURL();

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/nuxt.mjs + 2 modules
var app_nuxt = __webpack_require__(532);

const components = {};
/* harmony default export */ const components_plugin = ((0, app_nuxt/* defineNuxtPlugin */.fm)((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}));
var vue_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const vue_namespaceObject = vue_x({ ["createHead"]: () => __WEBPACK_EXTERNAL_MODULE__unhead_vue_609689db__.createHead, ["injectHead"]: () => __WEBPACK_EXTERNAL_MODULE__unhead_vue_609689db__.injectHead, ["useHead"]: () => __WEBPACK_EXTERNAL_MODULE__unhead_vue_609689db__.useHead });
var dom_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const dom_namespaceObject = dom_x({ ["debouncedRenderDOMHead"]: () => __WEBPACK_EXTERNAL_MODULE__unhead_dom_2b61a37b__.debouncedRenderDOMHead, ["renderDOMHead"]: () => __WEBPACK_EXTERNAL_MODULE__unhead_dom_2b61a37b__.renderDOMHead });
var ssr_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const ssr_namespaceObject = ssr_x({ ["renderSSRHead"]: () => __WEBPACK_EXTERNAL_MODULE__unhead_ssr_a0c369cc__.renderSSRHead });





function createHead(initHeadObject, options) {
  const unhead = (0, vue_namespaceObject.createHead)(options || {});
  const legacyHead = {
    unhead,
    install(app) {
      if (external_vue_.version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    use(plugin) {
      unhead.use(plugin);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options2) {
      return unhead.push(input, options2);
    },
    addEntry(input, options2) {
      return unhead.push(input, options2);
    },
    addHeadObjs(input, options2) {
      return unhead.push(input, options2);
    },
    addReactiveEntry(input, options2) {
      const api = (0, vue_namespaceObject.useHead)(input, options2);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document, force) {
      if (force)
        (0, dom_namespaceObject.renderDOMHead)(unhead, { document });
      else
        (0, dom_namespaceObject.debouncedRenderDOMHead)(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
external_vue_.version.startsWith("2.");
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };




/* harmony default export */ const vueuse_head_plugin = ((0, app_nuxt/* defineNuxtPlugin */.fm)((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = vue_namespaceObject.useHead;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const meta = await (0, ssr_namespaceObject.renderSSRHead)(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        // resolves naming difference with NuxtMeta and @vueuse/head
        bodyScripts: meta.bodyTags
      };
    };
  }
}));

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(932);
// EXTERNAL MODULE: external "h3"
var external_h3_ = __webpack_require__(962);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/error.mjs
var composables_error = __webpack_require__(955);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/router.mjs
var composables_router = __webpack_require__(76);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/state.mjs
var state = __webpack_require__(101);
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/ssr.mjs
var ssr = __webpack_require__(984);
const globalMiddleware = [];









function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = (0, external_ufo_.stringifyParsedURL)({
      pathname: fullPath.path || "",
      search: (0, external_ufo_.stringifyQuery)(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = (0, external_ufo_.parseURL)(fullPath.toString());
  return {
    path: url.pathname,
    fullPath,
    query: (0, external_ufo_.parseQuery)(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
/* harmony default export */ const router = ((0, app_nuxt/* defineNuxtPlugin */.fm)((nuxtApp) => {
  const initialURL =  nuxtApp.ssrContext.url;
  const routes = [];
  const hooks = {
    "navigate:before": [],
    "resolve:before": [],
    "navigate:after": [],
    error: []
  };
  const registerHook = (hook, guard) => {
    hooks[hook].push(guard);
    return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
  };
  (0, app_nuxt/* useRuntimeConfig */.BE)().app.baseURL;
  const route = (0, external_vue_.reactive)(getRouteFromPath(initialURL));
  async function handleNavigation(url, replace) {
    try {
      const to = getRouteFromPath(url);
      for (const middleware of hooks["navigate:before"]) {
        const result = await middleware(to, route);
        if (result === false || result instanceof Error) {
          return;
        }
        if (result) {
          return handleNavigation(result, true);
        }
      }
      for (const handler of hooks["resolve:before"]) {
        await handler(to, route);
      }
      Object.assign(route, to);
      if (false) ;
      for (const middleware of hooks["navigate:after"]) {
        await middleware(to, route);
      }
    } catch (err) {
      for (const handler of hooks.error) {
        await handler(err);
      }
    }
  }
  const router = {
    currentRoute: route,
    isReady: () => Promise.resolve(),
    // These options provide a similar API to vue-router but have no effect
    options: {},
    install: () => Promise.resolve(),
    // Navigation
    push: (url) => handleNavigation(url),
    replace: (url) => handleNavigation(url),
    back: () => window.history.go(-1),
    go: (delta) => window.history.go(delta),
    forward: () => window.history.go(1),
    // Guards
    beforeResolve: (guard) => registerHook("resolve:before", guard),
    beforeEach: (guard) => registerHook("navigate:before", guard),
    afterEach: (guard) => registerHook("navigate:after", guard),
    onError: (handler) => registerHook("error", handler),
    // Routes
    resolve: getRouteFromPath,
    addRoute: (parentName, route2) => {
      routes.push(route2);
    },
    getRoutes: () => routes,
    hasRoute: (name) => routes.some((route2) => route2.name === name),
    removeRoute: (name) => {
      const index = routes.findIndex((route2) => route2.name === name);
      if (index !== -1) {
        routes.splice(index, 1);
      }
    }
  };
  nuxtApp.vueApp.component("RouterLink", {
    functional: true,
    props: {
      to: String,
      custom: Boolean,
      replace: Boolean,
      // Not implemented
      activeClass: String,
      exactActiveClass: String,
      ariaCurrentValue: String
    },
    setup: (props, { slots }) => {
      const navigate = () => handleNavigation(props.to, props.replace);
      return () => {
        const route2 = router.resolve(props.to);
        return props.custom ? slots.default?.({ href: props.to, navigate, route: route2 }) : (0, external_vue_.h)("a", { href: props.to, onClick: (e) => {
          e.preventDefault();
          return navigate();
        } }, slots);
      };
    }
  });
  nuxtApp._route = route;
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const initialLayout = (0, state/* useState */.e)("_layout");
  nuxtApp.hooks.hookOnce("app:created", async () => {
    router.beforeEach(async (to, from) => {
      to.meta = (0, external_vue_.reactive)(to.meta || {});
      if (nuxtApp.isHydrating && initialLayout.value && !(0, external_vue_.isReadonly)(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const middleware of middlewareEntries) {
        const result = await (0, app_nuxt/* callWithNuxt */.zt)(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error = result || (0, external_h3_.createError)({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            return (0, app_nuxt/* callWithNuxt */.zt)(nuxtApp, composables_error/* showError */.x2, [error]);
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.afterEach(() => {
      delete nuxtApp._processingMiddleware;
    });
    await router.replace(initialURL);
    if (!(0, external_ufo_.isEqual)(route.fullPath, initialURL)) {
      const event = await (0, app_nuxt/* callWithNuxt */.zt)(nuxtApp, ssr/* useRequestEvent */.yj);
      const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
      await (0, app_nuxt/* callWithNuxt */.zt)(nuxtApp, composables_router/* navigateTo */.T8, [route.fullPath, options]);
    }
  });
  return {
    provide: {
      route,
      router
    }
  };
}));

/* harmony default export */ const preload_server = ((0, app_nuxt/* defineNuxtPlugin */.fm)((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
}));
var vue3_ssr_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const vue3_ssr_namespaceObject = vue3_ssr_x({ ["setup"]: () => __WEBPACK_EXTERNAL_MODULE__css_render_vue3_ssr_990d088a__.setup });
// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/index.mjs + 17 modules
var app = __webpack_require__(659);



/* harmony default export */ const naive_ui_plugin_server = ((0, app/* defineNuxtPlugin */.fm)((nuxtApp) => {
  const { collect } = (0, vue3_ssr_namespaceObject.setup)(nuxtApp.app);
  nuxtApp.ssrContext.renderMeta = () => {
    return {
      headTags: collect()
    };
  };
}));





/* harmony default export */ const server = ([
  components_plugin,
  vueuse_head_plugin,
  router,
  preload_server,
  naive_ui_plugin_server
]);

// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(344);


/* harmony default export */ const client_only = ((0, external_vue_.defineComponent)({
  name: 'ClientOnly',
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ['fallback', 'placeholder', 'placeholderTag', 'fallbackTag'],
  setup (_, { slots, attrs }) {
    const mounted = (0, external_vue_.ref)(false);
    return (props) => {
      if (mounted.value) { return slots.default?.() }
      const slot = slots.fallback || slots.placeholder;
      if (slot) { return slot() }
      const fallbackStr = props.fallback || props.placeholder || '';
      const fallbackTag = props.fallbackTag || props.placeholderTag || 'span';
      return (0, external_vue_.createElementBlock)(fallbackTag, attrs, fallbackStr)
    }
  }
}));


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_card = (0, external_vue_.resolveComponent)("n-card");
  const _component_n_text = (0, external_vue_.resolveComponent)("n-text");
  const _component_n_grid = (0, external_vue_.resolveComponent)("n-grid");
  const _component_n_gi = (0, external_vue_.resolveComponent)("n-gi");
  const _component_n_checkbox = (0, external_vue_.resolveComponent)("n-checkbox");
  if ($props.selectedPeriods) {
    _push((0, server_renderer_.ssrRenderComponent)(_component_n_card, (0, external_vue_.mergeProps)({ class: "map-legends" }, _attrs), {
      default: (0, external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2((0, server_renderer_.ssrRenderComponent)(_component_n_text, { type: "info" }, {
            default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Life periods`);
              } else {
                return [
                  (0, external_vue_.createTextVNode)("Life periods")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2((0, server_renderer_.ssrRenderComponent)(_component_n_grid, {
            "y-gap": 8,
            cols: 4,
            "item-responsive": ""
          }, {
            default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                (0, server_renderer_.ssrRenderList)($options.selectedPeriodsSorted, (period) => {
                  _push3((0, server_renderer_.ssrRenderComponent)(_component_n_gi, {
                    key: period.key,
                    span: "600:2 1024:1"
                  }, {
                    default: (0, external_vue_.withCtx)((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4((0, server_renderer_.ssrRenderComponent)(_component_n_checkbox, {
                          style: `--n-color-checked: ${period.color}`,
                          value: period.key,
                          label: `${period.val}`,
                          "default-checked": true,
                          "data-key": period.key,
                          "onUpdate:checked": $options.handleCheckedChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          (0, external_vue_.createVNode)(_component_n_checkbox, {
                            style: `--n-color-checked: ${period.color}`,
                            value: period.key,
                            label: `${period.val}`,
                            "default-checked": true,
                            "data-key": period.key,
                            "onUpdate:checked": $options.handleCheckedChange
                          }, null, 8, ["style", "value", "label", "data-key", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  ((0, external_vue_.openBlock)(true), (0, external_vue_.createBlock)(external_vue_.Fragment, null, (0, external_vue_.renderList)($options.selectedPeriodsSorted, (period) => {
                    return (0, external_vue_.openBlock)(), (0, external_vue_.createBlock)(_component_n_gi, {
                      key: period.key,
                      span: "600:2 1024:1"
                    }, {
                      default: (0, external_vue_.withCtx)(() => [
                        (0, external_vue_.createVNode)(_component_n_checkbox, {
                          style: `--n-color-checked: ${period.color}`,
                          value: period.key,
                          label: `${period.val}`,
                          "default-checked": true,
                          "data-key": period.key,
                          "onUpdate:checked": $options.handleCheckedChange
                        }, null, 8, ["style", "value", "label", "data-key", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            (0, external_vue_.createVNode)(_component_n_text, { type: "info" }, {
              default: (0, external_vue_.withCtx)(() => [
                (0, external_vue_.createTextVNode)("Life periods")
              ]),
              _: 1
            }),
            (0, external_vue_.createVNode)(_component_n_grid, {
              "y-gap": 8,
              cols: 4,
              "item-responsive": ""
            }, {
              default: (0, external_vue_.withCtx)(() => [
                ((0, external_vue_.openBlock)(true), (0, external_vue_.createBlock)(external_vue_.Fragment, null, (0, external_vue_.renderList)($options.selectedPeriodsSorted, (period) => {
                  return (0, external_vue_.openBlock)(), (0, external_vue_.createBlock)(_component_n_gi, {
                    key: period.key,
                    span: "600:2 1024:1"
                  }, {
                    default: (0, external_vue_.withCtx)(() => [
                      (0, external_vue_.createVNode)(_component_n_checkbox, {
                        style: `--n-color-checked: ${period.color}`,
                        value: period.key,
                        label: `${period.val}`,
                        "default-checked": true,
                        "data-key": period.key,
                        "onUpdate:checked": $options.handleCheckedChange
                      }, null, 8, ["style", "value", "label", "data-key", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
var external_naive_ui_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const external_naive_ui_namespaceObject = external_naive_ui_x({ ["NCard"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NCard, ["NCheckbox"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NCheckbox, ["NConfigProvider"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NConfigProvider, ["NGi"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NGi, ["NGlobalStyle"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NGlobalStyle, ["NGrid"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NGrid, ["NH1"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NH1, ["NText"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.NText, ["darkTheme"]: () => __WEBPACK_EXTERNAL_MODULE_naive_ui_5e4f9fb9__.darkTheme });

/* harmony default export */ const Togglesvue_type_script_lang_js = ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Toggles",
  props: {
    selectedPeriods: {
      type: Object
    }
  },
  components: {
    NCard: external_naive_ui_namespaceObject.NCard,
    NText: external_naive_ui_namespaceObject.NText,
    NCheckbox: external_naive_ui_namespaceObject.NCheckbox,
    NGrid: external_naive_ui_namespaceObject.NGrid,
    NGi: external_naive_ui_namespaceObject.NGi
  },
  computed: {
    selectedPeriodsSorted() {
      const selectedPeriodsArray = this.selectedPeriods.concat();
      return selectedPeriodsArray.sort((a, b) => {
        return a.year < b.year ? -1 : 1;
      });
    }
  },
  methods: {
    handleCheckedChange(checked, e) {
      const toggledNumber = e.target.closest(".n-checkbox").getAttribute("data-key");
      this.$emit("update:selectedPeriods", { toggledNumber, checked });
    }
  }
});
 
// EXTERNAL MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-50.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-50.use[1]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-50.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./components/Toggles.vue?vue&type=style&index=0&id=ed1de330&lang=scss
__webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(438);


const __exports__ = /*#__PURE__*/(0, exportHelper/* default */.Z)(Togglesvue_type_script_lang_js, [['ssrRender',ssrRender]]);

/* harmony default export */ const Toggles = (__exports__);







const __default__ = {
  data() {
    return {
      selectedPeriods: [],
      hoveredCell: {},
      clickedCell: {}
    };
  },
  methods: {
    updatePeriods({ toggledNumber, checked }) {
      this.selectedPeriods[toggledNumber].enabled = checked;
    },
    setPeriods(data) {
      this.selectedPeriods = data;
    },
    setHoveredCell(data) {
      this.hoveredCell = data;
    },
    setClickedCell(cell) {
      this.clickedCell = cell;
    }
  }
};
/* harmony default export */ const InteractiveMapvue_type_script_setup_true_lang_js = (/* @__PURE__ */Object.assign(__default__, {
  __name: "InteractiveMap",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = client_only;
      _push(`<!--[-->`);
      _push((0, server_renderer_.ssrRenderComponent)(Toggles, {
        selectedPeriods: _ctx.selectedPeriods,
        "onUpdate:selectedPeriods": _ctx.updatePeriods
      }, null, _parent));
      _push((0, server_renderer_.ssrRenderComponent)(_component_client_only, null, {
        
              }, _parent));
      _push(`<!--]-->`);
    };
  }
}));
 
// EXTERNAL MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-50.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-50.use[1]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-50.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./components/InteractiveMap.vue?vue&type=style&index=0&id=31bc25cc&lang=scss
__webpack_require__(954);

const InteractiveMap_exports_ = InteractiveMapvue_type_script_setup_true_lang_js;

/* harmony default export */ const InteractiveMap = (InteractiveMap_exports_);


function NModalvue_type_template_id_14d0d1e4_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = (0, external_vue_.resolveComponent)("swiper");
  const _component_swiper_slide = (0, external_vue_.resolveComponent)("swiper-slide");
  _push(`<!--[--><button>Show Modal</button><div id="quiz" class="${(0, server_renderer_.ssrRenderClass)([{ show: !_ctx.isShow, w: 0 }, "quiz-modal"])}"><div class="quiz-slide"><div class="quiz-modal__close">close</div>`);
  _push((0, server_renderer_.ssrRenderComponent)(_component_swiper, {
    ref: "swiper",
    class: "swiper",
    modules: _ctx.modules,
    autoHeight: true,
    draggable: false,
    onSwiper: $options.onSwiper,
    onSlideChange: $options.onSlideChange
  }, {
    default: (0, external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>What is your name?</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><input type="text" name="firstname" placeholder="First name"${(0, server_renderer_.ssrRenderAttr)("value", _ctx.firstname)}${_scopeId2}></div><div class="form-control"${_scopeId2}><input type="text" name="lastname"${(0, server_renderer_.ssrRenderAttr)("value", _ctx.lastname)} placeholder="Last name"${_scopeId2}></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, "What is your name?"),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "firstname",
                          placeholder: "First name",
                          value: _ctx.firstname,
                          onInput: $options.inputChange
                        }, null, 40, ["value", "onInput"])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "lastname",
                          value: _ctx.lastname,
                          onInput: $options.inputChange,
                          placeholder: "Last name"
                        }, null, 40, ["value", "onInput"])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>${(0, server_renderer_.ssrInterpolate)(_ctx.firstname)}, where and when were you born?</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date <input type="date" name="date_2"${(0, server_renderer_.ssrRenderAttr)("value", _ctx.date_2)}${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="additional_info_2" placeholder="Additional info"${_scopeId2}>${(0, server_renderer_.ssrInterpolate)(_ctx.additional_info_2)}</textarea></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, (0, external_vue_.toDisplayString)(_ctx.firstname) + ", where and when were you born?", 1),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_2",
                            value: _ctx.date_2,
                            onInput: $options.inputChange
                          }, null, 40, ["value", "onInput"])
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "additional_info_2",
                          value: _ctx.additional_info_2,
                          onInput: $options.inputChange,
                          placeholder: "Additional info"
                        }, null, 40, ["value", "onInput"])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>Do you still remember where and when you went to school, ${(0, server_renderer_.ssrInterpolate)(_ctx.firstname)}</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date From <input type="date" name="date_from_3"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><label${_scopeId2}> Date to <input type="date" name="date_to_3"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="" placeholder="Additional info"${_scopeId2}></textarea></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, "Do you still remember where and when you went to school, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date From "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_from_3"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date to "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_to_3"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "",
                          placeholder: "Additional info"
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide slide-1"${_scopeId2}><h2${_scopeId2}>Where and when did you get your first kiss?</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date <input type="date" name="date_4"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="" placeholder="Additional info"${_scopeId2}></textarea></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide slide-1" }, [
                  (0, external_vue_.createVNode)("h2", null, "Where and when did you get your first kiss?"),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_4"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "",
                          placeholder: "Additional info"
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>Do you still remember the places where you lived, ${(0, server_renderer_.ssrInterpolate)(_ctx.firstname)}</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date From <input type="date" name="date_from_5"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><label${_scopeId2}> Date to <input type="date" name="date_to_5"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="" placeholder="Additional info"${_scopeId2}></textarea></div><div class="form-control"${_scopeId2}><label${_scopeId2}>add additional entries <span${_scopeId2}>+</span></label></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, "Do you still remember the places where you lived, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date From "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_from_5"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date to "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_to_5"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "",
                          placeholder: "Additional info"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)("add additional entries "),
                          (0, external_vue_.createVNode)("span", null, "+")
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>${(0, server_renderer_.ssrInterpolate)(_ctx.firstname)}, which occupations did you hold in life so far?</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date From <input type="date" name="date_from_6"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><label${_scopeId2}> Date to <input type="date" name="date_to_6"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="" placeholder="Additional info (e.g. name of job)"${_scopeId2}></textarea></div><div class="form-control"${_scopeId2}><label${_scopeId2}>add additional entries <span${_scopeId2}>+</span></label></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, (0, external_vue_.toDisplayString)(_ctx.firstname) + ", which occupations did you hold in life so far?", 1),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date From "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_from_6"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date to "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_to_6"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "",
                          placeholder: "Additional info (e.g. name of job)"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)("add additional entries "),
                          (0, external_vue_.createVNode)("span", null, "+")
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>Now it&#39;s time to enter your relationships, ${(0, server_renderer_.ssrInterpolate)(_ctx.firstname)}</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date From <input type="date" name="date_from_7"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><label${_scopeId2}> Date to <input type="date" name="date_to_7"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="" placeholder="Additional info (e.g. name of girl/boyfriend)"${_scopeId2}></textarea></div><div class="form-control"${_scopeId2}><label${_scopeId2}>add additional entries <span${_scopeId2}>+</span></label></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, "Now it's time to enter your relationships, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date From "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_from_7"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date to "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_to_7"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "",
                          placeholder: "Additional info (e.g. name of girl/boyfriend)"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)("add additional entries "),
                          (0, external_vue_.createVNode)("span", null, "+")
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>Where you married, ${(0, server_renderer_.ssrInterpolate)(_ctx.firstname)}</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date From <input type="date" name="date_from_8"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><label${_scopeId2}> Date to <input type="date" name="date_to_8"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="" placeholder="Additional info (e.g. name of spouse)"${_scopeId2}></textarea></div><div class="form-control"${_scopeId2}><label${_scopeId2}>add additional entries <span${_scopeId2}>+</span></label></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, "Where you married, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date From "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_from_8"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date to "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_to_8"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "",
                          placeholder: "Additional info (e.g. name of spouse)"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)("add additional entries "),
                          (0, external_vue_.createVNode)("span", null, "+")
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2((0, server_renderer_.ssrRenderComponent)(_component_swiper_slide, null, {
          default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="quiz-item slide"${_scopeId2}><h2${_scopeId2}>${(0, server_renderer_.ssrInterpolate)(_ctx.firstname)}, I am sure you took great vacation trips. Put these on your rainbow life!</h2><div class="quiz-body"${_scopeId2}><div class="quiz-inputs"${_scopeId2}><div class="form-control"${_scopeId2}><label${_scopeId2}> Date From <input type="date" name="date_from_9"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><label${_scopeId2}> Date to <input type="date" name="date_to_9"${_scopeId2}></label></div><div class="form-control"${_scopeId2}><input type="text" name="address" placeholder="google maps address search box"${_scopeId2}></div><div class="form-control"${_scopeId2}><textarea name="" placeholder="Additional info (e.g. country of vacation)"${_scopeId2}></textarea></div><div class="form-control"${_scopeId2}><label${_scopeId2}>add additional entries <span${_scopeId2}>+</span></label></div></div></div></div>`);
            } else {
              return [
                (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                  (0, external_vue_.createVNode)("h2", null, (0, external_vue_.toDisplayString)(_ctx.firstname) + ", I am sure you took great vacation trips. Put these on your rainbow life!", 1),
                  (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                    (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date From "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_from_9"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)(" Date to "),
                          (0, external_vue_.createVNode)("input", {
                            type: "date",
                            name: "date_to_9"
                          })
                        ])
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("input", {
                          type: "text",
                          name: "address",
                          placeholder: "google maps address search box"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("textarea", {
                          name: "",
                          placeholder: "Additional info (e.g. country of vacation)"
                        })
                      ]),
                      (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                        (0, external_vue_.createVNode)("label", null, [
                          (0, external_vue_.createTextVNode)("add additional entries "),
                          (0, external_vue_.createVNode)("span", null, "+")
                        ])
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, "What is your name?"),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "firstname",
                        placeholder: "First name",
                        value: _ctx.firstname,
                        onInput: $options.inputChange
                      }, null, 40, ["value", "onInput"])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "lastname",
                        value: _ctx.lastname,
                        onInput: $options.inputChange,
                        placeholder: "Last name"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, (0, external_vue_.toDisplayString)(_ctx.firstname) + ", where and when were you born?", 1),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_2",
                          value: _ctx.date_2,
                          onInput: $options.inputChange
                        }, null, 40, ["value", "onInput"])
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "additional_info_2",
                        value: _ctx.additional_info_2,
                        onInput: $options.inputChange,
                        placeholder: "Additional info"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, "Do you still remember where and when you went to school, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date From "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_from_3"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date to "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_to_3"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "",
                        placeholder: "Additional info"
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide slide-1" }, [
                (0, external_vue_.createVNode)("h2", null, "Where and when did you get your first kiss?"),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_4"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "",
                        placeholder: "Additional info"
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, "Do you still remember the places where you lived, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date From "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_from_5"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date to "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_to_5"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "",
                        placeholder: "Additional info"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)("add additional entries "),
                        (0, external_vue_.createVNode)("span", null, "+")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, (0, external_vue_.toDisplayString)(_ctx.firstname) + ", which occupations did you hold in life so far?", 1),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date From "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_from_6"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date to "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_to_6"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "",
                        placeholder: "Additional info (e.g. name of job)"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)("add additional entries "),
                        (0, external_vue_.createVNode)("span", null, "+")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, "Now it's time to enter your relationships, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date From "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_from_7"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date to "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_to_7"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "",
                        placeholder: "Additional info (e.g. name of girl/boyfriend)"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)("add additional entries "),
                        (0, external_vue_.createVNode)("span", null, "+")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, "Where you married, " + (0, external_vue_.toDisplayString)(_ctx.firstname), 1),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date From "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_from_8"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date to "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_to_8"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "",
                        placeholder: "Additional info (e.g. name of spouse)"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)("add additional entries "),
                        (0, external_vue_.createVNode)("span", null, "+")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          (0, external_vue_.createVNode)(_component_swiper_slide, null, {
            default: (0, external_vue_.withCtx)(() => [
              (0, external_vue_.createVNode)("div", { class: "quiz-item slide" }, [
                (0, external_vue_.createVNode)("h2", null, (0, external_vue_.toDisplayString)(_ctx.firstname) + ", I am sure you took great vacation trips. Put these on your rainbow life!", 1),
                (0, external_vue_.createVNode)("div", { class: "quiz-body" }, [
                  (0, external_vue_.createVNode)("div", { class: "quiz-inputs" }, [
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date From "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_from_9"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)(" Date to "),
                        (0, external_vue_.createVNode)("input", {
                          type: "date",
                          name: "date_to_9"
                        })
                      ])
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("input", {
                        type: "text",
                        name: "address",
                        placeholder: "google maps address search box"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("textarea", {
                        name: "",
                        placeholder: "Additional info (e.g. country of vacation)"
                      })
                    ]),
                    (0, external_vue_.createVNode)("div", { class: "form-control" }, [
                      (0, external_vue_.createVNode)("label", null, [
                        (0, external_vue_.createTextVNode)("add additional entries "),
                        (0, external_vue_.createVNode)("span", null, "+")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="quiz-buttons"><button type="button" class="${(0, server_renderer_.ssrRenderClass)([_ctx.buttonClassPrev, "slick-prev slick-arrow"])}"><span>Back</span><svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4998 41.6667L26.3592 38.05L11.1925 23.5834H44.1665V18.4167H11.1925L26.3592 3.95004L22.4998 0.333374L0.833172 21L22.4998 41.6667Z" fill="black"></path></svg></button><button type="button" class="${(0, server_renderer_.ssrRenderClass)([_ctx.buttonClassNext, "slick-next slick-arrow"])}"><span>Proceed</span><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0002 41.6667L17.3189 38.05L31.7856 23.5834H0.333496V18.4167H31.7856L17.3189 3.95004L21.0002 0.333374L41.6668 21L21.0002 41.6667Z" fill="black"></path></svg></button></div></div></div><!--]-->`);
}
var external_swiper_vue_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
const external_swiper_vue_namespaceObject = external_swiper_vue_x({ ["Swiper"]: () => __WEBPACK_EXTERNAL_MODULE_swiper_vue_5f09e7c9__.Swiper, ["SwiperSlide"]: () => __WEBPACK_EXTERNAL_MODULE_swiper_vue_5f09e7c9__.SwiperSlide });
var css_x = y => { var x = {}; __webpack_require__.d(x, y); return x; };
css_x({  });



/* harmony default export */ const NModalvue_type_script_lang_js = ({
  name: "NModal",
  components: {
    Swiper: external_swiper_vue_namespaceObject.Swiper,
    SwiperSlide: external_swiper_vue_namespaceObject.SwiperSlide
  },
  browser: {
    fs: false
    /** зачем это? */
  },
  setup() {
    return {
      /** зачем этот метод? */
    };
  },
  data: function() {
    return {
      isShow: true,
      length: 0,
      firstname: "",
      lastname: "",
      buttonClassNext: "hide",
      /** пробелы после двоеточия то есть то нет. должны быть. */
      buttonClassPrev: "show",
      date_2: "",
      additional_info_2: "",
      /** не camel case. Почему? */
      slideIndex: 0,
      arr: ["1", "2"]
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      this.slideIndex = 0;
      if (swiper.realIndex == 0) {
        this.buttonClassPrev = "hide";
      }
    },
    onSlideChange(swiper) {
      this.slideIndex = swiper.realIndex;
      if (swiper.realIndex !== 0) {
        this.buttonClassPrev = "show";
      }
      if (swiper.realIndex == 0) {
        if (this.firstname.length !== 0 && this.lastname.length !== 0) {
          this.buttonClassNext = "show";
        }
        this.buttonClassPrev = "hide";
      }
      if (swiper.realIndex == 1) {
        this.buttonClassNext = "hide";
        if (this.date_2.length !== 0 && this.additional_info_2.length !== 0) {
          this.buttonClassNext = "show";
        }
      }
    },
    swiper_prev: function() {
      this.swiper.slidePrev();
    },
    swiper_next: function() {
      this.swiper.slideNext();
    },
    saveFile: async function() {
      const data = JSON.stringify(this.arr);
      try {
        const fd = await (0,app/* useFetch */.ib)("/api/data", { method: "post", body: data }, '$6eCkRuWg48');
        console.log("fd", fd);
      } catch (e) {
        console.error(e, "Failed to save the file !");
      }
    },
    inputChange(event) {
      this.saveFile();
      if (event.target.name == "firstname") {
        this.firstname = event.target.value;
      }
      if (event.target.name == "lastname") {
        this.lastname = event.target.value;
      }
      if (event.target.name == "date_2") {
        this.date_2 = event.target.value;
      }
      if (event.target.name == "additional_info_2") {
        this.additional_info_2 = event.target.value;
      }
      if (this.slideIndex == 0) {
        if (this.firstname.length !== 0 && this.lastname.length !== 0) {
          this.buttonClassNext = "show";
        } else {
          this.buttonClassNext = "hide";
        }
      }
      if (this.slideIndex == 1) {
        if (this.date_2.length !== 0 && this.additional_info_2.length !== 0) {
          this.buttonClassNext = "show";
        } else {
          this.buttonClassNext = "hide";
        }
      }
    }
  }
});
const NModal_exports_ = /*#__PURE__*/(0, exportHelper/* default */.Z)(NModalvue_type_script_lang_js, [['ssrRender',NModalvue_type_template_id_14d0d1e4_ssrRender]]);

/* harmony default export */ const NModal = (NModal_exports_);
// EXTERNAL MODULE: ./assets/main.css
__webpack_require__(906);
// EXTERNAL MODULE: ./assets/modal.css
__webpack_require__(556);









const dist_ruleSet_0_appvue_type_script_setup_true_lang_js_default_ = (0, external_vue_.defineComponent)({
  components: {
    NH1: external_naive_ui_namespaceObject.NH1,
    NText: external_naive_ui_namespaceObject.NText
  }
});
/* harmony default export */ const dist_ruleSet_0_appvue_type_script_setup_true_lang_js = (/* @__PURE__ */Object.assign(dist_ruleSet_0_appvue_type_script_setup_true_lang_js_default_, {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NConfigProvider), (0, external_vue_.mergeProps)({ theme: (0, external_vue_.unref)(external_naive_ui_namespaceObject.darkTheme) }, _attrs), {
        default: (0, external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main id="app"${_scopeId}>`);
            _push2((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NH1), null, {
              default: (0, external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NText), { type: "default" }, {
                    default: (0, external_vue_.withCtx)((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Rainbow Life `);
                      } else {
                        return [
                          (0, external_vue_.createTextVNode)(" Rainbow Life ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (0, external_vue_.createVNode)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NText), { type: "default" }, {
                      default: (0, external_vue_.withCtx)(() => [
                        (0, external_vue_.createTextVNode)(" Rainbow Life ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2((0, server_renderer_.ssrRenderComponent)(NModal, null, null, _parent2, _scopeId));
            _push2((0, server_renderer_.ssrRenderComponent)(InteractiveMap, null, null, _parent2, _scopeId));
            _push2(`</main>`);
            _push2((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NGlobalStyle), null, null, _parent2, _scopeId));
          } else {
            return [
              (0, external_vue_.createVNode)("main", { id: "app" }, [
                (0, external_vue_.createVNode)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NH1), null, {
                  default: (0, external_vue_.withCtx)(() => [
                    (0, external_vue_.createVNode)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NText), { type: "default" }, {
                      default: (0, external_vue_.withCtx)(() => [
                        (0, external_vue_.createTextVNode)(" Rainbow Life ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                (0, external_vue_.createVNode)(NModal),
                (0, external_vue_.createVNode)(InteractiveMap)
              ]),
              (0, external_vue_.createVNode)((0, external_vue_.unref)(external_naive_ui_namespaceObject.NGlobalStyle))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
}));



const app_exports_ = dist_ruleSet_0_appvue_type_script_setup_true_lang_js;

/* harmony default export */ const app_0 = (app_exports_);










/* harmony default export */ const nuxt_rootvue_type_script_setup_true_lang_js = ({
  __name: 'nuxt-root',
  __ssrInlineRender: true,
  setup(__props) {

const ErrorComponent = (0, external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 638).then(__webpack_require__.bind(__webpack_require__, 638)).then(r => r.default || r));
const IslandRenderer =  (0, external_vue_.defineAsyncComponent)(() => __webpack_require__.e(/* import() */ 894).then(__webpack_require__.bind(__webpack_require__, 894)).then(r => r.default || r))
  ;

const nuxtApp = (0, app_nuxt/* useNuxtApp */.e)();
nuxtApp.deferHydration()

// Inject default route (outside of pages) as active route
;(0, external_vue_.provide)('_route', (0, composables_router/* useRoute */.yj)());

// vue:setup hook
nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');

// error handling
const error = (0, composables_error/* useError */.VI)()
;(0, external_vue_.onErrorCaptured)((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError));
  {
    const p = (0, app_nuxt/* callWithNuxt */.zt)(nuxtApp, composables_error/* showError */.x2, [err])
    ;(0, external_vue_.onServerPrefetch)(() => p);
  }
});

// Component islands context
const { islandContext } =  nuxtApp.ssrContext;

return (_ctx, _push, _parent, _attrs) => {
(0, server_renderer_.ssrRenderSuspense)(_push, {
    default: () => {
      if ((0, external_vue_.unref)(error)) {
        _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(ErrorComponent), { error: (0, external_vue_.unref)(error) }, null, _parent));
      } else if ((0, external_vue_.unref)(islandContext)) {
        _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(IslandRenderer), { context: (0, external_vue_.unref)(islandContext) }, null, _parent));
      } else {
        _push((0, server_renderer_.ssrRenderComponent)((0, external_vue_.unref)(app_0), null, null, _parent));
      }
    },
    _: 1
  });
}
}

});



const nuxt_root_exports_ = nuxt_rootvue_type_script_setup_true_lang_js;

/* harmony default export */ const nuxt_root = (nuxt_root_exports_);








if (!globalThis.$fetch) {
  globalThis.$fetch = external_ofetch_namespaceObject.$fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = (0, app_nuxt/* normalizePlugins */.YB)(server);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = (0, external_vue_.createApp)(nuxt_root);
    const nuxt = (0, app_nuxt/* createNuxtApp */.dX)({ vueApp, ssrContext });
    try {
      await (0,app_nuxt/* applyPlugins */.zd)(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
/* harmony default export */ const app_entry = ((ctx) => entry(ctx));

})();

var __webpack_exports__default = __webpack_exports__.Z;

export { __webpack_exports__default as default };
//# sourceMappingURL=server.mjs.map
