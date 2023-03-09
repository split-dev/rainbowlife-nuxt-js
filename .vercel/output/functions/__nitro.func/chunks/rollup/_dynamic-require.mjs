const dynamicChunks = {
 ['37.mjs']: () => import('../app/37.mjs'),
 ['638.mjs']: () => import('../app/638.mjs'),
 ['822.mjs']: () => import('../app/822.mjs'),
 ['894.mjs']: () => import('../app/894.mjs')
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
//# sourceMappingURL=_dynamic-require.mjs.map
