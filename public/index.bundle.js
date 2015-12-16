System.registerDynamic("index.js", [], true, function(req, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  global.define = __define;
  return module.exports;
});
