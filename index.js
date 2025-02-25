exports.format = require('bare-format')

exports.formatWithOptions = exports.format.formatWithOptions

exports.inspect = require('bare-inspect')

exports.debuglog = require('bare-debug-log')

exports.inherits = function inherits (ctor, superCtor) {
  if (superCtor) Object.setPrototypeOf(ctor.prototype, superCtor.prototype)
}

exports.deprecate = function deprecate (fn, msg, code) {
  let warned = false // Track if the warning has already been logged

  return function (...args) {
    if (!warned) {
      console.warn(`[${code}]`, 'DeprecationWarning:', msg)
      warned = true
    }
    return fn.apply(this, args)
  }
}
