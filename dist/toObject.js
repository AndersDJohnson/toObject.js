/*
 * Template: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
 */
(function (root, factory) {
  var moduleName = 'toObject';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root[moduleName] = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root[moduleName] = factory();
  }
}(this, function () {
  return function (thing, own) {
    own = typeof own === 'undefined' ? true : own;
    var object = {};
    for (var key in thing) {
      if (! own || thing.hasOwnProperty(key)) {
        object[key] = thing[key];
      }
    }
    return object;
  };
}));
