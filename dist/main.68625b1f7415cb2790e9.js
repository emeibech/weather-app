/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/icons/icons.js":
/*!***********************************!*\
  !*** ./src/assets/icons/icons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _01d2x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01d2x.png */ "./src/assets/icons/01d2x.png");
/* harmony import */ var _01n2x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01n2x.png */ "./src/assets/icons/01n2x.png");
/* harmony import */ var _02d2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02d2x.png */ "./src/assets/icons/02d2x.png");
/* harmony import */ var _02n2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./02n2x.png */ "./src/assets/icons/02n2x.png");
/* harmony import */ var _03d2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./03d2x.png */ "./src/assets/icons/03d2x.png");
/* harmony import */ var _03n2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./03n2x.png */ "./src/assets/icons/03n2x.png");
/* harmony import */ var _04d2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./04d2x.png */ "./src/assets/icons/04d2x.png");
/* harmony import */ var _04n2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./04n2x.png */ "./src/assets/icons/04n2x.png");
/* harmony import */ var _09d2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./09d2x.png */ "./src/assets/icons/09d2x.png");
/* harmony import */ var _09n2x_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./09n2x.png */ "./src/assets/icons/09n2x.png");
/* harmony import */ var _10d2x_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./10d2x.png */ "./src/assets/icons/10d2x.png");
/* harmony import */ var _10n2x_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./10n2x.png */ "./src/assets/icons/10n2x.png");
/* harmony import */ var _11d2x_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./11d2x.png */ "./src/assets/icons/11d2x.png");
/* harmony import */ var _11n2x_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./11n2x.png */ "./src/assets/icons/11n2x.png");
/* harmony import */ var _13d2x_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./13d2x.png */ "./src/assets/icons/13d2x.png");
/* harmony import */ var _13n2x_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./13n2x.png */ "./src/assets/icons/13n2x.png");
/* harmony import */ var _50d2x_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./50d2x.png */ "./src/assets/icons/50d2x.png");
/* harmony import */ var _50n2x_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./50n2x.png */ "./src/assets/icons/50n2x.png");


















var icons = {
  '01d': _01d2x_png__WEBPACK_IMPORTED_MODULE_0__,
  '01n': _01n2x_png__WEBPACK_IMPORTED_MODULE_1__,
  '02d': _02d2x_png__WEBPACK_IMPORTED_MODULE_2__,
  '02n': _02n2x_png__WEBPACK_IMPORTED_MODULE_3__,
  '03d': _03d2x_png__WEBPACK_IMPORTED_MODULE_4__,
  '03n': _03n2x_png__WEBPACK_IMPORTED_MODULE_5__,
  '04d': _04d2x_png__WEBPACK_IMPORTED_MODULE_6__,
  '04n': _04n2x_png__WEBPACK_IMPORTED_MODULE_7__,
  '09d': _09d2x_png__WEBPACK_IMPORTED_MODULE_8__,
  '09n': _09n2x_png__WEBPACK_IMPORTED_MODULE_9__,
  '10d': _10d2x_png__WEBPACK_IMPORTED_MODULE_10__,
  '10n': _10n2x_png__WEBPACK_IMPORTED_MODULE_11__,
  '11d': _11d2x_png__WEBPACK_IMPORTED_MODULE_12__,
  '11n': _11n2x_png__WEBPACK_IMPORTED_MODULE_13__,
  '13d': _13d2x_png__WEBPACK_IMPORTED_MODULE_14__,
  '13n': _13n2x_png__WEBPACK_IMPORTED_MODULE_15__,
  '50d': _50d2x_png__WEBPACK_IMPORTED_MODULE_16__,
  '50n': _50n2x_png__WEBPACK_IMPORTED_MODULE_17__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/modules/clientLocation.js":
/*!***************************************!*\
  !*** ./src/modules/clientLocation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* reexport safe */ _fetchData__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "getClientLocation": () => (/* binding */ getClientLocation)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/modules/fetchData.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getClientLocation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__["default"])('https://api.ipgeolocation.io/ipgeo?apiKey=df5e9583bdd34c66a9f3113f5a78174e');
        case 3:
          data = _context.sent;
          return _context.abrupt("return", data.city);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.log(_context.t0));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getClientLocation() {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var fetchData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(url, {
            mode: 'cors'
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.log(_context.t0));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function fetchData(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

/***/ }),

/***/ "./src/modules/processInfo.js":
/*!************************************!*\
  !*** ./src/modules/processInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInfo */ "./src/modules/weatherInfo.js");
/* harmony import */ var _countries_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries.json */ "./src/countries.json");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



// A function for capitalizing first letter of the words in a string.
var capitalize = function capitalize(description) {
  return description.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};
var getPopPercentage = function getPopPercentage(number) {
  return "".concat(Math.round(number * 100), "%");
};
var convertToCelsius = function convertToCelsius(kelvin) {
  return "".concat(Math.round(kelvin - 273.15), "\xB0C");
};
var convertToFahrenheit = function convertToFahrenheit(kelvin) {
  return "".concat(Math.round(1.8 * (kelvin - 273.15) + 32), "\xB0F");
};
var getReadableTimestamp = function getReadableTimestamp(unix) {
  var newDate = new Date(unix * 1000);
  var time = [newDate.getUTCHours(), newDate.getUTCMinutes()];
  if (time[0] > 12) time.splice(0, 1, time[0] - 12);
  if (time[1] < 10) time.splice(1, 1, "0".concat(time[1]));
  return time.join(':');
};
var processInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
    var info;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_weatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(location);
        case 2:
          info = _context.sent;
          document.querySelector('#location').placeholder = 'Search';
          return _context.abrupt("return", {
            metric: {
              description: capitalize(info.description),
              pop: getPopPercentage(info.pop),
              humidity: "".concat(info.humidity, "%"),
              visibility: "".concat(Math.round(info.visibility / 1000), " km"),
              temp: convertToCelsius(info.temp),
              feelsLike: convertToCelsius(info.feelsLike),
              windSpeed: "".concat(Math.round(info.windSpeed * (18 / 5)), " km/h"),
              cloudCover: "".concat(info.cloudCover, "%"),
              sunrise: "".concat(getReadableTimestamp(info.sunrise + info.timezone), " AM"),
              sunset: "".concat(getReadableTimestamp(info.sunset + info.timezone), " PM"),
              country: _countries_json__WEBPACK_IMPORTED_MODULE_1__[info.country],
              city: capitalize(info.city),
              icon: info.icon
            },
            imperial: {
              description: capitalize(info.description),
              pop: getPopPercentage(info.pop),
              humidity: "".concat(info.humidity, "%"),
              visibility: "".concat(Math.round(info.visibility / 1000 * 0.62137119), " mi"),
              temp: convertToFahrenheit(info.temp),
              feelsLike: convertToFahrenheit(info.feelsLike),
              windSpeed: "".concat(Math.round(info.windSpeed * 2.2369), " mph"),
              cloudCover: "".concat(info.cloudCover, "%"),
              sunrise: "".concat(getReadableTimestamp(info.sunrise + info.timezone), " AM"),
              sunset: "".concat(getReadableTimestamp(info.sunset + info.timezone), " PM"),
              country: _countries_json__WEBPACK_IMPORTED_MODULE_1__[info.country],
              city: capitalize(info.city),
              icon: info.icon
            }
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function processInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processInfo);

/***/ }),

/***/ "./src/modules/renderWeatherInfo.js":
/*!******************************************!*\
  !*** ./src/modules/renderWeatherInfo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadingAnimation": () => (/* binding */ loadingAnimation),
/* harmony export */   "renderWeatherInfo": () => (/* binding */ renderWeatherInfo),
/* harmony export */   "setToImperial": () => (/* binding */ setToImperial),
/* harmony export */   "setToMetric": () => (/* binding */ setToMetric)
/* harmony export */ });
/* harmony import */ var _processInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processInfo */ "./src/modules/processInfo.js");
/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/icons */ "./src/assets/icons/icons.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var city = document.querySelector('[data-city]');
var icon = document.querySelector('[data-icon]');
var description = document.querySelector('[data-description]');
var precipitation = document.querySelector('[data-pop]');
var humidity = document.querySelector('[data-humidity]');
var visibility = document.querySelector('[data-visibility]');
var temp = document.querySelector('[data-temp]');
var feelsLike = document.querySelector('[data-feels-like]');
var windSpeed = document.querySelector('[data-wind-speed]');
var cloudCover = document.querySelector('[data-cloud-cover]');
var sunrise = document.querySelector('[data-sunrise]');
var sunset = document.querySelector('[data-sunset]');
var metricSelector = document.querySelector('[data-metric]');
var imperialSelector = document.querySelector('[data-imperial]');
var metricData;
var imperialData;
var loadingAnimation = function loadingAnimation() {
  var main = document.querySelector('main');
  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  var spinner = document.createElement('div');
  spinner.className = 'spinner';
  overlay.appendChild(spinner);
  main.appendChild(overlay);
};
var removeLoadingAnimation = function removeLoadingAnimation() {
  var main = document.querySelector('main');
  main.removeChild(main.lastChild);
};
var setToMetric = function setToMetric() {
  visibility.textContent = metricData.visibility;
  temp.textContent = metricData.temp;
  feelsLike.textContent = " ".concat(metricData.feelsLike);
  windSpeed.textContent = metricData.windSpeed;
};
var setToImperial = function setToImperial() {
  visibility.textContent = imperialData.visibility;
  temp.textContent = imperialData.temp;
  feelsLike.textContent = " ".concat(imperialData.feelsLike);
  windSpeed.textContent = imperialData.windSpeed;
};
var renderWeatherInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
    var _yield$processInfo, metric, imperial;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_processInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(location);
        case 2:
          _yield$processInfo = _context.sent;
          metric = _yield$processInfo.metric;
          imperial = _yield$processInfo.imperial;
          metricData = _objectSpread({}, metric);
          imperialData = _objectSpread({}, imperial);
          city.textContent = "".concat(metric.city, ", ").concat(metric.country);
          icon.src = _assets_icons_icons__WEBPACK_IMPORTED_MODULE_1__["default"][metric.icon];
          icon.setAttribute('alt', metric.description);
          description.textContent = metric.description;
          precipitation.textContent = metric.pop;
          humidity.textContent = metric.humidity;
          cloudCover.textContent = metric.cloudCover;
          sunrise.textContent = metric.sunrise;
          sunset.textContent = metric.sunset;
          if (metricSelector.value === 'true') setToMetric();
          if (imperialSelector.value === 'true') setToImperial();
          removeLoadingAnimation();
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderWeatherInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./src/modules/weatherInfo.js":
/*!************************************!*\
  !*** ./src/modules/weatherInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clientLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientLocation */ "./src/modules/clientLocation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCurrentWeatherInfo = function getCurrentWeatherInfo(location) {
  var appID = 'a864b3057d366f0312e36cebd74c7077';
  var getWeatherData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,_clientLocation__WEBPACK_IMPORTED_MODULE_0__.fetchData)("https://api.openweathermap.org/data/2.5/weather?q=".concat(location, "&APPID=").concat(appID));
          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", console.log(_context.t0));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function getWeatherData() {
      return _ref.apply(this, arguments);
    };
  }();
  var getForecastData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0,_clientLocation__WEBPACK_IMPORTED_MODULE_0__.fetchData)("https://api.openweathermap.org/data/2.5/forecast?q=".concat(location, "&APPID=").concat(appID));
          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", console.log(_context2.t0));
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function getForecastData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getWeatherInfo = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var data, _data, weatherData, forecastData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Promise.all([getWeatherData(), getForecastData()]);
          case 2:
            data = _context3.sent;
            _data = _slicedToArray(data, 2), weatherData = _data[0], forecastData = _data[1];
            return _context3.abrupt("return", {
              description: weatherData.weather[0].description,
              pop: forecastData.list[0].pop,
              humidity: weatherData.main.humidity,
              visibility: weatherData.visibility,
              temp: weatherData.main.temp,
              feelsLike: weatherData.main.feels_like,
              windSpeed: weatherData.wind.speed,
              cloudCover: weatherData.clouds.all,
              sunrise: weatherData.sys.sunrise,
              sunset: weatherData.sys.sunset,
              country: weatherData.sys.country,
              timezone: weatherData.timezone,
              city: weatherData.name,
              icon: weatherData.weather[0].icon
            });
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getWeatherInfo() {
      return _ref3.apply(this, arguments);
    };
  }();
  return getWeatherInfo();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentWeatherInfo);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@csstools/normalize.css/normalize.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@csstools/normalize.css/normalize.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Document\n * ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n */\n\n:where(html) {\n  line-height: 1.15; /* 1 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\n:where(h1) {\n  font-size: 2em;\n  margin-block-end: 0.67em;\n  margin-block-start: 0.67em;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, and Safari.\n */\n\n:where(dl, ol, ul) :where(dl, ol, ul) {\n  margin-block-end: 0;\n  margin-block-start: 0;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Correct the inheritance of border color in Firefox.\n */\n\n:where(hr) {\n  box-sizing: content-box; /* 1 */\n  color: inherit; /* 2 */\n  height: 0; /* 1 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(pre) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Safari.\n */\n\n:where(abbr[title]) {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n:where(b, strong) {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(code, kbd, samp) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\n:where(small) {\n  font-size: 80%;\n}\n\n/* Tabular data\n * ========================================================================== */\n\n/**\n * 1. Correct table border color in Chrome, Edge, and Safari.\n * 2. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\n\n:where(table) {\n  border-color: currentColor; /* 1 */\n  text-indent: 0; /* 2 */\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\n:where(button, input, select) {\n  margin: 0;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\n:where(button) {\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\n:where(button, input:is([type=\"button\" i], [type=\"reset\" i], [type=\"submit\" i])) {\n  -webkit-appearance: button;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\n:where(progress) {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\n:where(select) {\n  text-transform: none;\n}\n\n/**\n * Remove the margin in Firefox and Safari.\n */\n\n:where(textarea) {\n  margin: 0;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n:where(input[type=\"search\" i]) {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n:where(button, input:is([type=\"button\" i], [type=\"color\" i], [type=\"reset\" i], [type=\"submit\" i]))::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:where(button, input:is([type=\"button\" i], [type=\"color\" i], [type=\"reset\" i], [type=\"submit\" i]))::-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:where(:-moz-ui-invalid) {\n  box-shadow: none;\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct styles in Safari.\n */\n\n:where(dialog) {\n  background-color: white;\n  border: solid;\n  color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n:where(dialog:not([open])) {\n  display: none;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\n:where(summary) {\n  display: list-item;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@csstools/normalize.css/normalize.css"],"names":[],"mappings":"AAAA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,cAAc;EACd,wBAAwB;EACxB,0BAA0B;AAC5B;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,cAAc,EAAE,MAAM;EACtB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;;EAEE;;AAEF;EACE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;EACE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;EAEE;;AAEF;EACE,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,wBAAwB;EACxB,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB","sourcesContent":["/* Document\n * ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n */\n\n:where(html) {\n  line-height: 1.15; /* 1 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\n:where(h1) {\n  font-size: 2em;\n  margin-block-end: 0.67em;\n  margin-block-start: 0.67em;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, and Safari.\n */\n\n:where(dl, ol, ul) :where(dl, ol, ul) {\n  margin-block-end: 0;\n  margin-block-start: 0;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Correct the inheritance of border color in Firefox.\n */\n\n:where(hr) {\n  box-sizing: content-box; /* 1 */\n  color: inherit; /* 2 */\n  height: 0; /* 1 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(pre) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Safari.\n */\n\n:where(abbr[title]) {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n:where(b, strong) {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(code, kbd, samp) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\n:where(small) {\n  font-size: 80%;\n}\n\n/* Tabular data\n * ========================================================================== */\n\n/**\n * 1. Correct table border color in Chrome, Edge, and Safari.\n * 2. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\n\n:where(table) {\n  border-color: currentColor; /* 1 */\n  text-indent: 0; /* 2 */\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\n:where(button, input, select) {\n  margin: 0;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\n:where(button) {\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\n:where(button, input:is([type=\"button\" i], [type=\"reset\" i], [type=\"submit\" i])) {\n  -webkit-appearance: button;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\n:where(progress) {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\n:where(select) {\n  text-transform: none;\n}\n\n/**\n * Remove the margin in Firefox and Safari.\n */\n\n:where(textarea) {\n  margin: 0;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n:where(input[type=\"search\" i]) {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n:where(button, input:is([type=\"button\" i], [type=\"color\" i], [type=\"reset\" i], [type=\"submit\" i]))::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:where(button, input:is([type=\"button\" i], [type=\"color\" i], [type=\"reset\" i], [type=\"submit\" i]))::-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:where(:-moz-ui-invalid) {\n  box-shadow: none;\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct styles in Safari.\n */\n\n:where(dialog) {\n  background-color: white;\n  border: solid;\n  color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n:where(dialog:not([open])) {\n  display: none;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\n:where(summary) {\n  display: list-item;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_csstools_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/@csstools/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@csstools/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Comfortaa-Bold.ttf */ "./src/assets/fonts/Comfortaa-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Limelight-Regular.ttf */ "./src/assets/fonts/Limelight-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_csstools_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: comfortaa;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-display: swap;\n}\n\n@font-face {\n  font-family: limelight;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-display: swap;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #ac4ba8;\n}\n\na:visited { color: #833980; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.unit-selector {\n  display: flex;\n  font-family: comfortaa;\n}\n\n.separator {\n  border-radius: 3rem;\n  width: 0.25rem;\n  height: 1.75rem;\n  background-color: rgba(180, 180, 240, 0.75);\n}\n\n.metric,\n.imperial { \n  font-size: 1.5rem;\n  cursor: pointer;\n  border: none;\n  color: aliceblue;\n  background-color: rgb(35, 15, 75);\n  padding-inline: 0.75rem;\n}\n\n.metric { color: aliceblue; }\n.imperial { color: rgba(240, 248, 255, 0.5); }\n\nbody {\n  background-color: rgb(35, 15, 75);\n  color: aliceblue;\n  margin-inline: auto;\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n}\n\nmain {\n  margin-top: 1rem;\n  display: grid;\n  place-items: center;\n  height: clamp(336px, calc(1rem + 70vh), 1080px);\n  font-family: comfortaa;\n  row-gap: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\np,\nspan { cursor: default; }\n\nh1 {\n  font-size: clamp(0.75rem, calc(0.25rem + 2.5vw), 1.5rem);\n  font-family: limelight;\n  margin-block: clamp(0.5rem, calc(0.1rem + 2vh), 2rem);\n  margin-inline: 0.25rem;\n  color: rgb(180, 180, 240);\n  text-align: start;\n}\n\nh2 {\n  font-size: clamp(0.75rem, calc(0.25rem + 4vw), 2rem);\n  font-weight: 500;\n  text-align: center;\n}\n\nh3 { font-weight: 400; }\n\nh4 {\n  font-weight: 300;\n  color: rgba(240, 248, 255, 0.5);\n}\n\np { font-weight: 400; }\n\n/* <-------------------------Weather Information-------------------------> */\n.temperature {\n  display: grid;\n  place-items: center\n}\n\n.temp { font-size: clamp(4rem, calc(4rem + 4vw), 8rem); }\n\n.feels-like {\n  font-size: clamp(0.8rem, calc(0.5rem + 2vw), 1rem);\n  color: rgba(240, 248, 255, 0.5);\n}\n\n.main-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: clamp(318px, calc(6rem + 70vw), 500px);\n}\n\n.important {\n  display: grid;\n  place-items: center;\n}\n\n.percentage {\n  align-self: end;\n  font-size: 1.8rem;\n  width: 80px;\n  text-align: center;\n}\n\n.pop {\n  display: grid;\n  place-items: center;\n  height: 7rem;\n  align-self: end;\n}\n\n.description,\n.chance {\n  align-self: end;\n  font-size: clamp(0.9rem, calc(0.5rem + 2.5vw), 1.5rem);\n  text-align: center;\n}\n\n.more-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  row-gap: clamp(0.5rem, calc(0.25rem + 2.5vh), 2rem);\n  font-size: clamp(0.8rem, calc(0.25rem + 3vw), 1.1rem);\n  width: clamp(318px, calc(6rem + 70vw), 720px);\n}\n\n.more-info > div { text-align: center; }\n\n/* <-------------------------Search bar-------------------------> */\nform { margin-top: 1rem;}\n\n.search {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  outline: none;\n  font-family: comfortaa;\n  font-size: clamp(0.9rem, calc(0.25rem + 2vw), 1.1rem);\n  border: none;\n  border-radius: 3rem;\n  padding-top: clamp(0.5rem, calc(0.25rem + 3vw), 0.6rem);\n  padding-bottom: 0.5rem;\n  padding-inline: 2.5rem;\n  background-color: rgb(20, 10, 40);\n  color: aliceblue;\n  grid-column: 1;\n  grid-row: 1;\n  width: clamp(240px, calc(1rem + 70vw), 360px);\n}\n\n.search-svg {\n  margin-left: 0.75rem;\n  grid-column: 1;\n  grid-row: 1;\n  height: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n  width: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n}\n\n.clear {\n  margin-right: 0.75rem;\n  grid-row: 1;\n  grid-column: 1;\n  width: 1rem;\n  justify-self: end;\n}\n\n/* <-------------------------Loading Animation-------------------------> */\n\n.overlay {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: clamp(336px, calc(1rem + 70vh), 1080px);\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n  background-color: rgb(35, 15, 75);\n}\n\n.spinner {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  border: 6px solid aliceblue;\n  border-top-color: rgb(35, 15, 75);\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,4CAAgD;EAChD,kBAAkB;AACpB;;AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA,YAAY,cAAc,EAAE;;AAE5B;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,2CAA2C;AAC7C;;AAEA;;EAEE,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA,UAAU,gBAAgB,EAAE;AAC5B,YAAY,+BAA+B,EAAE;;AAE7C;EACE,iCAAiC;EACjC,gBAAgB;EAChB,mBAAmB;EACnB,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,+CAA+C;EAC/C,sBAAsB;EACtB,aAAa;AACf;;AAEA;;;;;OAKO,eAAe,EAAE;;AAExB;EACE,wDAAwD;EACxD,sBAAsB;EACtB,qDAAqD;EACrD,sBAAsB;EACtB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,oDAAoD;EACpD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,KAAK,gBAAgB,EAAE;;AAEvB;EACE,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA,IAAI,gBAAgB,EAAE;;AAEtB,4EAA4E;AAC5E;EACE,aAAa;EACb;AACF;;AAEA,QAAQ,8CAA8C,EAAE;;AAExD;EACE,kDAAkD;EAClD,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,sDAAsD;EACtD,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mDAAmD;EACnD,qDAAqD;EACrD,6CAA6C;AAC/C;;AAEA,mBAAmB,kBAAkB,EAAE;;AAEvC,mEAAmE;AACnE,OAAO,gBAAgB,CAAC;;AAExB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qDAAqD;EACrD,YAAY;EACZ,mBAAmB;EACnB,uDAAuD;EACvD,sBAAsB;EACtB,sBAAsB;EACtB,iCAAiC;EACjC,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,6CAA6C;AAC/C;;AAEA;EACE,oBAAoB;EACpB,cAAc;EACd,WAAW;EACX,iDAAiD;EACjD,gDAAgD;AAClD;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,cAAc;EACd,WAAW;EACX,iBAAiB;AACnB;;AAEA,0EAA0E;;AAE1E;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,+CAA+C;EAC/C,6CAA6C;EAC7C,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;EAC3B,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC","sourcesContent":["@font-face {\n  font-family: comfortaa;\n  src: url('./assets/fonts/Comfortaa-Bold.ttf');\n  font-display: swap;\n}\n\n@font-face {\n  font-family: limelight;\n  src: url('./assets/fonts/Limelight-Regular.ttf');\n  font-display: swap;\n};\n\n@import '~@csstools/normalize.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #ac4ba8;\n}\n\na:visited { color: #833980; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.unit-selector {\n  display: flex;\n  font-family: comfortaa;\n}\n\n.separator {\n  border-radius: 3rem;\n  width: 0.25rem;\n  height: 1.75rem;\n  background-color: rgba(180, 180, 240, 0.75);\n}\n\n.metric,\n.imperial { \n  font-size: 1.5rem;\n  cursor: pointer;\n  border: none;\n  color: aliceblue;\n  background-color: rgb(35, 15, 75);\n  padding-inline: 0.75rem;\n}\n\n.metric { color: aliceblue; }\n.imperial { color: rgba(240, 248, 255, 0.5); }\n\nbody {\n  background-color: rgb(35, 15, 75);\n  color: aliceblue;\n  margin-inline: auto;\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n}\n\nmain {\n  margin-top: 1rem;\n  display: grid;\n  place-items: center;\n  height: clamp(336px, calc(1rem + 70vh), 1080px);\n  font-family: comfortaa;\n  row-gap: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\np,\nspan { cursor: default; }\n\nh1 {\n  font-size: clamp(0.75rem, calc(0.25rem + 2.5vw), 1.5rem);\n  font-family: limelight;\n  margin-block: clamp(0.5rem, calc(0.1rem + 2vh), 2rem);\n  margin-inline: 0.25rem;\n  color: rgb(180, 180, 240);\n  text-align: start;\n}\n\nh2 {\n  font-size: clamp(0.75rem, calc(0.25rem + 4vw), 2rem);\n  font-weight: 500;\n  text-align: center;\n}\n\nh3 { font-weight: 400; }\n\nh4 {\n  font-weight: 300;\n  color: rgba(240, 248, 255, 0.5);\n}\n\np { font-weight: 400; }\n\n/* <-------------------------Weather Information-------------------------> */\n.temperature {\n  display: grid;\n  place-items: center\n}\n\n.temp { font-size: clamp(4rem, calc(4rem + 4vw), 8rem); }\n\n.feels-like {\n  font-size: clamp(0.8rem, calc(0.5rem + 2vw), 1rem);\n  color: rgba(240, 248, 255, 0.5);\n}\n\n.main-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: clamp(318px, calc(6rem + 70vw), 500px);\n}\n\n.important {\n  display: grid;\n  place-items: center;\n}\n\n.percentage {\n  align-self: end;\n  font-size: 1.8rem;\n  width: 80px;\n  text-align: center;\n}\n\n.pop {\n  display: grid;\n  place-items: center;\n  height: 7rem;\n  align-self: end;\n}\n\n.description,\n.chance {\n  align-self: end;\n  font-size: clamp(0.9rem, calc(0.5rem + 2.5vw), 1.5rem);\n  text-align: center;\n}\n\n.more-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  row-gap: clamp(0.5rem, calc(0.25rem + 2.5vh), 2rem);\n  font-size: clamp(0.8rem, calc(0.25rem + 3vw), 1.1rem);\n  width: clamp(318px, calc(6rem + 70vw), 720px);\n}\n\n.more-info > div { text-align: center; }\n\n/* <-------------------------Search bar-------------------------> */\nform { margin-top: 1rem;}\n\n.search {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  outline: none;\n  font-family: comfortaa;\n  font-size: clamp(0.9rem, calc(0.25rem + 2vw), 1.1rem);\n  border: none;\n  border-radius: 3rem;\n  padding-top: clamp(0.5rem, calc(0.25rem + 3vw), 0.6rem);\n  padding-bottom: 0.5rem;\n  padding-inline: 2.5rem;\n  background-color: rgb(20, 10, 40);\n  color: aliceblue;\n  grid-column: 1;\n  grid-row: 1;\n  width: clamp(240px, calc(1rem + 70vw), 360px);\n}\n\n.search-svg {\n  margin-left: 0.75rem;\n  grid-column: 1;\n  grid-row: 1;\n  height: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n  width: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n}\n\n.clear {\n  margin-right: 0.75rem;\n  grid-row: 1;\n  grid-column: 1;\n  width: 1rem;\n  justify-self: end;\n}\n\n/* <-------------------------Loading Animation-------------------------> */\n\n.overlay {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: clamp(336px, calc(1rem + 70vh), 1080px);\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n  background-color: rgb(35, 15, 75);\n}\n\n.spinner {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  border: 6px solid aliceblue;\n  border-top-color: rgb(35, 15, 75);\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Comfortaa-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Comfortaa-Bold.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "059cc3e0c5d00a88354f.ttf";

/***/ }),

/***/ "./src/assets/fonts/Limelight-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Limelight-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3776a5b3985bb9da2ea7.ttf";

/***/ }),

/***/ "./src/assets/icons/01d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/01d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40d5ae223a0a8836d5ad.png";

/***/ }),

/***/ "./src/assets/icons/01n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/01n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ac3744e51416f5ea0aa.png";

/***/ }),

/***/ "./src/assets/icons/02d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/02d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbec9413678dff69de5a.png";

/***/ }),

/***/ "./src/assets/icons/02n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/02n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8c8fa0c3451f1e483e8.png";

/***/ }),

/***/ "./src/assets/icons/03d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/03d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13a5e2fc0a69260d005a.png";

/***/ }),

/***/ "./src/assets/icons/03n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/03n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4d4035e32bd7ed8273b.png";

/***/ }),

/***/ "./src/assets/icons/04d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/04d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "839a54ba1974c2387e4a.png";

/***/ }),

/***/ "./src/assets/icons/04n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/04n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0e933164ec96e2c4ef7.png";

/***/ }),

/***/ "./src/assets/icons/09d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/09d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc95f12e2d224e8c8467.png";

/***/ }),

/***/ "./src/assets/icons/09n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/09n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90862723e236ea8144e5.png";

/***/ }),

/***/ "./src/assets/icons/10d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/10d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66ef5ff479216ab50f30.png";

/***/ }),

/***/ "./src/assets/icons/10n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/10n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b7072a81409cf782d26.png";

/***/ }),

/***/ "./src/assets/icons/11d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/11d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f18d0006870b621c152.png";

/***/ }),

/***/ "./src/assets/icons/11n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/11n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba0b2687215e3634b5d2.png";

/***/ }),

/***/ "./src/assets/icons/13d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/13d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "350803b9b9da6c28fcdd.png";

/***/ }),

/***/ "./src/assets/icons/13n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/13n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3233faf890c51208d8e.png";

/***/ }),

/***/ "./src/assets/icons/50d2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/50d2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "047db21d058e729850df.png";

/***/ }),

/***/ "./src/assets/icons/50n2x.png":
/*!************************************!*\
  !*** ./src/assets/icons/50n2x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f7bfb84882a2acc95a7.png";

/***/ }),

/***/ "./src/assets/search-svg/clear-white.svg":
/*!***********************************************!*\
  !*** ./src/assets/search-svg/clear-white.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "604f17ae9e7f7ab96de7.svg";

/***/ }),

/***/ "./src/assets/search-svg/search-default.svg":
/*!**************************************************!*\
  !*** ./src/assets/search-svg/search-default.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1d6b5c7e25eddb02cc7.svg";

/***/ }),

/***/ "./src/assets/search-svg/search-white.svg":
/*!************************************************!*\
  !*** ./src/assets/search-svg/search-white.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66ea5ec3d91c7a187e14.svg";

/***/ }),

/***/ "./src/countries.json":
/*!****************************!*\
  !*** ./src/countries.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _assets_search_svg_search_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/search-svg/search-white.svg */ "./src/assets/search-svg/search-white.svg");
/* harmony import */ var _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/search-svg/search-default.svg */ "./src/assets/search-svg/search-default.svg");
/* harmony import */ var _assets_search_svg_clear_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/search-svg/clear-white.svg */ "./src/assets/search-svg/clear-white.svg");
/* harmony import */ var _modules_clientLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clientLocation */ "./src/modules/clientLocation.js");
/* harmony import */ var _modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/renderWeatherInfo */ "./src/modules/renderWeatherInfo.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var search = document.querySelector('#location');
var searchSVG = document.querySelector('[data-search-svg]');
var clear = document.querySelector('[data-clear]');
var unitSelector = document.querySelector('[unit-selector]');
var imperialSelector = document.querySelector('[data-imperial]');
var metricSelector = document.querySelector('[data-metric]');
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var location;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        searchSVG.src = _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_2__;
        (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_5__.loadingAnimation)();
        _context.next = 4;
        return (0,_modules_clientLocation__WEBPACK_IMPORTED_MODULE_4__.getClientLocation)();
      case 4:
        location = _context.sent;
        (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_5__.renderWeatherInfo)(location);
        search.value = '';
      case 7:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_5__.loadingAnimation)();
  var location = search.value;
  (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_5__.renderWeatherInfo)(location);
  search.placeholder = 'Searching...';
  search.value = '';
  clear.src = '';
  clear.setAttribute('height', '0');
  clear.setAttribute('width', '0');
  search.blur();
});
search.addEventListener('focus', function () {
  searchSVG.src = _assets_search_svg_search_white_svg__WEBPACK_IMPORTED_MODULE_1__;
});
search.addEventListener('blur', function () {
  searchSVG.src = _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_2__;
});
search.addEventListener('input', function () {
  clear.src = _assets_search_svg_clear_white_svg__WEBPACK_IMPORTED_MODULE_3__;
  clear.setAttribute('height', '16px');
  clear.setAttribute('width', '16px');
  clear.addEventListener('click', function () {
    search.value = '';
    clear.src = '';
    clear.setAttribute('height', '0');
    clear.setAttribute('width', '0');
    search.focus();
  });
});
unitSelector.addEventListener('click', function (event) {
  if (event.target.type === 'button') {
    if (event.target.value === 'false') {
      imperialSelector.value = 'true';
      imperialSelector.setAttribute('style', 'color: rgb(240, 248, 255)');
      metricSelector.value = 'false';
      metricSelector.setAttribute('style', 'color: rgba(240, 248, 255, 0.5)');
      (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_5__.setToImperial)();
    }
    if (event.target.value === 'false') {
      imperialSelector.value = 'false';
      imperialSelector.setAttribute('style', 'color: rgba(240, 248, 255, 0.5)');
      metricSelector.value = 'true';
      metricSelector.setAttribute('style', 'color: rgb(240, 248, 255)');
      (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_5__.setToMetric)();
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLHFCQUFxQixNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sc0JBQXNCLHdCQUF3QixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sU0FBUyxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyx1QkFBdUIsTUFBTSxZQUFZLGFBQWEsT0FBTyx1QkFBdUIsYUFBYSxNQUFNLFVBQVUsS0FBSyxNQUFNLHVCQUF1QixNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLHlCQUF5QixhQUFhLHdCQUF3QixNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsc0NBQXNDLDJCQUEyQixrREFBa0QsdUJBQXVCLEdBQUcsZ0JBQWdCLDJCQUEyQixxREFBcUQsdUJBQXVCLElBQUksdUNBQXVDLE9BQU8sY0FBYyxlQUFlLDJCQUEyQixHQUFHLE9BQU8sMEJBQTBCLG1CQUFtQixHQUFHLGdCQUFnQixpQkFBaUIsWUFBWSxrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLEdBQUcsZ0JBQWdCLHdCQUF3QixtQkFBbUIsb0JBQW9CLGdEQUFnRCxHQUFHLDBCQUEwQixzQkFBc0Isb0JBQW9CLGlCQUFpQixxQkFBcUIsc0NBQXNDLDRCQUE0QixHQUFHLGNBQWMsbUJBQW1CLGNBQWMsa0NBQWtDLFVBQVUsc0NBQXNDLHFCQUFxQix3QkFBd0Isa0RBQWtELEdBQUcsVUFBVSxxQkFBcUIsa0JBQWtCLHdCQUF3QixvREFBb0QsMkJBQTJCLGtCQUFrQixHQUFHLG1DQUFtQyxrQkFBa0IsUUFBUSw2REFBNkQsMkJBQTJCLDBEQUEwRCwyQkFBMkIsOEJBQThCLHNCQUFzQixHQUFHLFFBQVEseURBQXlELHFCQUFxQix1QkFBdUIsR0FBRyxTQUFTLG1CQUFtQixRQUFRLHFCQUFxQixvQ0FBb0MsR0FBRyxRQUFRLG1CQUFtQixpR0FBaUcsa0JBQWtCLDBCQUEwQixZQUFZLGlEQUFpRCxpQkFBaUIsdURBQXVELG9DQUFvQyxHQUFHLGdCQUFnQixrQkFBa0IsbUNBQW1DLGtEQUFrRCxHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLEdBQUcsaUJBQWlCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLHVCQUF1QixHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixpQkFBaUIsb0JBQW9CLEdBQUcsNEJBQTRCLG9CQUFvQiwyREFBMkQsdUJBQXVCLEdBQUcsZ0JBQWdCLGtCQUFrQix1Q0FBdUMsd0RBQXdELDBEQUEwRCxrREFBa0QsR0FBRyx1QkFBdUIscUJBQXFCLGlGQUFpRixrQkFBa0IsYUFBYSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQiwwREFBMEQsaUJBQWlCLHdCQUF3Qiw0REFBNEQsMkJBQTJCLDJCQUEyQixzQ0FBc0MscUJBQXFCLG1CQUFtQixnQkFBZ0Isa0RBQWtELEdBQUcsaUJBQWlCLHlCQUF5QixtQkFBbUIsZ0JBQWdCLHNEQUFzRCxxREFBcUQsR0FBRyxZQUFZLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGdCQUFnQixzQkFBc0IsR0FBRyw2RkFBNkYsdUJBQXVCLGtCQUFrQix3QkFBd0Isb0RBQW9ELGtEQUFrRCxzQ0FBc0MsR0FBRyxjQUFjLGdCQUFnQixpQkFBaUIsdUJBQXVCLGdDQUFnQyxzQ0FBc0MsdUNBQXVDLEdBQUcscUJBQXFCLFNBQVMsMEJBQTBCLFdBQVcsNEJBQTRCLEdBQUcsbUJBQW1CO0FBQ3ZvVjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDQ0E7QUFBQTtBQUFBO0FBRHNCO0FBQ3lDO0FBQ0k7QUFDUjtBQUNFO0FBTXhCO0FBRXJDLElBQU11RixNQUFNLEdBQUcxRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDbEQsSUFBTTBELFNBQVMsR0FBRzNELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQzdELElBQU0yRCxLQUFLLEdBQUc1RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDcEQsSUFBTTRELFlBQVksR0FBRzdELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzlELElBQU1rQixnQkFBZ0IsR0FBR25CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQ2xFLElBQU1pQixjQUFjLEdBQUdsQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFFOURELFFBQVEsQ0FBQzhELGdCQUFnQixDQUFDLGtCQUFrQiwwRUFBRTtFQUFBO0VBQUE7SUFBQTtNQUFBO1FBQzVDSCxTQUFTLENBQUN2QixHQUFHLEdBQUdvQixrRUFBYTtRQUM3QmxDLDRFQUFnQixFQUFFO1FBQUM7UUFBQSxPQUNJN0QsMEVBQWlCLEVBQUU7TUFBQTtRQUFwQ3FDLFFBQVE7UUFDZHFDLDZFQUFpQixDQUFDckMsUUFBUSxDQUFDO1FBQzNCNEQsTUFBTSxDQUFDcEIsS0FBSyxHQUFHLEVBQUU7TUFBQztNQUFBO1FBQUE7SUFBQTtFQUFBO0FBQUEsQ0FDbkIsR0FBQztBQUVGdEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM2RCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQ25FQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtFQUN0QjFDLDRFQUFnQixFQUFFO0VBQ2xCLElBQU14QixRQUFRLEdBQUc0RCxNQUFNLENBQUNwQixLQUFLO0VBQzdCSCw2RUFBaUIsQ0FBQ3JDLFFBQVEsQ0FBQztFQUMzQjRELE1BQU0sQ0FBQ3hELFdBQVcsR0FBRyxjQUFjO0VBQ25Dd0QsTUFBTSxDQUFDcEIsS0FBSyxHQUFHLEVBQUU7RUFDakJzQixLQUFLLENBQUN4QixHQUFHLEdBQUcsRUFBRTtFQUNkd0IsS0FBSyxDQUFDdkIsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7RUFDakN1QixLQUFLLENBQUN2QixZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztFQUNoQ3FCLE1BQU0sQ0FBQ08sSUFBSSxFQUFFO0FBQ2YsQ0FBQyxDQUFDO0FBRUZQLE1BQU0sQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDckNILFNBQVMsQ0FBQ3ZCLEdBQUcsR0FBR21CLGdFQUFXO0FBQzdCLENBQUMsQ0FBQztBQUVGRyxNQUFNLENBQUNJLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0VBQ3BDSCxTQUFTLENBQUN2QixHQUFHLEdBQUdvQixrRUFBYTtBQUMvQixDQUFDLENBQUM7QUFFRkUsTUFBTSxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNyQ0YsS0FBSyxDQUFDeEIsR0FBRyxHQUFHcUIsK0RBQVE7RUFDcEJHLEtBQUssQ0FBQ3ZCLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0VBQ3BDdUIsS0FBSyxDQUFDdkIsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7RUFDbkN1QixLQUFLLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3BDSixNQUFNLENBQUNwQixLQUFLLEdBQUcsRUFBRTtJQUNqQnNCLEtBQUssQ0FBQ3hCLEdBQUcsR0FBRyxFQUFFO0lBQ2R3QixLQUFLLENBQUN2QixZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztJQUNqQ3VCLEtBQUssQ0FBQ3ZCLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDO0lBQ2hDcUIsTUFBTSxDQUFDUSxLQUFLLEVBQUU7RUFDaEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUZMLFlBQVksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNoRCxJQUFJQSxLQUFLLENBQUNJLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUNsQyxJQUFJTCxLQUFLLENBQUNJLE1BQU0sQ0FBQzdCLEtBQUssS0FBSyxPQUFPLEVBQUU7TUFDbENuQixnQkFBZ0IsQ0FBQ21CLEtBQUssR0FBRyxNQUFNO01BQy9CbkIsZ0JBQWdCLENBQUNrQixZQUFZLENBQUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDO01BQ25FbkIsY0FBYyxDQUFDb0IsS0FBSyxHQUFHLE9BQU87TUFDOUJwQixjQUFjLENBQUNtQixZQUFZLENBQUMsT0FBTyxFQUFFLGlDQUFpQyxDQUFDO01BQ3ZFSCx5RUFBYSxFQUFFO0lBQ2pCO0lBRUEsSUFBSTZCLEtBQUssQ0FBQ0ksTUFBTSxDQUFDN0IsS0FBSyxLQUFLLE9BQU8sRUFBRTtNQUNsQ25CLGdCQUFnQixDQUFDbUIsS0FBSyxHQUFHLE9BQU87TUFDaENuQixnQkFBZ0IsQ0FBQ2tCLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLENBQUM7TUFDekVuQixjQUFjLENBQUNvQixLQUFLLEdBQUcsTUFBTTtNQUM3QnBCLGNBQWMsQ0FBQ21CLFlBQVksQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLENBQUM7TUFDakVMLHVFQUFXLEVBQUU7SUFDZjtFQUNGO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qLy4vc3JjL2Fzc2V0cy9pY29ucy9pY29ucy5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vc3JjL21vZHVsZXMvY2xpZW50TG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9tb2R1bGVzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vc3JjL21vZHVsZXMvcHJvY2Vzc0luZm8uanMiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9tb2R1bGVzL3JlbmRlcldlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL3Byb2ovLi9zcmMvbW9kdWxlcy93ZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL0Bjc3N0b29scy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xlYXJTa3lEYXkgZnJvbSAnLi8wMWQyeC5wbmcnO1xuaW1wb3J0IGNsZWFyU2t5TmlnaHQgZnJvbSAnLi8wMW4yeC5wbmcnO1xuaW1wb3J0IGZld0Nsb3Vkc0RheSBmcm9tICcuLzAyZDJ4LnBuZyc7XG5pbXBvcnQgZmV3Q2xvdWRzTmlnaHQgZnJvbSAnLi8wMm4yeC5wbmcnO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc0RheSBmcm9tICcuLzAzZDJ4LnBuZyc7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzTmlnaHQgZnJvbSAnLi8wM24yeC5wbmcnO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc0RheSBmcm9tICcuLzA0ZDJ4LnBuZyc7XG5pbXBvcnQgYnJva2VuQ2xvdWRzTmlnaHQgZnJvbSAnLi8wNG4yeC5wbmcnO1xuaW1wb3J0IHNob3dlclJhaW5EYXkgZnJvbSAnLi8wOWQyeC5wbmcnO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tICcuLzA5bjJ4LnBuZyc7XG5pbXBvcnQgcmFpbkRheSBmcm9tICcuLzEwZDJ4LnBuZyc7XG5pbXBvcnQgcmFpbk5pZ2h0IGZyb20gJy4vMTBuMngucG5nJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1EYXkgZnJvbSAnLi8xMWQyeC5wbmcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybU5pZ2h0IGZyb20gJy4vMTFuMngucG5nJztcbmltcG9ydCBzbm93RGF5IGZyb20gJy4vMTNkMngucG5nJztcbmltcG9ydCBzbm93TmlnaHQgZnJvbSAnLi8xM24yeC5wbmcnO1xuaW1wb3J0IG1pc3REYXkgZnJvbSAnLi81MGQyeC5wbmcnO1xuaW1wb3J0IG1pc3ROaWdodCBmcm9tICcuLzUwbjJ4LnBuZyc7XG5cbmNvbnN0IGljb25zID0ge1xuICAnMDFkJzogY2xlYXJTa3lEYXksXG4gICcwMW4nOiBjbGVhclNreU5pZ2h0LFxuICAnMDJkJzogZmV3Q2xvdWRzRGF5LFxuICAnMDJuJzogZmV3Q2xvdWRzTmlnaHQsXG4gICcwM2QnOiBzY2F0dGVyZWRDbG91ZHNEYXksXG4gICcwM24nOiBzY2F0dGVyZWRDbG91ZHNOaWdodCxcbiAgJzA0ZCc6IGJyb2tlbkNsb3Vkc0RheSxcbiAgJzA0bic6IGJyb2tlbkNsb3Vkc05pZ2h0LFxuICAnMDlkJzogc2hvd2VyUmFpbkRheSxcbiAgJzA5bic6IHNob3dlclJhaW5OaWdodCxcbiAgJzEwZCc6IHJhaW5EYXksXG4gICcxMG4nOiByYWluTmlnaHQsXG4gICcxMWQnOiB0aHVuZGVyc3Rvcm1EYXksXG4gICcxMW4nOiB0aHVuZGVyc3Rvcm1OaWdodCxcbiAgJzEzZCc6IHNub3dEYXksXG4gICcxM24nOiBzbm93TmlnaHQsXG4gICc1MGQnOiBtaXN0RGF5LFxuICAnNTBuJzogbWlzdE5pZ2h0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaWNvbnM7XG4iLCJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vZmV0Y2hEYXRhJztcblxuY29uc3QgZ2V0Q2xpZW50TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YSgnaHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby9pcGdlbz9hcGlLZXk9ZGY1ZTk1ODNiZGQzNGM2NmE5ZjMxMTNmNWE3ODE3NGUnKTtcbiAgICByZXR1cm4gZGF0YS5jaXR5O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZmV0Y2hEYXRhLCBnZXRDbGllbnRMb2NhdGlvbiB9O1xuIiwiY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hEYXRhO1xuIiwiaW1wb3J0IGdldEN1cnJlbnRXZWF0aGVySW5mbyBmcm9tICcuL3dlYXRoZXJJbmZvJztcbmltcG9ydCBjb3VudHJpZXMgZnJvbSAnLi4vY291bnRyaWVzLmpzb24nO1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBjYXBpdGFsaXppbmcgZmlyc3QgbGV0dGVyIG9mIHRoZSB3b3JkcyBpbiBhIHN0cmluZy5cbmNvbnN0IGNhcGl0YWxpemUgPSAoZGVzY3JpcHRpb24pID0+IGRlc2NyaXB0aW9uLnNwbGl0KCcgJylcbiAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oJyAnKTtcblxuY29uc3QgZ2V0UG9wUGVyY2VudGFnZSA9IChudW1iZXIpID0+IGAke01hdGgucm91bmQobnVtYmVyICogMTAwKX0lYDtcblxuY29uc3QgY29udmVydFRvQ2Vsc2l1cyA9IChrZWx2aW4pID0+IGAke01hdGgucm91bmQoa2VsdmluIC0gMjczLjE1KX3CsENgO1xuY29uc3QgY29udmVydFRvRmFocmVuaGVpdCA9IChrZWx2aW4pID0+IGAke01hdGgucm91bmQoMS44ICogKGtlbHZpbiAtIDI3My4xNSkgKyAzMil9wrBGYDtcblxuY29uc3QgZ2V0UmVhZGFibGVUaW1lc3RhbXAgPSAodW5peCkgPT4ge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodW5peCAqIDEwMDApO1xuICBjb25zdCB0aW1lID0gW25ld0RhdGUuZ2V0VVRDSG91cnMoKSwgbmV3RGF0ZS5nZXRVVENNaW51dGVzKCldO1xuICBpZiAodGltZVswXSA+IDEyKSB0aW1lLnNwbGljZSgwLCAxLCB0aW1lWzBdIC0gMTIpO1xuICBpZiAodGltZVsxXSA8IDEwKSB0aW1lLnNwbGljZSgxLCAxLCBgMCR7dGltZVsxXX1gKTtcbiAgcmV0dXJuIHRpbWUuam9pbignOicpO1xufTtcblxuY29uc3QgcHJvY2Vzc0luZm8gPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgaW5mbyA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVySW5mbyhsb2NhdGlvbik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJykucGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcblxuICByZXR1cm4ge1xuICAgIG1ldHJpYzoge1xuICAgICAgZGVzY3JpcHRpb246IGNhcGl0YWxpemUoaW5mby5kZXNjcmlwdGlvbiksXG4gICAgICBwb3A6IGdldFBvcFBlcmNlbnRhZ2UoaW5mby5wb3ApLFxuICAgICAgaHVtaWRpdHk6IGAke2luZm8uaHVtaWRpdHl9JWAsXG4gICAgICB2aXNpYmlsaXR5OiBgJHtNYXRoLnJvdW5kKGluZm8udmlzaWJpbGl0eSAvIDEwMDApfSBrbWAsXG4gICAgICB0ZW1wOiBjb252ZXJ0VG9DZWxzaXVzKGluZm8udGVtcCksXG4gICAgICBmZWVsc0xpa2U6IGNvbnZlcnRUb0NlbHNpdXMoaW5mby5mZWVsc0xpa2UpLFxuICAgICAgd2luZFNwZWVkOiBgJHtNYXRoLnJvdW5kKGluZm8ud2luZFNwZWVkICogKDE4IC8gNSkpfSBrbS9oYCxcbiAgICAgIGNsb3VkQ292ZXI6IGAke2luZm8uY2xvdWRDb3Zlcn0lYCxcbiAgICAgIHN1bnJpc2U6IGAke2dldFJlYWRhYmxlVGltZXN0YW1wKGluZm8uc3VucmlzZSArIGluZm8udGltZXpvbmUpfSBBTWAsXG4gICAgICBzdW5zZXQ6IGAke2dldFJlYWRhYmxlVGltZXN0YW1wKGluZm8uc3Vuc2V0ICsgaW5mby50aW1lem9uZSl9IFBNYCxcbiAgICAgIGNvdW50cnk6IGNvdW50cmllc1tpbmZvLmNvdW50cnldLFxuICAgICAgY2l0eTogY2FwaXRhbGl6ZShpbmZvLmNpdHkpLFxuICAgICAgaWNvbjogaW5mby5pY29uLFxuICAgIH0sXG4gICAgaW1wZXJpYWw6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBjYXBpdGFsaXplKGluZm8uZGVzY3JpcHRpb24pLFxuICAgICAgcG9wOiBnZXRQb3BQZXJjZW50YWdlKGluZm8ucG9wKSxcbiAgICAgIGh1bWlkaXR5OiBgJHtpbmZvLmh1bWlkaXR5fSVgLFxuICAgICAgdmlzaWJpbGl0eTogYCR7TWF0aC5yb3VuZCgoaW5mby52aXNpYmlsaXR5IC8gMTAwMCkgKiAwLjYyMTM3MTE5KX0gbWlgLFxuICAgICAgdGVtcDogY29udmVydFRvRmFocmVuaGVpdChpbmZvLnRlbXApLFxuICAgICAgZmVlbHNMaWtlOiBjb252ZXJ0VG9GYWhyZW5oZWl0KGluZm8uZmVlbHNMaWtlKSxcbiAgICAgIHdpbmRTcGVlZDogYCR7TWF0aC5yb3VuZChpbmZvLndpbmRTcGVlZCAqIDIuMjM2OSl9IG1waGAsXG4gICAgICBjbG91ZENvdmVyOiBgJHtpbmZvLmNsb3VkQ292ZXJ9JWAsXG4gICAgICBzdW5yaXNlOiBgJHtnZXRSZWFkYWJsZVRpbWVzdGFtcChpbmZvLnN1bnJpc2UgKyBpbmZvLnRpbWV6b25lKX0gQU1gLFxuICAgICAgc3Vuc2V0OiBgJHtnZXRSZWFkYWJsZVRpbWVzdGFtcChpbmZvLnN1bnNldCArIGluZm8udGltZXpvbmUpfSBQTWAsXG4gICAgICBjb3VudHJ5OiBjb3VudHJpZXNbaW5mby5jb3VudHJ5XSxcbiAgICAgIGNpdHk6IGNhcGl0YWxpemUoaW5mby5jaXR5KSxcbiAgICAgIGljb246IGluZm8uaWNvbixcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc0luZm87XG4iLCJpbXBvcnQgcHJvY2Vzc0luZm8gZnJvbSAnLi9wcm9jZXNzSW5mbyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2ljb25zJztcblxuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNpdHldJyk7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaWNvbl0nKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGVzY3JpcHRpb25dJyk7XG5jb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wXScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1odW1pZGl0eV0nKTtcbmNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12aXNpYmlsaXR5XScpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBdJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mZWVscy1saWtlXScpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2luZC1zcGVlZF0nKTtcbmNvbnN0IGNsb3VkQ292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG91ZC1jb3Zlcl0nKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdW5yaXNlXScpO1xuY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3Vuc2V0XScpO1xuY29uc3QgbWV0cmljU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZXRyaWNdJyk7XG5jb25zdCBpbXBlcmlhbFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaW1wZXJpYWxdJyk7XG5sZXQgbWV0cmljRGF0YTtcbmxldCBpbXBlcmlhbERhdGE7XG5cbmNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XG4gIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3Bpbm5lci5jbGFzc05hbWUgPSAnc3Bpbm5lcic7XG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQoc3Bpbm5lcik7XG4gIG1haW4uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59O1xuXG5jb25zdCByZW1vdmVMb2FkaW5nQW5pbWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IHNldFRvTWV0cmljID0gKCkgPT4ge1xuICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gbWV0cmljRGF0YS52aXNpYmlsaXR5O1xuICB0ZW1wLnRleHRDb250ZW50ID0gbWV0cmljRGF0YS50ZW1wO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgICR7bWV0cmljRGF0YS5mZWVsc0xpa2V9YDtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gbWV0cmljRGF0YS53aW5kU3BlZWQ7XG59O1xuXG5jb25zdCBzZXRUb0ltcGVyaWFsID0gKCkgPT4ge1xuICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gaW1wZXJpYWxEYXRhLnZpc2liaWxpdHk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBpbXBlcmlhbERhdGEudGVtcDtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCAke2ltcGVyaWFsRGF0YS5mZWVsc0xpa2V9YDtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gaW1wZXJpYWxEYXRhLndpbmRTcGVlZDtcbn07XG5cbmNvbnN0IHJlbmRlcldlYXRoZXJJbmZvID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHsgbWV0cmljLCBpbXBlcmlhbCB9ID0gYXdhaXQgcHJvY2Vzc0luZm8obG9jYXRpb24pO1xuXG4gIG1ldHJpY0RhdGEgPSB7IC4uLm1ldHJpYyB9O1xuICBpbXBlcmlhbERhdGEgPSB7IC4uLmltcGVyaWFsIH07XG5cbiAgY2l0eS50ZXh0Q29udGVudCA9IGAke21ldHJpYy5jaXR5fSwgJHttZXRyaWMuY291bnRyeX1gO1xuICBpY29uLnNyYyA9IGljb25zW21ldHJpYy5pY29uXTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG1ldHJpYy5kZXNjcmlwdGlvbik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWV0cmljLmRlc2NyaXB0aW9uO1xuICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gbWV0cmljLnBvcDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBtZXRyaWMuaHVtaWRpdHk7XG4gIGNsb3VkQ292ZXIudGV4dENvbnRlbnQgPSBtZXRyaWMuY2xvdWRDb3ZlcjtcbiAgc3VucmlzZS50ZXh0Q29udGVudCA9IG1ldHJpYy5zdW5yaXNlO1xuICBzdW5zZXQudGV4dENvbnRlbnQgPSBtZXRyaWMuc3Vuc2V0O1xuXG4gIGlmIChtZXRyaWNTZWxlY3Rvci52YWx1ZSA9PT0gJ3RydWUnKSBzZXRUb01ldHJpYygpO1xuICBpZiAoaW1wZXJpYWxTZWxlY3Rvci52YWx1ZSA9PT0gJ3RydWUnKSBzZXRUb0ltcGVyaWFsKCk7XG5cbiAgcmVtb3ZlTG9hZGluZ0FuaW1hdGlvbigpO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyV2VhdGhlckluZm8sXG4gIGxvYWRpbmdBbmltYXRpb24sXG4gIHNldFRvTWV0cmljLFxuICBzZXRUb0ltcGVyaWFsLFxufTtcbiIsImltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vY2xpZW50TG9jYXRpb24nO1xuXG5jb25zdCBnZXRDdXJyZW50V2VhdGhlckluZm8gPSAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgYXBwSUQgPSAnYTg2NGIzMDU3ZDM2NmYwMzEyZTM2Y2ViZDc0YzcwNzcnO1xuXG4gIGNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7YXBwSUR9YCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRGb3JlY2FzdERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bG9jYXRpb259JkFQUElEPSR7YXBwSUR9YCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRXZWF0aGVySW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoW2dldFdlYXRoZXJEYXRhKCksIGdldEZvcmVjYXN0RGF0YSgpXSk7XG5cbiAgICBjb25zdCBbd2VhdGhlckRhdGEsIGZvcmVjYXN0RGF0YV0gPSBkYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc2NyaXB0aW9uOiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgcG9wOiBmb3JlY2FzdERhdGEubGlzdFswXS5wb3AsXG4gICAgICBodW1pZGl0eTogd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHZpc2liaWxpdHk6IHdlYXRoZXJEYXRhLnZpc2liaWxpdHksXG4gICAgICB0ZW1wOiB3ZWF0aGVyRGF0YS5tYWluLnRlbXAsXG4gICAgICBmZWVsc0xpa2U6IHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgIHdpbmRTcGVlZDogd2VhdGhlckRhdGEud2luZC5zcGVlZCxcbiAgICAgIGNsb3VkQ292ZXI6IHdlYXRoZXJEYXRhLmNsb3Vkcy5hbGwsXG4gICAgICBzdW5yaXNlOiB3ZWF0aGVyRGF0YS5zeXMuc3VucmlzZSxcbiAgICAgIHN1bnNldDogd2VhdGhlckRhdGEuc3lzLnN1bnNldCxcbiAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgdGltZXpvbmU6IHdlYXRoZXJEYXRhLnRpbWV6b25lLFxuICAgICAgY2l0eTogd2VhdGhlckRhdGEubmFtZSxcbiAgICAgIGljb246IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbixcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBnZXRXZWF0aGVySW5mbygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudFdlYXRoZXJJbmZvO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRG9jdW1lbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoaHRtbCkge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBFZGdlLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjY3ZW07XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNjdlbTtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gbmVzdGVkIGxpc3RzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGwsIG9sLCB1bCkgOndoZXJlKGRsLCBvbCwgdWwpIHtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGhyKSB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUocHJlKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYWJiclt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShiLCBzdHJvbmcpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShjb2RlLCBrYmQsIHNhbXApIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHNtYWxsKSB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogVGFidWxhciBkYXRhXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKHRhYmxlKSB7XFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMSAqL1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogRm9ybXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIGNvbnRyb2xzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uKSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQ6aXMoW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUocHJvZ3Jlc3MpIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShzZWxlY3QpIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKHRleHRhcmVhKSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgdGV4dCBzdHlsZSBvZiBwbGFjZWhvbGRlcnMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIHVwbG9hZCBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIG9mIGZvY3VzIG91dGxpbmVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQ6aXMoW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJjb2xvclxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSk6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgb3V0bGluZSBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dDppcyhbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pKTo6LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGFkZGl0aW9uYWwgOmludmFsaWQgc3R5bGVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKDotbW96LXVpLWludmFsaWQpIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzdHlsZXMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkaWFsb2cpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuOndoZXJlKGRpYWxvZzpub3QoW29wZW5dKSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHN1bW1hcnkpIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bjc3N0b29scy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERvY3VtZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGh0bWwpIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRWRnZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoaDEpIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC42N2VtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjY3ZW07XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIG5lc3RlZCBsaXN0cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRsLCBvbCwgdWwpIDp3aGVyZShkbCwgb2wsIHVsKSB7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShocikge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHByZSkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGFiYnJbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYiwgc3Ryb25nKSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoY29kZSwga2JkLCBzYW1wKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzbWFsbCkge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIFRhYnVsYXIgZGF0YVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0YWJsZSkge1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDEgKi9cXG4gIHRleHQtaW5kZW50OiAwOyAvKiAyICovXFxufVxcblxcbi8qIEZvcm1zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBjb250cm9scyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbikge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0OmlzKFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkpIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHByb2dyZXNzKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoc2VsZWN0KSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0ZXh0YXJlYSkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCIgaV0pIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHRleHQgc3R5bGUgb2YgcGxhY2Vob2xkZXJzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAwLjU0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSB1cGxvYWQgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBvZiBmb2N1cyBvdXRsaW5lcyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0OmlzKFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwiY29sb3JcXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkpOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIG91dGxpbmUgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQ6aXMoW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJjb2xvclxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSk6Oi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIDppbnZhbGlkIHN0eWxlcyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZSg6LW1vei11aS1pbnZhbGlkKSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3R5bGVzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGlhbG9nKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbjp3aGVyZShkaWFsb2c6bm90KFtvcGVuXSkpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzdW1tYXJ5KSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL0Bjc3N0b29scy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQ29tZm9ydGFhLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvTGltZWxpZ2h0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbGltZWxpZ2h0O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjYWM0YmE4O1xcbn1cXG5cXG5hOnZpc2l0ZWQgeyBjb2xvcjogIzgzMzk4MDsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnVuaXQtc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIHdpZHRoOiAwLjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDE4MCwgMjQwLCAwLjc1KTtcXG59XFxuXFxuLm1ldHJpYyxcXG4uaW1wZXJpYWwgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTUsIDc1KTtcXG4gIHBhZGRpbmctaW5saW5lOiAwLjc1cmVtO1xcbn1cXG5cXG4ubWV0cmljIHsgY29sb3I6IGFsaWNlYmx1ZTsgfVxcbi5pbXBlcmlhbCB7IGNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNSk7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTUsIDc1KTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgd2lkdGg6IGNsYW1wKDMxOHB4LCBjYWxjKDRyZW0gKyA4MHZ3KSwgOTYwcHgpO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogY2xhbXAoMzM2cHgsIGNhbGMoMXJlbSArIDcwdmgpLCAxMDgwcHgpO1xcbiAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYTtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuc3BhbiB7IGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC43NXJlbSwgY2FsYygwLjI1cmVtICsgMi41dncpLCAxLjVyZW0pO1xcbiAgZm9udC1mYW1pbHk6IGxpbWVsaWdodDtcXG4gIG1hcmdpbi1ibG9jazogY2xhbXAoMC41cmVtLCBjYWxjKDAuMXJlbSArIDJ2aCksIDJyZW0pO1xcbiAgbWFyZ2luLWlubGluZTogMC4yNXJlbTtcXG4gIGNvbG9yOiByZ2IoMTgwLCAxODAsIDI0MCk7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjc1cmVtLCBjYWxjKDAuMjVyZW0gKyA0dncpLCAycmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgzIHsgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbmg0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjUpO1xcbn1cXG5cXG5wIHsgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbi8qIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tV2VhdGhlciBJbmZvcm1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXFxuLnRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyXFxufVxcblxcbi50ZW1wIHsgZm9udC1zaXplOiBjbGFtcCg0cmVtLCBjYWxjKDRyZW0gKyA0dncpLCA4cmVtKTsgfVxcblxcbi5mZWVscy1saWtlIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCBjYWxjKDAuNXJlbSArIDJ2dyksIDFyZW0pO1xcbiAgY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41KTtcXG59XFxuXFxuLm1haW4taW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgd2lkdGg6IGNsYW1wKDMxOHB4LCBjYWxjKDZyZW0gKyA3MHZ3KSwgNTAwcHgpO1xcbn1cXG5cXG4uaW1wb3J0YW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGVyY2VudGFnZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLmNoYW5jZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgY2FsYygwLjVyZW0gKyAyLjV2dyksIDEuNXJlbSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb3JlLWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICByb3ctZ2FwOiBjbGFtcCgwLjVyZW0sIGNhbGMoMC4yNXJlbSArIDIuNXZoKSwgMnJlbSk7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgY2FsYygwLjI1cmVtICsgM3Z3KSwgMS4xcmVtKTtcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg2cmVtICsgNzB2dyksIDcyMHB4KTtcXG59XFxuXFxuLm1vcmUtaW5mbyA+IGRpdiB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2VhcmNoIGJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXFxuZm9ybSB7IG1hcmdpbi10b3A6IDFyZW07fVxcblxcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgY2FsYygwLjI1cmVtICsgMnZ3KSwgMS4xcmVtKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBwYWRkaW5nLXRvcDogY2xhbXAoMC41cmVtLCBjYWxjKDAuMjVyZW0gKyAzdncpLCAwLjZyZW0pO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDEwLCA0MCk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIHdpZHRoOiBjbGFtcCgyNDBweCwgY2FsYygxcmVtICsgNzB2dyksIDM2MHB4KTtcXG59XFxuXFxuLnNlYXJjaC1zdmcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgaGVpZ2h0OiBjbGFtcCgxcmVtLCBjYWxjKDAuMjVyZW0gKyAxMHZ3KSwgMS4zcmVtKTtcXG4gIHdpZHRoOiBjbGFtcCgxcmVtLCBjYWxjKDAuMjVyZW0gKyAxMHZ3KSwgMS4zcmVtKTtcXG59XFxuXFxuLmNsZWFyIHtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICB3aWR0aDogMXJlbTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxvYWRpbmcgQW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogY2xhbXAoMzM2cHgsIGNhbGMoMXJlbSArIDcwdmgpLCAxMDgwcHgpO1xcbiAgd2lkdGg6IGNsYW1wKDMxOHB4LCBjYWxjKDRyZW0gKyA4MHZ3KSwgOTYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNSwgNzUpO1xcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICB3aWR0aDogNnJlbTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogNnB4IHNvbGlkIGFsaWNlYmx1ZTtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYigzNSwgMTUsIDc1KTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBNkM7RUFDN0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFnRDtFQUNoRCxrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLFlBQVksY0FBYyxFQUFFOztBQUU1QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLDJDQUEyQztBQUM3Qzs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQUN6Qjs7QUFFQSxVQUFVLGdCQUFnQixFQUFFO0FBQzVCLFlBQVksK0JBQStCLEVBQUU7O0FBRTdDO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7Ozs7O09BS08sZUFBZSxFQUFFOztBQUV4QjtFQUNFLHdEQUF3RDtFQUN4RCxzQkFBc0I7RUFDdEIscURBQXFEO0VBQ3JELHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEsS0FBSyxnQkFBZ0IsRUFBRTs7QUFFdkI7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUVBLElBQUksZ0JBQWdCLEVBQUU7O0FBRXRCLDRFQUE0RTtBQUM1RTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBLFFBQVEsOENBQThDLEVBQUU7O0FBRXhEO0VBQ0Usa0RBQWtEO0VBQ2xELCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHNEQUFzRDtFQUN0RCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1EQUFtRDtFQUNuRCxxREFBcUQ7RUFDckQsNkNBQTZDO0FBQy9DOztBQUVBLG1CQUFtQixrQkFBa0IsRUFBRTs7QUFFdkMsbUVBQW1FO0FBQ25FLE9BQU8sZ0JBQWdCLENBQUM7O0FBRXhCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVEQUF1RDtFQUN2RCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQSwwRUFBMEU7O0FBRTFFO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLDZDQUE2QztFQUM3QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvQ29tZm9ydGFhLUJvbGQudHRmJyk7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGxpbWVsaWdodDtcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9MaW1lbGlnaHQtUmVndWxhci50dGYnKTtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59O1xcblxcbkBpbXBvcnQgJ35AY3NzdG9vbHMvbm9ybWFsaXplLmNzcyc7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2FjNGJhODtcXG59XFxuXFxuYTp2aXNpdGVkIHsgY29sb3I6ICM4MzM5ODA7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51bml0LXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogY29tZm9ydGFhO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICB3aWR0aDogMC4yNXJlbTtcXG4gIGhlaWdodDogMS43NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDI0MCwgMC43NSk7XFxufVxcblxcbi5tZXRyaWMsXFxuLmltcGVyaWFsIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDE1LCA3NSk7XFxuICBwYWRkaW5nLWlubGluZTogMC43NXJlbTtcXG59XFxuXFxuLm1ldHJpYyB7IGNvbG9yOiBhbGljZWJsdWU7IH1cXG4uaW1wZXJpYWwgeyBjb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjUpOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDE1LCA3NSk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg0cmVtICsgODB2dyksIDk2MHB4KTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGNsYW1wKDMzNnB4LCBjYWxjKDFyZW0gKyA3MHZoKSwgMTA4MHB4KTtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbnNwYW4geyBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC4yNXJlbSArIDIuNXZ3KSwgMS41cmVtKTtcXG4gIGZvbnQtZmFtaWx5OiBsaW1lbGlnaHQ7XFxuICBtYXJnaW4tYmxvY2s6IGNsYW1wKDAuNXJlbSwgY2FsYygwLjFyZW0gKyAydmgpLCAycmVtKTtcXG4gIG1hcmdpbi1pbmxpbmU6IDAuMjVyZW07XFxuICBjb2xvcjogcmdiKDE4MCwgMTgwLCAyNDApO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC43NXJlbSwgY2FsYygwLjI1cmVtICsgNHZ3KSwgMnJlbSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMyB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5oNCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41KTtcXG59XFxuXFxucCB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVdlYXRoZXIgSW5mb3JtYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbi50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlclxcbn1cXG5cXG4udGVtcCB7IGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgY2FsYyg0cmVtICsgNHZ3KSwgOHJlbSk7IH1cXG5cXG4uZmVlbHMtbGlrZSB7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgY2FsYygwLjVyZW0gKyAydncpLCAxcmVtKTtcXG4gIGNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNSk7XFxufVxcblxcbi5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg2cmVtICsgNzB2dyksIDUwMHB4KTtcXG59XFxuXFxuLmltcG9ydGFudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBlcmNlbnRhZ2Uge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICB3aWR0aDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3JlbTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLFxcbi5jaGFuY2Uge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIGNhbGMoMC41cmVtICsgMi41dncpLCAxLjVyZW0pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9yZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgcm93LWdhcDogY2xhbXAoMC41cmVtLCBjYWxjKDAuMjVyZW0gKyAyLjV2aCksIDJyZW0pO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIGNhbGMoMC4yNXJlbSArIDN2dyksIDEuMXJlbSk7XFxuICB3aWR0aDogY2xhbXAoMzE4cHgsIGNhbGMoNnJlbSArIDcwdncpLCA3MjBweCk7XFxufVxcblxcbi5tb3JlLWluZm8gPiBkaXYgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNlYXJjaCBiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbmZvcm0geyBtYXJnaW4tdG9wOiAxcmVtO31cXG5cXG4uc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogY29tZm9ydGFhO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIGNhbGMoMC4yNXJlbSArIDJ2dyksIDEuMXJlbSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgcGFkZGluZy10b3A6IGNsYW1wKDAuNXJlbSwgY2FsYygwLjI1cmVtICsgM3Z3KSwgMC42cmVtKTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLWlubGluZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAxMCwgNDApO1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICB3aWR0aDogY2xhbXAoMjQwcHgsIGNhbGMoMXJlbSArIDcwdncpLCAzNjBweCk7XFxufVxcblxcbi5zZWFyY2gtc3ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIGhlaWdodDogY2xhbXAoMXJlbSwgY2FsYygwLjI1cmVtICsgMTB2dyksIDEuM3JlbSk7XFxuICB3aWR0aDogY2xhbXAoMXJlbSwgY2FsYygwLjI1cmVtICsgMTB2dyksIDEuM3JlbSk7XFxufVxcblxcbi5jbGVhciB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgd2lkdGg6IDFyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLyogPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Mb2FkaW5nIEFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGNsYW1wKDMzNnB4LCBjYWxjKDFyZW0gKyA3MHZoKSwgMTA4MHB4KTtcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg0cmVtICsgODB2dyksIDk2MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTUsIDc1KTtcXG59XFxuXFxuLnNwaW5uZXIge1xcbiAgd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDZweCBzb2xpZCBhbGljZWJsdWU7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMzUsIDE1LCA3NSk7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBzZWFyY2hXaGl0ZSBmcm9tICcuL2Fzc2V0cy9zZWFyY2gtc3ZnL3NlYXJjaC13aGl0ZS5zdmcnO1xuaW1wb3J0IHNlYXJjaERlZmF1bHQgZnJvbSAnLi9hc3NldHMvc2VhcmNoLXN2Zy9zZWFyY2gtZGVmYXVsdC5zdmcnO1xuaW1wb3J0IGNsZWFyU1ZHIGZyb20gJy4vYXNzZXRzL3NlYXJjaC1zdmcvY2xlYXItd2hpdGUuc3ZnJztcbmltcG9ydCB7IGdldENsaWVudExvY2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL2NsaWVudExvY2F0aW9uJztcbmltcG9ydCB7XG4gIHJlbmRlcldlYXRoZXJJbmZvLFxuICBsb2FkaW5nQW5pbWF0aW9uLFxuICBzZXRUb01ldHJpYyxcbiAgc2V0VG9JbXBlcmlhbCxcbn0gZnJvbSAnLi9tb2R1bGVzL3JlbmRlcldlYXRoZXJJbmZvJztcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XG5jb25zdCBzZWFyY2hTVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWFyY2gtc3ZnXScpO1xuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbGVhcl0nKTtcbmNvbnN0IHVuaXRTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t1bml0LXNlbGVjdG9yXScpO1xuY29uc3QgaW1wZXJpYWxTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltcGVyaWFsXScpO1xuY29uc3QgbWV0cmljU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZXRyaWNdJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIHNlYXJjaFNWRy5zcmMgPSBzZWFyY2hEZWZhdWx0O1xuICBsb2FkaW5nQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgZ2V0Q2xpZW50TG9jYXRpb24oKTtcbiAgcmVuZGVyV2VhdGhlckluZm8obG9jYXRpb24pO1xuICBzZWFyY2gudmFsdWUgPSAnJztcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxvYWRpbmdBbmltYXRpb24oKTtcbiAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2gudmFsdWU7XG4gIHJlbmRlcldlYXRoZXJJbmZvKGxvY2F0aW9uKTtcbiAgc2VhcmNoLnBsYWNlaG9sZGVyID0gJ1NlYXJjaGluZy4uLic7XG4gIHNlYXJjaC52YWx1ZSA9ICcnO1xuICBjbGVhci5zcmMgPSAnJztcbiAgY2xlYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuICBjbGVhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgc2VhcmNoLmJsdXIoKTtcbn0pO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gIHNlYXJjaFNWRy5zcmMgPSBzZWFyY2hXaGl0ZTtcbn0pO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgc2VhcmNoU1ZHLnNyYyA9IHNlYXJjaERlZmF1bHQ7XG59KTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBjbGVhci5zcmMgPSBjbGVhclNWRztcbiAgY2xlYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTZweCcpO1xuICBjbGVhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzE2cHgnKTtcbiAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2VhcmNoLnZhbHVlID0gJyc7XG4gICAgY2xlYXIuc3JjID0gJyc7XG4gICAgY2xlYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuICAgIGNsZWFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIHNlYXJjaC5mb2N1cygpO1xuICB9KTtcbn0pO1xuXG51bml0U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnYnV0dG9uJykge1xuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIGltcGVyaWFsU2VsZWN0b3IudmFsdWUgPSAndHJ1ZSc7XG4gICAgICBpbXBlcmlhbFNlbGVjdG9yLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6IHJnYigyNDAsIDI0OCwgMjU1KScpO1xuICAgICAgbWV0cmljU2VsZWN0b3IudmFsdWUgPSAnZmFsc2UnO1xuICAgICAgbWV0cmljU2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjUpJyk7XG4gICAgICBzZXRUb0ltcGVyaWFsKCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgaW1wZXJpYWxTZWxlY3Rvci52YWx1ZSA9ICdmYWxzZSc7XG4gICAgICBpbXBlcmlhbFNlbGVjdG9yLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41KScpO1xuICAgICAgbWV0cmljU2VsZWN0b3IudmFsdWUgPSAndHJ1ZSc7XG4gICAgICBtZXRyaWNTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSknKTtcbiAgICAgIHNldFRvTWV0cmljKCk7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjbGVhclNreURheSIsImNsZWFyU2t5TmlnaHQiLCJmZXdDbG91ZHNEYXkiLCJmZXdDbG91ZHNOaWdodCIsInNjYXR0ZXJlZENsb3Vkc0RheSIsInNjYXR0ZXJlZENsb3Vkc05pZ2h0IiwiYnJva2VuQ2xvdWRzRGF5IiwiYnJva2VuQ2xvdWRzTmlnaHQiLCJzaG93ZXJSYWluRGF5Iiwic2hvd2VyUmFpbk5pZ2h0IiwicmFpbkRheSIsInJhaW5OaWdodCIsInRodW5kZXJzdG9ybURheSIsInRodW5kZXJzdG9ybU5pZ2h0Iiwic25vd0RheSIsInNub3dOaWdodCIsIm1pc3REYXkiLCJtaXN0TmlnaHQiLCJpY29ucyIsImZldGNoRGF0YSIsImdldENsaWVudExvY2F0aW9uIiwiZGF0YSIsImNpdHkiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0Q3VycmVudFdlYXRoZXJJbmZvIiwiY291bnRyaWVzIiwiY2FwaXRhbGl6ZSIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJnZXRQb3BQZXJjZW50YWdlIiwibnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiY29udmVydFRvQ2Vsc2l1cyIsImtlbHZpbiIsImNvbnZlcnRUb0ZhaHJlbmhlaXQiLCJnZXRSZWFkYWJsZVRpbWVzdGFtcCIsInVuaXgiLCJuZXdEYXRlIiwiRGF0ZSIsInRpbWUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJzcGxpY2UiLCJwcm9jZXNzSW5mbyIsImxvY2F0aW9uIiwiaW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYWNlaG9sZGVyIiwibWV0cmljIiwicG9wIiwiaHVtaWRpdHkiLCJ2aXNpYmlsaXR5IiwidGVtcCIsImZlZWxzTGlrZSIsIndpbmRTcGVlZCIsImNsb3VkQ292ZXIiLCJzdW5yaXNlIiwidGltZXpvbmUiLCJzdW5zZXQiLCJjb3VudHJ5IiwiaWNvbiIsImltcGVyaWFsIiwicHJlY2lwaXRhdGlvbiIsIm1ldHJpY1NlbGVjdG9yIiwiaW1wZXJpYWxTZWxlY3RvciIsIm1ldHJpY0RhdGEiLCJpbXBlcmlhbERhdGEiLCJsb2FkaW5nQW5pbWF0aW9uIiwibWFpbiIsIm92ZXJsYXkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3Bpbm5lciIsImFwcGVuZENoaWxkIiwicmVtb3ZlTG9hZGluZ0FuaW1hdGlvbiIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwic2V0VG9NZXRyaWMiLCJ0ZXh0Q29udGVudCIsInNldFRvSW1wZXJpYWwiLCJyZW5kZXJXZWF0aGVySW5mbyIsInNyYyIsInNldEF0dHJpYnV0ZSIsInZhbHVlIiwiYXBwSUQiLCJnZXRXZWF0aGVyRGF0YSIsImdldEZvcmVjYXN0RGF0YSIsImdldFdlYXRoZXJJbmZvIiwiUHJvbWlzZSIsImFsbCIsIndlYXRoZXJEYXRhIiwiZm9yZWNhc3REYXRhIiwid2VhdGhlciIsImxpc3QiLCJmZWVsc19saWtlIiwid2luZCIsInNwZWVkIiwiY2xvdWRzIiwic3lzIiwibmFtZSIsInNlYXJjaFdoaXRlIiwic2VhcmNoRGVmYXVsdCIsImNsZWFyU1ZHIiwic2VhcmNoIiwic2VhcmNoU1ZHIiwiY2xlYXIiLCJ1bml0U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJsdXIiLCJmb2N1cyIsInRhcmdldCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9