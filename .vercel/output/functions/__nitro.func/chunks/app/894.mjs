const id = 894;
const ids = [894];
const modules = {

/***/ 894:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ island_renderer)
});

// NAMESPACE OBJECT: ./.nuxt/components.islands.mjs
var components_islands_namespaceObject = {};
__webpack_require__.r(components_islands_namespaceObject);
__webpack_require__.d(components_islands_namespaceObject, {
  "default": () => (components_islands)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
/* harmony default export */ const components_islands = ({});

// EXTERNAL MODULE: ./node_modules/nuxt/dist/app/composables/error.mjs
var error = __webpack_require__(955);



/* harmony default export */ const island_renderer = ((0, external_vue_.defineComponent)({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  async setup(props) {
    const component = components_islands_namespaceObject[props.context.name];
    if (!component) {
      throw (0, error/* createError */.Tr)({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    if (typeof component === "object") {
      await component.__asyncLoader?.();
    }
    return () => [
      (0, external_vue_.createBlock)(external_vue_.Teleport, { to: "nuxt-island" }, [(0, external_vue_.h)(component || "span", props.context.props)])
    ];
  }
}));


/***/ })

};

export { id, ids, modules };
//# sourceMappingURL=894.mjs.map
