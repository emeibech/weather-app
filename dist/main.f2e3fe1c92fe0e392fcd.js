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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _processInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processInfo */ "./src/modules/processInfo.js");
/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/icons */ "./src/assets/icons/icons.js");
/* harmony import */ var _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/search-svg/search-default.svg */ "./src/assets/search-svg/search-default.svg");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var imgSearch = document.querySelector('[data-search-svg]');
imgSearch.src = _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_2__;
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
          city.textContent = "".concat(metric.city, ", ").concat(metric.country);
          icon.src = _assets_icons_icons__WEBPACK_IMPORTED_MODULE_1__["default"][metric.icon];
          icon.setAttribute('alt', metric.description);
          description.textContent = metric.description;
          precipitation.textContent = metric.pop;
          humidity.textContent = metric.humidity;
          visibility.textContent = metric.visibility;
          temp.textContent = metric.temp;
          feelsLike.textContent = " ".concat(metric.feelsLike);
          windSpeed.textContent = metric.windSpeed;
          cloudCover.textContent = metric.cloudCover;
          sunrise.textContent = metric.sunrise;
          sunset.textContent = metric.sunset;
          console.log(metric);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeatherInfo);

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




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Limelight-Regular.ttf */ "./src/assets/fonts/Limelight-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_csstools_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: #ac4ba8;\n}\n\na:visited {\n  color: #833980;\n}\n\n@font-face {\n  font-family: limelight;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-display: swap;\n}\n\n\nbody {\n  background-color: #38285c;\n  color: rgb(220, 220, 220);\n}\n\nmain {\n  margin-top: 2rem;\n  display: grid;\n  place-items: center;\n}\n\n/* main * {border: 1px solid #ac4ba8;} */\n\nh1,\nh2,\nh3,\nh4,\np,\nspan {\n  cursor: default;\n}\n\nh1 {\n  font-size: 1rem;\n  font-family: limelight;\n  margin-block: 0.75rem;\n  margin-inline: 0.75rem;\n  color: rgb(215, 235, 250);\n}\n\nh2 {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\nh3 {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n\nh4 {\n  font-weight: 300;\n}\n\np {\n  font-weight: 400;\n}\n\n/* <-------------------------Weather Information-------------------------> */\n\n.temperature {\n  display: grid;\n  place-items: center\n}\n\n.temp {\n  font-size: 5rem;\n}\n\n.feels-like {\n  font-size: 0.8rem;\n}\n\n.main-info {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 300px;\n}\n\n\n.important {\n  display: grid;\n  place-items: center;\n  height: 6.5rem;\n}\n\n.percentage {\n  align-self: end;\n  font-size: 2.5rem;\n  width: 80px;\n  text-align: center;\n}\n\n.pop {\n  display: grid;\n  place-items: center;\n  height: 6.5rem;\n  /* border: 1px solid saddlebrown; */\n}\n\n.description,\n.chance {\n  align-self: end;\n}\n\n.more-info {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  row-gap: 1rem;\n  font-size: 0.8rem;\n  width: 300px;\n}\n\n.more-info > div {\n  text-align: center;\n}\n\n/* <-------------------------Search bar-------------------------> */\nform {\n  margin-top: 2rem;\n}\n\nform * {\n  /* border: 1px solid sandybrown; */\n}\n\n.search {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  outline: none;\n  font-size: 0.9rem;\n  border: none;\n  border-radius: 3rem;\n  padding-block: 0.6rem;\n  padding-inline-start: 2rem;\n  background-color: #2b1958;\n  color: antiquewhite;\n  grid-column: 1;\n  grid-row: 1;\n  width: 240px;\n}\n\n.search-svg {\n  margin-left: 0.6rem;\n  grid-column: 1;\n  grid-row: 1;\n  height: 1rem;\n  width: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,mJAAmJ;AACrJ;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,4CAAgD;EAChD,kBAAkB;AACpB;;;AAKA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA,wCAAwC;;AAExC;;;;;;EAME,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,qBAAqB;EACrB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,4EAA4E;;AAE5E;EACE,aAAa;EACb;AACF;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,mCAAmC;AACrC;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA,mEAAmE;AACnE;EACE,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: #ac4ba8;\n}\n\na:visited {\n  color: #833980;\n}\n\n@font-face {\n  font-family: limelight;\n  src: url('./assets/fonts/Limelight-Regular.ttf');\n  font-display: swap;\n};\n\n@import '~@csstools/normalize.css';\n\n\nbody {\n  background-color: #38285c;\n  color: rgb(220, 220, 220);\n}\n\nmain {\n  margin-top: 2rem;\n  display: grid;\n  place-items: center;\n}\n\n/* main * {border: 1px solid #ac4ba8;} */\n\nh1,\nh2,\nh3,\nh4,\np,\nspan {\n  cursor: default;\n}\n\nh1 {\n  font-size: 1rem;\n  font-family: limelight;\n  margin-block: 0.75rem;\n  margin-inline: 0.75rem;\n  color: rgb(215, 235, 250);\n}\n\nh2 {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\nh3 {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n\nh4 {\n  font-weight: 300;\n}\n\np {\n  font-weight: 400;\n}\n\n/* <-------------------------Weather Information-------------------------> */\n\n.temperature {\n  display: grid;\n  place-items: center\n}\n\n.temp {\n  font-size: 5rem;\n}\n\n.feels-like {\n  font-size: 0.8rem;\n}\n\n.main-info {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 300px;\n}\n\n\n.important {\n  display: grid;\n  place-items: center;\n  height: 6.5rem;\n}\n\n.percentage {\n  align-self: end;\n  font-size: 2.5rem;\n  width: 80px;\n  text-align: center;\n}\n\n.pop {\n  display: grid;\n  place-items: center;\n  height: 6.5rem;\n  /* border: 1px solid saddlebrown; */\n}\n\n.description,\n.chance {\n  align-self: end;\n}\n\n.more-info {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  row-gap: 1rem;\n  font-size: 0.8rem;\n  width: 300px;\n}\n\n.more-info > div {\n  text-align: center;\n}\n\n/* <-------------------------Search bar-------------------------> */\nform {\n  margin-top: 2rem;\n}\n\nform * {\n  /* border: 1px solid sandybrown; */\n}\n\n.search {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  outline: none;\n  font-size: 0.9rem;\n  border: none;\n  border-radius: 3rem;\n  padding-block: 0.6rem;\n  padding-inline-start: 2rem;\n  background-color: #2b1958;\n  color: antiquewhite;\n  grid-column: 1;\n  grid-row: 1;\n  width: 240px;\n}\n\n.search-svg {\n  margin-left: 0.6rem;\n  grid-column: 1;\n  grid-row: 1;\n  height: 1rem;\n  width: 1rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/search-svg/search-default.svg":
/*!**************************************************!*\
  !*** ./src/assets/search-svg/search-default.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c41969d0221383cc90bb.svg";

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
/* harmony import */ var _modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderWeatherInfo */ "./src/modules/renderWeatherInfo.js");
/* harmony import */ var _modules_clientLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clientLocation */ "./src/modules/clientLocation.js");
/* harmony import */ var _assets_search_svg_search_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/search-svg/search-white.svg */ "./src/assets/search-svg/search-white.svg");
/* harmony import */ var _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/search-svg/search-default.svg */ "./src/assets/search-svg/search-default.svg");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var search = document.querySelector('#location');
var imgSearch = document.querySelector('[data-search-svg]');
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var location;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return (0,_modules_clientLocation__WEBPACK_IMPORTED_MODULE_2__.getClientLocation)();
      case 2:
        location = _context.sent;
        (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
      case 4:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  var input = document.querySelector('#location');
  var location = input.value;
  (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(location);
  input.value = '';
  input.placeholder = 'Searching...';
});
search.addEventListener('focus', function () {
  imgSearch.src = _assets_search_svg_search_white_svg__WEBPACK_IMPORTED_MODULE_3__;
});
search.addEventListener('blur', function () {
  imgSearch.src = _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_4__;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQyxDQUFDMkMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNuRUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7RUFDdEIsSUFBTUMsS0FBSyxHQUFHL0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ2pELElBQU1ILFFBQVEsR0FBR2lELEtBQUssQ0FBQ0MsS0FBSztFQUM1QjNCLHNFQUFpQixDQUFDdkIsUUFBUSxDQUFDO0VBQzNCaUQsS0FBSyxDQUFDQyxLQUFLLEdBQUcsRUFBRTtFQUNoQkQsS0FBSyxDQUFDN0MsV0FBVyxHQUFHLGNBQWM7QUFDcEMsQ0FBQyxDQUFDO0FBRUZ5QyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3JDekIsU0FBUyxDQUFDQyxHQUFHLEdBQUdxQixnRUFBVztBQUM3QixDQUFDLENBQUM7QUFFRkUsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBTTtFQUNwQ3pCLFNBQVMsQ0FBQ0MsR0FBRyxHQUFHc0Isa0VBQWE7QUFDL0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qLy4vc3JjL2Fzc2V0cy9pY29ucy9pY29ucy5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vc3JjL21vZHVsZXMvY2xpZW50TG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9tb2R1bGVzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vc3JjL21vZHVsZXMvcHJvY2Vzc0luZm8uanMiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9tb2R1bGVzL3JlbmRlcldlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL3Byb2ovLi9zcmMvbW9kdWxlcy93ZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL0Bjc3N0b29scy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xlYXJTa3lEYXkgZnJvbSAnLi8wMWQyeC5wbmcnO1xuaW1wb3J0IGNsZWFyU2t5TmlnaHQgZnJvbSAnLi8wMW4yeC5wbmcnO1xuaW1wb3J0IGZld0Nsb3Vkc0RheSBmcm9tICcuLzAyZDJ4LnBuZyc7XG5pbXBvcnQgZmV3Q2xvdWRzTmlnaHQgZnJvbSAnLi8wMm4yeC5wbmcnO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc0RheSBmcm9tICcuLzAzZDJ4LnBuZyc7XG5pbXBvcnQgc2NhdHRlcmVkQ2xvdWRzTmlnaHQgZnJvbSAnLi8wM24yeC5wbmcnO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc0RheSBmcm9tICcuLzA0ZDJ4LnBuZyc7XG5pbXBvcnQgYnJva2VuQ2xvdWRzTmlnaHQgZnJvbSAnLi8wNG4yeC5wbmcnO1xuaW1wb3J0IHNob3dlclJhaW5EYXkgZnJvbSAnLi8wOWQyeC5wbmcnO1xuaW1wb3J0IHNob3dlclJhaW5OaWdodCBmcm9tICcuLzA5bjJ4LnBuZyc7XG5pbXBvcnQgcmFpbkRheSBmcm9tICcuLzEwZDJ4LnBuZyc7XG5pbXBvcnQgcmFpbk5pZ2h0IGZyb20gJy4vMTBuMngucG5nJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1EYXkgZnJvbSAnLi8xMWQyeC5wbmcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybU5pZ2h0IGZyb20gJy4vMTFuMngucG5nJztcbmltcG9ydCBzbm93RGF5IGZyb20gJy4vMTNkMngucG5nJztcbmltcG9ydCBzbm93TmlnaHQgZnJvbSAnLi8xM24yeC5wbmcnO1xuaW1wb3J0IG1pc3REYXkgZnJvbSAnLi81MGQyeC5wbmcnO1xuaW1wb3J0IG1pc3ROaWdodCBmcm9tICcuLzUwbjJ4LnBuZyc7XG5cbmNvbnN0IGljb25zID0ge1xuICAnMDFkJzogY2xlYXJTa3lEYXksXG4gICcwMW4nOiBjbGVhclNreU5pZ2h0LFxuICAnMDJkJzogZmV3Q2xvdWRzRGF5LFxuICAnMDJuJzogZmV3Q2xvdWRzTmlnaHQsXG4gICcwM2QnOiBzY2F0dGVyZWRDbG91ZHNEYXksXG4gICcwM24nOiBzY2F0dGVyZWRDbG91ZHNOaWdodCxcbiAgJzA0ZCc6IGJyb2tlbkNsb3Vkc0RheSxcbiAgJzA0bic6IGJyb2tlbkNsb3Vkc05pZ2h0LFxuICAnMDlkJzogc2hvd2VyUmFpbkRheSxcbiAgJzA5bic6IHNob3dlclJhaW5OaWdodCxcbiAgJzEwZCc6IHJhaW5EYXksXG4gICcxMG4nOiByYWluTmlnaHQsXG4gICcxMWQnOiB0aHVuZGVyc3Rvcm1EYXksXG4gICcxMW4nOiB0aHVuZGVyc3Rvcm1OaWdodCxcbiAgJzEzZCc6IHNub3dEYXksXG4gICcxM24nOiBzbm93TmlnaHQsXG4gICc1MGQnOiBtaXN0RGF5LFxuICAnNTBuJzogbWlzdE5pZ2h0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaWNvbnM7XG4iLCJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vZmV0Y2hEYXRhJztcblxuY29uc3QgZ2V0Q2xpZW50TG9jYXRpb24gPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YSgnaHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby9pcGdlbz9hcGlLZXk9ZGY1ZTk1ODNiZGQzNGM2NmE5ZjMxMTNmNWE3ODE3NGUnKTtcbiAgICByZXR1cm4gZGF0YS5jaXR5O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZmV0Y2hEYXRhLCBnZXRDbGllbnRMb2NhdGlvbiB9O1xuIiwiY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hEYXRhO1xuIiwiaW1wb3J0IGdldEN1cnJlbnRXZWF0aGVySW5mbyBmcm9tICcuL3dlYXRoZXJJbmZvJztcbmltcG9ydCBjb3VudHJpZXMgZnJvbSAnLi4vY291bnRyaWVzLmpzb24nO1xuXG4vLyBBIGZ1bmN0aW9uIGZvciBjYXBpdGFsaXppbmcgZmlyc3QgbGV0dGVyIG9mIHRoZSB3b3JkcyBpbiBhIHN0cmluZy5cbmNvbnN0IGNhcGl0YWxpemUgPSAoZGVzY3JpcHRpb24pID0+IGRlc2NyaXB0aW9uLnNwbGl0KCcgJylcbiAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oJyAnKTtcblxuY29uc3QgZ2V0UG9wUGVyY2VudGFnZSA9IChudW1iZXIpID0+IGAke01hdGgucm91bmQobnVtYmVyICogMTAwKX0lYDtcblxuY29uc3QgY29udmVydFRvQ2Vsc2l1cyA9IChrZWx2aW4pID0+IGAke01hdGgucm91bmQoa2VsdmluIC0gMjczLjE1KX3CsENgO1xuY29uc3QgY29udmVydFRvRmFocmVuaGVpdCA9IChrZWx2aW4pID0+IGAke01hdGgucm91bmQoMS44ICogKGtlbHZpbiAtIDI3My4xNSkgKyAzMil9wrBGYDtcblxuY29uc3QgZ2V0UmVhZGFibGVUaW1lc3RhbXAgPSAodW5peCkgPT4ge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUodW5peCAqIDEwMDApO1xuICBjb25zdCB0aW1lID0gW25ld0RhdGUuZ2V0VVRDSG91cnMoKSwgbmV3RGF0ZS5nZXRVVENNaW51dGVzKCldO1xuICBpZiAodGltZVswXSA+IDEyKSB0aW1lLnNwbGljZSgwLCAxLCB0aW1lWzBdIC0gMTIpO1xuICBpZiAodGltZVsxXSA8IDEwKSB0aW1lLnNwbGljZSgxLCAxLCBgMCR7dGltZVsxXX1gKTtcbiAgcmV0dXJuIHRpbWUuam9pbignOicpO1xufTtcblxuY29uc3QgcHJvY2Vzc0luZm8gPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgaW5mbyA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVySW5mbyhsb2NhdGlvbik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJykucGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcblxuICByZXR1cm4ge1xuICAgIG1ldHJpYzoge1xuICAgICAgZGVzY3JpcHRpb246IGNhcGl0YWxpemUoaW5mby5kZXNjcmlwdGlvbiksXG4gICAgICBwb3A6IGdldFBvcFBlcmNlbnRhZ2UoaW5mby5wb3ApLFxuICAgICAgaHVtaWRpdHk6IGAke2luZm8uaHVtaWRpdHl9JWAsXG4gICAgICB2aXNpYmlsaXR5OiBgJHtNYXRoLnJvdW5kKGluZm8udmlzaWJpbGl0eSAvIDEwMDApfSBrbWAsXG4gICAgICB0ZW1wOiBjb252ZXJ0VG9DZWxzaXVzKGluZm8udGVtcCksXG4gICAgICBmZWVsc0xpa2U6IGNvbnZlcnRUb0NlbHNpdXMoaW5mby5mZWVsc0xpa2UpLFxuICAgICAgd2luZFNwZWVkOiBgJHtNYXRoLnJvdW5kKGluZm8ud2luZFNwZWVkICogKDE4IC8gNSkpfSBrbS9oYCxcbiAgICAgIGNsb3VkQ292ZXI6IGAke2luZm8uY2xvdWRDb3Zlcn0lYCxcbiAgICAgIHN1bnJpc2U6IGAke2dldFJlYWRhYmxlVGltZXN0YW1wKGluZm8uc3VucmlzZSArIGluZm8udGltZXpvbmUpfSBBTWAsXG4gICAgICBzdW5zZXQ6IGAke2dldFJlYWRhYmxlVGltZXN0YW1wKGluZm8uc3Vuc2V0ICsgaW5mby50aW1lem9uZSl9IFBNYCxcbiAgICAgIGNvdW50cnk6IGNvdW50cmllc1tpbmZvLmNvdW50cnldLFxuICAgICAgY2l0eTogY2FwaXRhbGl6ZShpbmZvLmNpdHkpLFxuICAgICAgaWNvbjogaW5mby5pY29uLFxuICAgIH0sXG4gICAgaW1wZXJpYWw6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBjYXBpdGFsaXplKGluZm8uZGVzY3JpcHRpb24pLFxuICAgICAgcG9wOiBnZXRQb3BQZXJjZW50YWdlKGluZm8ucG9wKSxcbiAgICAgIGh1bWlkaXR5OiBgJHtpbmZvLmh1bWlkaXR5fSVgLFxuICAgICAgdmlzaWJpbGl0eTogYCR7TWF0aC5yb3VuZCgoaW5mby52aXNpYmlsaXR5IC8gMTAwMCkgKiAwLjYyMTM3MTE5KX0gbWlgLFxuICAgICAgdGVtcDogY29udmVydFRvRmFocmVuaGVpdChpbmZvLnRlbXApLFxuICAgICAgZmVlbHNMaWtlOiBjb252ZXJ0VG9GYWhyZW5oZWl0KGluZm8uZmVlbHNMaWtlKSxcbiAgICAgIHdpbmRTcGVlZDogYCR7TWF0aC5yb3VuZChpbmZvLndpbmRTcGVlZCAqIDIuMjM2OSl9IG1waGAsXG4gICAgICBjbG91ZENvdmVyOiBgJHtpbmZvLmNsb3VkQ292ZXJ9JWAsXG4gICAgICBzdW5yaXNlOiBgJHtnZXRSZWFkYWJsZVRpbWVzdGFtcChpbmZvLnN1bnJpc2UgKyBpbmZvLnRpbWV6b25lKX0gQU1gLFxuICAgICAgc3Vuc2V0OiBgJHtnZXRSZWFkYWJsZVRpbWVzdGFtcChpbmZvLnN1bnNldCArIGluZm8udGltZXpvbmUpfSBQTWAsXG4gICAgICBjb3VudHJ5OiBjb3VudHJpZXNbaW5mby5jb3VudHJ5XSxcbiAgICAgIGNpdHk6IGNhcGl0YWxpemUoaW5mby5jaXR5KSxcbiAgICAgIGljb246IGluZm8uaWNvbixcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc0luZm87XG4iLCJpbXBvcnQgcHJvY2Vzc0luZm8gZnJvbSAnLi9wcm9jZXNzSW5mbyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2ljb25zJztcbmltcG9ydCBzZWFyY2hTVkcgZnJvbSAnLi4vYXNzZXRzL3NlYXJjaC1zdmcvc2VhcmNoLWRlZmF1bHQuc3ZnJztcblxuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNpdHldJyk7XG5jb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaWNvbl0nKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGVzY3JpcHRpb25dJyk7XG5jb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wXScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1odW1pZGl0eV0nKTtcbmNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12aXNpYmlsaXR5XScpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlbXBdJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mZWVscy1saWtlXScpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtd2luZC1zcGVlZF0nKTtcbmNvbnN0IGNsb3VkQ292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG91ZC1jb3Zlcl0nKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdW5yaXNlXScpO1xuY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3Vuc2V0XScpO1xuY29uc3QgaW1nU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VhcmNoLXN2Z10nKTtcblxuaW1nU2VhcmNoLnNyYyA9IHNlYXJjaFNWRztcblxuY29uc3QgcmVuZGVyV2VhdGhlckluZm8gPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgeyBtZXRyaWMsIGltcGVyaWFsIH0gPSBhd2FpdCBwcm9jZXNzSW5mbyhsb2NhdGlvbik7XG5cbiAgY2l0eS50ZXh0Q29udGVudCA9IGAke21ldHJpYy5jaXR5fSwgJHttZXRyaWMuY291bnRyeX1gO1xuICBpY29uLnNyYyA9IGljb25zW21ldHJpYy5pY29uXTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG1ldHJpYy5kZXNjcmlwdGlvbik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWV0cmljLmRlc2NyaXB0aW9uO1xuICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gbWV0cmljLnBvcDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBtZXRyaWMuaHVtaWRpdHk7XG4gIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBtZXRyaWMudmlzaWJpbGl0eTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IG1ldHJpYy50ZW1wO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgICR7bWV0cmljLmZlZWxzTGlrZX1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBtZXRyaWMud2luZFNwZWVkO1xuICBjbG91ZENvdmVyLnRleHRDb250ZW50ID0gbWV0cmljLmNsb3VkQ292ZXI7XG4gIHN1bnJpc2UudGV4dENvbnRlbnQgPSBtZXRyaWMuc3VucmlzZTtcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gbWV0cmljLnN1bnNldDtcblxuICBjb25zb2xlLmxvZyhtZXRyaWMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyV2VhdGhlckluZm87XG4iLCJpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL2NsaWVudExvY2F0aW9uJztcblxuY29uc3QgZ2V0Q3VycmVudFdlYXRoZXJJbmZvID0gKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IGFwcElEID0gJ2E4NjRiMzA1N2QzNjZmMDMxMmUzNmNlYmQ3NGM3MDc3JztcblxuICBjb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke2FwcElEfWApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9yZWNhc3REYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke2FwcElEfWApO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0V2VhdGhlckluZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFtnZXRXZWF0aGVyRGF0YSgpLCBnZXRGb3JlY2FzdERhdGEoKV0pO1xuXG4gICAgY29uc3QgW3dlYXRoZXJEYXRhLCBmb3JlY2FzdERhdGFdID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgIHBvcDogZm9yZWNhc3REYXRhLmxpc3RbMF0ucG9wLFxuICAgICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICB2aXNpYmlsaXR5OiB3ZWF0aGVyRGF0YS52aXNpYmlsaXR5LFxuICAgICAgdGVtcDogd2VhdGhlckRhdGEubWFpbi50ZW1wLFxuICAgICAgZmVlbHNMaWtlOiB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICB3aW5kU3BlZWQ6IHdlYXRoZXJEYXRhLndpbmQuc3BlZWQsXG4gICAgICBjbG91ZENvdmVyOiB3ZWF0aGVyRGF0YS5jbG91ZHMuYWxsLFxuICAgICAgc3VucmlzZTogd2VhdGhlckRhdGEuc3lzLnN1bnJpc2UsXG4gICAgICBzdW5zZXQ6IHdlYXRoZXJEYXRhLnN5cy5zdW5zZXQsXG4gICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5zeXMuY291bnRyeSxcbiAgICAgIHRpbWV6b25lOiB3ZWF0aGVyRGF0YS50aW1lem9uZSxcbiAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLm5hbWUsXG4gICAgICBpY29uOiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZ2V0V2VhdGhlckluZm8oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEN1cnJlbnRXZWF0aGVySW5mbztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERvY3VtZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGh0bWwpIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRWRnZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoaDEpIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC42N2VtO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjY3ZW07XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIG5lc3RlZCBsaXN0cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRsLCBvbCwgdWwpIDp3aGVyZShkbCwgb2wsIHVsKSB7XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShocikge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHByZSkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGFiYnJbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYiwgc3Ryb25nKSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoY29kZSwga2JkLCBzYW1wKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzbWFsbCkge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIFRhYnVsYXIgZGF0YVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0YWJsZSkge1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDEgKi9cXG4gIHRleHQtaW5kZW50OiAwOyAvKiAyICovXFxufVxcblxcbi8qIEZvcm1zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBjb250cm9scyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbikge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0OmlzKFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkpIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHByb2dyZXNzKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoc2VsZWN0KSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0ZXh0YXJlYSkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCIgaV0pIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHRleHQgc3R5bGUgb2YgcGxhY2Vob2xkZXJzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAwLjU0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSB1cGxvYWQgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBvZiBmb2N1cyBvdXRsaW5lcyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0OmlzKFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwiY29sb3JcXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkpOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIG91dGxpbmUgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQ6aXMoW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJjb2xvclxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSk6Oi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIDppbnZhbGlkIHN0eWxlcyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZSg6LW1vei11aS1pbnZhbGlkKSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3R5bGVzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGlhbG9nKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbjp3aGVyZShkaWFsb2c6bm90KFtvcGVuXSkpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzdW1tYXJ5KSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AY3NzdG9vbHMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixjQUFjLEVBQUUsTUFBTTtFQUN0QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSwwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEb2N1bWVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShodG1sKSB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEVkZ2UsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuNjdlbTtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC42N2VtO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBuZXN0ZWQgbGlzdHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkbCwgb2wsIHVsKSA6d2hlcmUoZGwsIG9sLCB1bCkge1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoaHIpIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShwcmUpIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShhYmJyW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGIsIHN0cm9uZykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBUYWJ1bGFyIGRhdGFcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAyLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGFibGUpIHtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAxICovXFxuICB0ZXh0LWluZGVudDogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gY29udHJvbHMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24pIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dDppcyhbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShwcm9ncmVzcykge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGV4dGFyZWEpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC41NDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgdXBsb2FkIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgb2YgZm9jdXMgb3V0bGluZXMgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dDppcyhbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pKTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBvdXRsaW5lIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0OmlzKFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwiY29sb3JcXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkpOjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYWRkaXRpb25hbCA6aW52YWxpZCBzdHlsZXMgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoOi1tb3otdWktaW52YWxpZCkge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IHN0eWxlcyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRpYWxvZykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG46d2hlcmUoZGlhbG9nOm5vdChbb3Blbl0pKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc3VtbWFyeSkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9AY3NzdG9vbHMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0xpbWVsaWdodC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNhYzRiYTg7XFxufVxcblxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogIzgzMzk4MDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbGltZWxpZ2h0O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODI4NWM7XFxuICBjb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogbWFpbiAqIHtib3JkZXI6IDFweCBzb2xpZCAjYWM0YmE4O30gKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbnNwYW4ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogbGltZWxpZ2h0O1xcbiAgbWFyZ2luLWJsb2NrOiAwLjc1cmVtO1xcbiAgbWFyZ2luLWlubGluZTogMC43NXJlbTtcXG4gIGNvbG9yOiByZ2IoMjE1LCAyMzUsIDI1MCk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaDQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxucCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVdlYXRoZXIgSW5mb3JtYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcblxcbi50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlclxcbn1cXG5cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi5mZWVscy1saWtlIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ubWFpbi1pbmZvIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5cXG4uaW1wb3J0YW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2LjVyZW07XFxufVxcblxcbi5wZXJjZW50YWdlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgd2lkdGg6IDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wb3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYuNXJlbTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHNhZGRsZWJyb3duOyAqL1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLmNoYW5jZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5tb3JlLWluZm8ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgcm93LWdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubW9yZS1pbmZvID4gZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TZWFyY2ggYmFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cXG5mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbmZvcm0gKiB7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBzYW5keWJyb3duOyAqL1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBwYWRkaW5nLWJsb2NrOiAwLjZyZW07XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjE5NTg7XFxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIHdpZHRoOiAyNDBweDtcXG59XFxuXFxuLnNlYXJjaC1zdmcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtSkFBbUo7QUFDcko7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQWdEO0VBQ2hELGtCQUFrQjtBQUNwQjs7O0FBS0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsd0NBQXdDOztBQUV4Qzs7Ozs7O0VBTUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSw0RUFBNEU7O0FBRTVFO0VBQ0UsYUFBYTtFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsbUVBQW1FO0FBQ25FO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjYWM0YmE4O1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6ICM4MzM5ODA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGxpbWVsaWdodDtcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9MaW1lbGlnaHQtUmVndWxhci50dGYnKTtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG59O1xcblxcbkBpbXBvcnQgJ35AY3NzdG9vbHMvbm9ybWFsaXplLmNzcyc7XFxuXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgyODVjO1xcbiAgY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIG1haW4gKiB7Ym9yZGVyOiAxcHggc29saWQgI2FjNGJhODt9ICovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5zcGFuIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGxpbWVsaWdodDtcXG4gIG1hcmdpbi1ibG9jazogMC43NXJlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IDAuNzVyZW07XFxuICBjb2xvcjogcmdiKDIxNSwgMjM1LCAyNTApO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbnAge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLyogPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1XZWF0aGVyIEluZm9ybWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4gKi9cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXJcXG59XFxuXFxuLnRlbXAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG4uZmVlbHMtbGlrZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLm1haW4taW5mbyB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuXFxuLmltcG9ydGFudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNi41cmVtO1xcbn1cXG5cXG4ucGVyY2VudGFnZSB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA2LjVyZW07XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBzYWRkbGVicm93bjsgKi9cXG59XFxuXFxuLmRlc2NyaXB0aW9uLFxcbi5jaGFuY2Uge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4ubW9yZS1pbmZvIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDFyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm1vcmUtaW5mbyA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2VhcmNoIGJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXFxuZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG5mb3JtICoge1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgc2FuZHlicm93bjsgKi9cXG59XFxuXFxuLnNlYXJjaCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgcGFkZGluZy1ibG9jazogMC42cmVtO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIxOTU4O1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICB3aWR0aDogMjQwcHg7XFxufVxcblxcbi5zZWFyY2gtc3ZnIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgcmVuZGVyV2VhdGhlckluZm8gZnJvbSAnLi9tb2R1bGVzL3JlbmRlcldlYXRoZXJJbmZvJztcbmltcG9ydCB7IGdldENsaWVudExvY2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL2NsaWVudExvY2F0aW9uJztcbmltcG9ydCBzZWFyY2hXaGl0ZSBmcm9tICcuL2Fzc2V0cy9zZWFyY2gtc3ZnL3NlYXJjaC13aGl0ZS5zdmcnO1xuaW1wb3J0IHNlYXJjaERlZmF1bHQgZnJvbSAnLi9hc3NldHMvc2VhcmNoLXN2Zy9zZWFyY2gtZGVmYXVsdC5zdmcnO1xuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcbmNvbnN0IGltZ1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlYXJjaC1zdmddJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgZ2V0Q2xpZW50TG9jYXRpb24oKTtcbiAgcmVuZGVyV2VhdGhlckluZm8obG9jYXRpb24pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcbiAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgcmVuZGVyV2VhdGhlckluZm8obG9jYXRpb24pO1xuICBpbnB1dC52YWx1ZSA9ICcnO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2hpbmcuLi4nO1xufSk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgaW1nU2VhcmNoLnNyYyA9IHNlYXJjaFdoaXRlO1xufSk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICBpbWdTZWFyY2guc3JjID0gc2VhcmNoRGVmYXVsdDtcbn0pO1xuIl0sIm5hbWVzIjpbImNsZWFyU2t5RGF5IiwiY2xlYXJTa3lOaWdodCIsImZld0Nsb3Vkc0RheSIsImZld0Nsb3Vkc05pZ2h0Iiwic2NhdHRlcmVkQ2xvdWRzRGF5Iiwic2NhdHRlcmVkQ2xvdWRzTmlnaHQiLCJicm9rZW5DbG91ZHNEYXkiLCJicm9rZW5DbG91ZHNOaWdodCIsInNob3dlclJhaW5EYXkiLCJzaG93ZXJSYWluTmlnaHQiLCJyYWluRGF5IiwicmFpbk5pZ2h0IiwidGh1bmRlcnN0b3JtRGF5IiwidGh1bmRlcnN0b3JtTmlnaHQiLCJzbm93RGF5Iiwic25vd05pZ2h0IiwibWlzdERheSIsIm1pc3ROaWdodCIsImljb25zIiwiZmV0Y2hEYXRhIiwiZ2V0Q2xpZW50TG9jYXRpb24iLCJkYXRhIiwiY2l0eSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJnZXRDdXJyZW50V2VhdGhlckluZm8iLCJjb3VudHJpZXMiLCJjYXBpdGFsaXplIiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImdldFBvcFBlcmNlbnRhZ2UiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJjb252ZXJ0VG9DZWxzaXVzIiwia2VsdmluIiwiY29udmVydFRvRmFocmVuaGVpdCIsImdldFJlYWRhYmxlVGltZXN0YW1wIiwidW5peCIsIm5ld0RhdGUiLCJEYXRlIiwidGltZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsInNwbGljZSIsInByb2Nlc3NJbmZvIiwibG9jYXRpb24iLCJpbmZvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJtZXRyaWMiLCJwb3AiLCJodW1pZGl0eSIsInZpc2liaWxpdHkiLCJ0ZW1wIiwiZmVlbHNMaWtlIiwid2luZFNwZWVkIiwiY2xvdWRDb3ZlciIsInN1bnJpc2UiLCJ0aW1lem9uZSIsInN1bnNldCIsImNvdW50cnkiLCJpY29uIiwiaW1wZXJpYWwiLCJzZWFyY2hTVkciLCJwcmVjaXBpdGF0aW9uIiwiaW1nU2VhcmNoIiwic3JjIiwicmVuZGVyV2VhdGhlckluZm8iLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImFwcElEIiwiZ2V0V2VhdGhlckRhdGEiLCJnZXRGb3JlY2FzdERhdGEiLCJnZXRXZWF0aGVySW5mbyIsIlByb21pc2UiLCJhbGwiLCJ3ZWF0aGVyRGF0YSIsImZvcmVjYXN0RGF0YSIsIndlYXRoZXIiLCJsaXN0IiwibWFpbiIsImZlZWxzX2xpa2UiLCJ3aW5kIiwic3BlZWQiLCJjbG91ZHMiLCJzeXMiLCJuYW1lIiwic2VhcmNoV2hpdGUiLCJzZWFyY2hEZWZhdWx0Iiwic2VhcmNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==