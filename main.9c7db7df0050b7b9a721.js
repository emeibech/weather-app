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
/* harmony export */   "renderWeatherInfo": () => (/* binding */ renderWeatherInfo)
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
var renderWeatherInfo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
    var _yield$processInfo, metric;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_processInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(location);
        case 2:
          _yield$processInfo = _context.sent;
          metric = _yield$processInfo.metric;
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
          removeLoadingAnimation();
        case 18:
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: comfortaa;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-display: swap;\n}\n\n@font-face {\n  font-family: limelight;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-display: swap;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #ac4ba8;\n}\n\na:visited { color: #833980; }\n\n/* rgb(25, 25, 84)\nrgb(43, 25, 88) */\nbody {\n  background-color: rgb(35, 15, 75);\n  color: aliceblue;\n  margin-inline: auto;\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n}\n\nmain {\n  margin-top: 1rem;\n  display: grid;\n  place-items: center;\n  height: clamp(336px, calc(1rem + 75vh), 1080px);\n  font-family: comfortaa;\n  row-gap: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\np,\nspan { cursor: default; }\n\nh1 {\n  font-size: clamp(0.75rem, calc(0.25rem + 2.5vw), 1.5rem);\n  font-family: limelight;\n  margin-block: clamp(0.5rem, calc(0.1rem + 2vh), 2rem);\n  margin-inline: 0.25rem;\n  color: rgb(180, 180, 240);\n  text-align: start;\n}\n\nh2 {\n  font-size: clamp(0.75rem, calc(0.25rem + 4vw), 2rem);\n  font-weight: 500;\n  text-align: center;\n}\n\nh3 { font-weight: 400; }\n\nh4 {\n  font-weight: 300;\n  color: rgba(240, 248, 255, 0.5);\n}\n\np { font-weight: 400; }\n\n/* <-------------------------Weather Information-------------------------> */\n.temperature {\n  display: grid;\n  place-items: center\n}\n\n.temp { font-size: clamp(4rem, calc(4rem + 4vw), 8rem); }\n\n.feels-like {\n  font-size: clamp(0.8rem, calc(0.5rem + 2vw), 1rem);\n  color: rgba(240, 248, 255, 0.5);\n}\n\n.main-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: clamp(318px, calc(6rem + 70vw), 500px);\n}\n\n.important {\n  display: grid;\n  place-items: center;\n}\n\n.percentage {\n  align-self: end;\n  font-size: 1.8rem;\n  width: 80px;\n  text-align: center;\n}\n\n.pop {\n  display: grid;\n  place-items: center;\n  height: 7rem;\n  align-self: end;\n}\n\n.description,\n.chance {\n  align-self: end;\n  font-size: clamp(0.9rem, calc(0.5rem + 2.5vw), 1.5rem);\n  text-align: center;\n}\n\n.more-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  row-gap: clamp(0.5rem, calc(0.25rem + 2.5vh), 2rem);\n  font-size: clamp(0.8rem, calc(0.25rem + 3vw), 1.1rem);\n  width: clamp(318px, calc(6rem + 70vw), 720px);\n}\n\n.more-info > div { text-align: center; }\n\n/* <-------------------------Search bar-------------------------> */\n.search {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  outline: none;\n  font-family: comfortaa;\n  font-size: clamp(0.9rem, calc(0.25rem + 3vw), 1.2rem);\n  border: none;\n  border-radius: 3rem;\n  padding-block: clamp(0.5rem, calc(0.25rem + 3vw), 0.75rem);\n  padding-inline: 2rem;\n  background-color: rgb(20, 10, 40);\n  color: aliceblue;\n  grid-column: 1;\n  grid-row: 1;\n  width: clamp(240px, calc(1rem + 70vw), 360px);\n}\n\n.search-svg {\n  margin-left: 0.6rem;\n  grid-column: 1;\n  grid-row: 1;\n  height: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n  width: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n}\n\n.clear {\n  margin-right: 0.6rem;\n  grid-row: 1;\n  grid-column: 1;\n  width: 1rem;\n  justify-self: end;\n}\n\n/* <-------------------------Loading Animation-------------------------> */\n\n.overlay {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: clamp(280px, calc(1rem + 50vh), 960px);\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n  background-color: rgb(35, 15, 75);\n}\n\n.spinner {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  border: 6px solid aliceblue;\n  border-top-color: rgb(35, 15, 75);\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA6C;EAC7C,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,4CAAgD;EAChD,kBAAkB;AACpB;;AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA,YAAY,cAAc,EAAE;;AAE5B;iBACiB;AACjB;EACE,iCAAiC;EACjC,gBAAgB;EAChB,mBAAmB;EACnB,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,+CAA+C;EAC/C,sBAAsB;EACtB,aAAa;AACf;;AAEA;;;;;OAKO,eAAe,EAAE;;AAExB;EACE,wDAAwD;EACxD,sBAAsB;EACtB,qDAAqD;EACrD,sBAAsB;EACtB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,oDAAoD;EACpD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,KAAK,gBAAgB,EAAE;;AAEvB;EACE,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA,IAAI,gBAAgB,EAAE;;AAEtB,4EAA4E;AAC5E;EACE,aAAa;EACb;AACF;;AAEA,QAAQ,8CAA8C,EAAE;;AAExD;EACE,kDAAkD;EAClD,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,6CAA6C;AAC/C;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,sDAAsD;EACtD,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mDAAmD;EACnD,qDAAqD;EACrD,6CAA6C;AAC/C;;AAEA,mBAAmB,kBAAkB,EAAE;;AAEvC,mEAAmE;AACnE;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qDAAqD;EACrD,YAAY;EACZ,mBAAmB;EACnB,0DAA0D;EAC1D,oBAAoB;EACpB,iCAAiC;EACjC,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,6CAA6C;AAC/C;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,iDAAiD;EACjD,gDAAgD;AAClD;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,cAAc;EACd,WAAW;EACX,iBAAiB;AACnB;;AAEA,0EAA0E;;AAE1E;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,6CAA6C;EAC7C,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,2BAA2B;EAC3B,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC","sourcesContent":["@font-face {\n  font-family: comfortaa;\n  src: url('./assets/fonts/Comfortaa-Bold.ttf');\n  font-display: swap;\n}\n\n@font-face {\n  font-family: limelight;\n  src: url('./assets/fonts/Limelight-Regular.ttf');\n  font-display: swap;\n};\n\n@import '~@csstools/normalize.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #ac4ba8;\n}\n\na:visited { color: #833980; }\n\n/* rgb(25, 25, 84)\nrgb(43, 25, 88) */\nbody {\n  background-color: rgb(35, 15, 75);\n  color: aliceblue;\n  margin-inline: auto;\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n}\n\nmain {\n  margin-top: 1rem;\n  display: grid;\n  place-items: center;\n  height: clamp(336px, calc(1rem + 75vh), 1080px);\n  font-family: comfortaa;\n  row-gap: 1rem;\n}\n\nh1,\nh2,\nh3,\nh4,\np,\nspan { cursor: default; }\n\nh1 {\n  font-size: clamp(0.75rem, calc(0.25rem + 2.5vw), 1.5rem);\n  font-family: limelight;\n  margin-block: clamp(0.5rem, calc(0.1rem + 2vh), 2rem);\n  margin-inline: 0.25rem;\n  color: rgb(180, 180, 240);\n  text-align: start;\n}\n\nh2 {\n  font-size: clamp(0.75rem, calc(0.25rem + 4vw), 2rem);\n  font-weight: 500;\n  text-align: center;\n}\n\nh3 { font-weight: 400; }\n\nh4 {\n  font-weight: 300;\n  color: rgba(240, 248, 255, 0.5);\n}\n\np { font-weight: 400; }\n\n/* <-------------------------Weather Information-------------------------> */\n.temperature {\n  display: grid;\n  place-items: center\n}\n\n.temp { font-size: clamp(4rem, calc(4rem + 4vw), 8rem); }\n\n.feels-like {\n  font-size: clamp(0.8rem, calc(0.5rem + 2vw), 1rem);\n  color: rgba(240, 248, 255, 0.5);\n}\n\n.main-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: clamp(318px, calc(6rem + 70vw), 500px);\n}\n\n.important {\n  display: grid;\n  place-items: center;\n}\n\n.percentage {\n  align-self: end;\n  font-size: 1.8rem;\n  width: 80px;\n  text-align: center;\n}\n\n.pop {\n  display: grid;\n  place-items: center;\n  height: 7rem;\n  align-self: end;\n}\n\n.description,\n.chance {\n  align-self: end;\n  font-size: clamp(0.9rem, calc(0.5rem + 2.5vw), 1.5rem);\n  text-align: center;\n}\n\n.more-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  row-gap: clamp(0.5rem, calc(0.25rem + 2.5vh), 2rem);\n  font-size: clamp(0.8rem, calc(0.25rem + 3vw), 1.1rem);\n  width: clamp(318px, calc(6rem + 70vw), 720px);\n}\n\n.more-info > div { text-align: center; }\n\n/* <-------------------------Search bar-------------------------> */\n.search {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  outline: none;\n  font-family: comfortaa;\n  font-size: clamp(0.9rem, calc(0.25rem + 3vw), 1.2rem);\n  border: none;\n  border-radius: 3rem;\n  padding-block: clamp(0.5rem, calc(0.25rem + 3vw), 0.75rem);\n  padding-inline: 2rem;\n  background-color: rgb(20, 10, 40);\n  color: aliceblue;\n  grid-column: 1;\n  grid-row: 1;\n  width: clamp(240px, calc(1rem + 70vw), 360px);\n}\n\n.search-svg {\n  margin-left: 0.6rem;\n  grid-column: 1;\n  grid-row: 1;\n  height: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n  width: clamp(1rem, calc(0.25rem + 10vw), 1.3rem);\n}\n\n.clear {\n  margin-right: 0.6rem;\n  grid-row: 1;\n  grid-column: 1;\n  width: 1rem;\n  justify-self: end;\n}\n\n/* <-------------------------Loading Animation-------------------------> */\n\n.overlay {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: clamp(280px, calc(1rem + 50vh), 960px);\n  width: clamp(318px, calc(4rem + 80vw), 960px);\n  background-color: rgb(35, 15, 75);\n}\n\n.spinner {\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  border: 6px solid aliceblue;\n  border-top-color: rgb(35, 15, 75);\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderWeatherInfo */ "./src/modules/renderWeatherInfo.js");
/* harmony import */ var _modules_clientLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clientLocation */ "./src/modules/clientLocation.js");
/* harmony import */ var _assets_search_svg_search_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/search-svg/search-white.svg */ "./src/assets/search-svg/search-white.svg");
/* harmony import */ var _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/search-svg/search-default.svg */ "./src/assets/search-svg/search-default.svg");
/* harmony import */ var _assets_search_svg_clear_white_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/search-svg/clear-white.svg */ "./src/assets/search-svg/clear-white.svg");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var search = document.querySelector('#location');
var imgSearch = document.querySelector('[data-search-svg]');
var clear = document.querySelector('[data-clear]');
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var location;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__.loadingAnimation)();
        _context.next = 3;
        return (0,_modules_clientLocation__WEBPACK_IMPORTED_MODULE_2__.getClientLocation)();
      case 3:
        location = _context.sent;
        (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__.renderWeatherInfo)(location);
        search.value = '';
      case 6:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__.loadingAnimation)();
  var location = search.value;
  (0,_modules_renderWeatherInfo__WEBPACK_IMPORTED_MODULE_1__.renderWeatherInfo)(location);
  search.placeholder = 'Searching...';
  search.value = '';
  clear.src = '';
  clear.setAttribute('height', '0');
  clear.setAttribute('width', '0');
  search.blur();
});
search.addEventListener('focus', function () {
  imgSearch.src = _assets_search_svg_search_white_svg__WEBPACK_IMPORTED_MODULE_3__;
});
search.addEventListener('blur', function () {
  imgSearch.src = _assets_search_svg_search_default_svg__WEBPACK_IMPORTED_MODULE_4__;
});
search.addEventListener('input', function () {
  clear.src = _assets_search_svg_clear_white_svg__WEBPACK_IMPORTED_MODULE_5__;
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkUsdUJBQXVCLEdBQUcsU0FBUyxxSEFBcUgsUUFBUSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVks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TSxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNyQ0QsS0FBSyxDQUFDbEMsR0FBRyxHQUFHZ0MsK0RBQVE7RUFDcEJFLEtBQUssQ0FBQ3JCLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0VBQ3BDcUIsS0FBSyxDQUFDckIsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7RUFDbkNxQixLQUFLLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3BDRixNQUFNLENBQUNHLEtBQUssR0FBRyxFQUFFO0lBQ2pCRixLQUFLLENBQUNsQyxHQUFHLEdBQUcsRUFBRTtJQUNka0MsS0FBSyxDQUFDckIsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7SUFDakNxQixLQUFLLENBQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUNoQ29CLE1BQU0sQ0FBQ08sS0FBSyxFQUFFO0VBQ2hCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9hc3NldHMvaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9tb2R1bGVzL2NsaWVudExvY2F0aW9uLmpzIiwid2VicGFjazovL3Byb2ovLi9zcmMvbW9kdWxlcy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9tb2R1bGVzL3Byb2Nlc3NJbmZvLmpzIiwid2VicGFjazovL3Byb2ovLi9zcmMvbW9kdWxlcy9yZW5kZXJXZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vc3JjL21vZHVsZXMvd2VhdGhlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJvai8uL25vZGVfbW9kdWxlcy9AY3NzdG9vbHMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3Byb2ovLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcHJvai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2ovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvai93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2ovd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2ovLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsZWFyU2t5RGF5IGZyb20gJy4vMDFkMngucG5nJztcbmltcG9ydCBjbGVhclNreU5pZ2h0IGZyb20gJy4vMDFuMngucG5nJztcbmltcG9ydCBmZXdDbG91ZHNEYXkgZnJvbSAnLi8wMmQyeC5wbmcnO1xuaW1wb3J0IGZld0Nsb3Vkc05pZ2h0IGZyb20gJy4vMDJuMngucG5nJztcbmltcG9ydCBzY2F0dGVyZWRDbG91ZHNEYXkgZnJvbSAnLi8wM2QyeC5wbmcnO1xuaW1wb3J0IHNjYXR0ZXJlZENsb3Vkc05pZ2h0IGZyb20gJy4vMDNuMngucG5nJztcbmltcG9ydCBicm9rZW5DbG91ZHNEYXkgZnJvbSAnLi8wNGQyeC5wbmcnO1xuaW1wb3J0IGJyb2tlbkNsb3Vkc05pZ2h0IGZyb20gJy4vMDRuMngucG5nJztcbmltcG9ydCBzaG93ZXJSYWluRGF5IGZyb20gJy4vMDlkMngucG5nJztcbmltcG9ydCBzaG93ZXJSYWluTmlnaHQgZnJvbSAnLi8wOW4yeC5wbmcnO1xuaW1wb3J0IHJhaW5EYXkgZnJvbSAnLi8xMGQyeC5wbmcnO1xuaW1wb3J0IHJhaW5OaWdodCBmcm9tICcuLzEwbjJ4LnBuZyc7XG5pbXBvcnQgdGh1bmRlcnN0b3JtRGF5IGZyb20gJy4vMTFkMngucG5nJztcbmltcG9ydCB0aHVuZGVyc3Rvcm1OaWdodCBmcm9tICcuLzExbjJ4LnBuZyc7XG5pbXBvcnQgc25vd0RheSBmcm9tICcuLzEzZDJ4LnBuZyc7XG5pbXBvcnQgc25vd05pZ2h0IGZyb20gJy4vMTNuMngucG5nJztcbmltcG9ydCBtaXN0RGF5IGZyb20gJy4vNTBkMngucG5nJztcbmltcG9ydCBtaXN0TmlnaHQgZnJvbSAnLi81MG4yeC5wbmcnO1xuXG5jb25zdCBpY29ucyA9IHtcbiAgJzAxZCc6IGNsZWFyU2t5RGF5LFxuICAnMDFuJzogY2xlYXJTa3lOaWdodCxcbiAgJzAyZCc6IGZld0Nsb3Vkc0RheSxcbiAgJzAybic6IGZld0Nsb3Vkc05pZ2h0LFxuICAnMDNkJzogc2NhdHRlcmVkQ2xvdWRzRGF5LFxuICAnMDNuJzogc2NhdHRlcmVkQ2xvdWRzTmlnaHQsXG4gICcwNGQnOiBicm9rZW5DbG91ZHNEYXksXG4gICcwNG4nOiBicm9rZW5DbG91ZHNOaWdodCxcbiAgJzA5ZCc6IHNob3dlclJhaW5EYXksXG4gICcwOW4nOiBzaG93ZXJSYWluTmlnaHQsXG4gICcxMGQnOiByYWluRGF5LFxuICAnMTBuJzogcmFpbk5pZ2h0LFxuICAnMTFkJzogdGh1bmRlcnN0b3JtRGF5LFxuICAnMTFuJzogdGh1bmRlcnN0b3JtTmlnaHQsXG4gICcxM2QnOiBzbm93RGF5LFxuICAnMTNuJzogc25vd05pZ2h0LFxuICAnNTBkJzogbWlzdERheSxcbiAgJzUwbic6IG1pc3ROaWdodCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGljb25zO1xuIiwiaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL2ZldGNoRGF0YSc7XG5cbmNvbnN0IGdldENsaWVudExvY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoJ2h0dHBzOi8vYXBpLmlwZ2VvbG9jYXRpb24uaW8vaXBnZW8/YXBpS2V5PWRmNWU5NTgzYmRkMzRjNjZhOWYzMTEzZjVhNzgxNzRlJyk7XG4gICAgcmV0dXJuIGRhdGEuY2l0eTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGZldGNoRGF0YSwgZ2V0Q2xpZW50TG9jYXRpb24gfTtcbiIsImNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsImltcG9ydCBnZXRDdXJyZW50V2VhdGhlckluZm8gZnJvbSAnLi93ZWF0aGVySW5mbyc7XG5pbXBvcnQgY291bnRyaWVzIGZyb20gJy4uL2NvdW50cmllcy5qc29uJztcblxuLy8gQSBmdW5jdGlvbiBmb3IgY2FwaXRhbGl6aW5nIGZpcnN0IGxldHRlciBvZiB0aGUgd29yZHMgaW4gYSBzdHJpbmcuXG5jb25zdCBjYXBpdGFsaXplID0gKGRlc2NyaXB0aW9uKSA9PiBkZXNjcmlwdGlvbi5zcGxpdCgnICcpXG4gIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKCcgJyk7XG5cbmNvbnN0IGdldFBvcFBlcmNlbnRhZ2UgPSAobnVtYmVyKSA9PiBgJHtNYXRoLnJvdW5kKG51bWJlciAqIDEwMCl9JWA7XG5cbmNvbnN0IGNvbnZlcnRUb0NlbHNpdXMgPSAoa2VsdmluKSA9PiBgJHtNYXRoLnJvdW5kKGtlbHZpbiAtIDI3My4xNSl9wrBDYDtcbmNvbnN0IGNvbnZlcnRUb0ZhaHJlbmhlaXQgPSAoa2VsdmluKSA9PiBgJHtNYXRoLnJvdW5kKDEuOCAqIChrZWx2aW4gLSAyNzMuMTUpICsgMzIpfcKwRmA7XG5cbmNvbnN0IGdldFJlYWRhYmxlVGltZXN0YW1wID0gKHVuaXgpID0+IHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKHVuaXggKiAxMDAwKTtcbiAgY29uc3QgdGltZSA9IFtuZXdEYXRlLmdldFVUQ0hvdXJzKCksIG5ld0RhdGUuZ2V0VVRDTWludXRlcygpXTtcbiAgaWYgKHRpbWVbMF0gPiAxMikgdGltZS5zcGxpY2UoMCwgMSwgdGltZVswXSAtIDEyKTtcbiAgaWYgKHRpbWVbMV0gPCAxMCkgdGltZS5zcGxpY2UoMSwgMSwgYDAke3RpbWVbMV19YCk7XG4gIHJldHVybiB0aW1lLmpvaW4oJzonKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NJbmZvID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IGluZm8gPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlckluZm8obG9jYXRpb24pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpLnBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRyaWM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBjYXBpdGFsaXplKGluZm8uZGVzY3JpcHRpb24pLFxuICAgICAgcG9wOiBnZXRQb3BQZXJjZW50YWdlKGluZm8ucG9wKSxcbiAgICAgIGh1bWlkaXR5OiBgJHtpbmZvLmh1bWlkaXR5fSVgLFxuICAgICAgdmlzaWJpbGl0eTogYCR7TWF0aC5yb3VuZChpbmZvLnZpc2liaWxpdHkgLyAxMDAwKX0ga21gLFxuICAgICAgdGVtcDogY29udmVydFRvQ2Vsc2l1cyhpbmZvLnRlbXApLFxuICAgICAgZmVlbHNMaWtlOiBjb252ZXJ0VG9DZWxzaXVzKGluZm8uZmVlbHNMaWtlKSxcbiAgICAgIHdpbmRTcGVlZDogYCR7TWF0aC5yb3VuZChpbmZvLndpbmRTcGVlZCAqICgxOCAvIDUpKX0ga20vaGAsXG4gICAgICBjbG91ZENvdmVyOiBgJHtpbmZvLmNsb3VkQ292ZXJ9JWAsXG4gICAgICBzdW5yaXNlOiBgJHtnZXRSZWFkYWJsZVRpbWVzdGFtcChpbmZvLnN1bnJpc2UgKyBpbmZvLnRpbWV6b25lKX0gQU1gLFxuICAgICAgc3Vuc2V0OiBgJHtnZXRSZWFkYWJsZVRpbWVzdGFtcChpbmZvLnN1bnNldCArIGluZm8udGltZXpvbmUpfSBQTWAsXG4gICAgICBjb3VudHJ5OiBjb3VudHJpZXNbaW5mby5jb3VudHJ5XSxcbiAgICAgIGNpdHk6IGNhcGl0YWxpemUoaW5mby5jaXR5KSxcbiAgICAgIGljb246IGluZm8uaWNvbixcbiAgICB9LFxuICAgIGltcGVyaWFsOiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2FwaXRhbGl6ZShpbmZvLmRlc2NyaXB0aW9uKSxcbiAgICAgIHBvcDogZ2V0UG9wUGVyY2VudGFnZShpbmZvLnBvcCksXG4gICAgICBodW1pZGl0eTogYCR7aW5mby5odW1pZGl0eX0lYCxcbiAgICAgIHZpc2liaWxpdHk6IGAke01hdGgucm91bmQoKGluZm8udmlzaWJpbGl0eSAvIDEwMDApICogMC42MjEzNzExOSl9IG1pYCxcbiAgICAgIHRlbXA6IGNvbnZlcnRUb0ZhaHJlbmhlaXQoaW5mby50ZW1wKSxcbiAgICAgIGZlZWxzTGlrZTogY29udmVydFRvRmFocmVuaGVpdChpbmZvLmZlZWxzTGlrZSksXG4gICAgICB3aW5kU3BlZWQ6IGAke01hdGgucm91bmQoaW5mby53aW5kU3BlZWQgKiAyLjIzNjkpfSBtcGhgLFxuICAgICAgY2xvdWRDb3ZlcjogYCR7aW5mby5jbG91ZENvdmVyfSVgLFxuICAgICAgc3VucmlzZTogYCR7Z2V0UmVhZGFibGVUaW1lc3RhbXAoaW5mby5zdW5yaXNlICsgaW5mby50aW1lem9uZSl9IEFNYCxcbiAgICAgIHN1bnNldDogYCR7Z2V0UmVhZGFibGVUaW1lc3RhbXAoaW5mby5zdW5zZXQgKyBpbmZvLnRpbWV6b25lKX0gUE1gLFxuICAgICAgY291bnRyeTogY291bnRyaWVzW2luZm8uY291bnRyeV0sXG4gICAgICBjaXR5OiBjYXBpdGFsaXplKGluZm8uY2l0eSksXG4gICAgICBpY29uOiBpbmZvLmljb24sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3NJbmZvO1xuIiwiaW1wb3J0IHByb2Nlc3NJbmZvIGZyb20gJy4vcHJvY2Vzc0luZm8nO1xuaW1wb3J0IGljb25zIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9pY29ucyc7XG5pbXBvcnQgc2VhcmNoU1ZHIGZyb20gJy4uL2Fzc2V0cy9zZWFyY2gtc3ZnL3NlYXJjaC1kZWZhdWx0LnN2Zyc7XG5cbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jaXR5XScpO1xuY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWljb25dJyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlc2NyaXB0aW9uXScpO1xuY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcF0nKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaHVtaWRpdHldJyk7XG5jb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdmlzaWJpbGl0eV0nKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZW1wXScpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmVlbHMtbGlrZV0nKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXdpbmQtc3BlZWRdJyk7XG5jb25zdCBjbG91ZENvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2xvdWQtY292ZXJdJyk7XG5jb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3VucmlzZV0nKTtcbmNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN1bnNldF0nKTtcbmNvbnN0IGltZ1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlYXJjaC1zdmddJyk7XG5cbmltZ1NlYXJjaC5zcmMgPSBzZWFyY2hTVkc7XG5cbmNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XG4gIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3Bpbm5lci5jbGFzc05hbWUgPSAnc3Bpbm5lcic7XG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQoc3Bpbm5lcik7XG4gIG1haW4uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59O1xuXG5jb25zdCByZW1vdmVMb2FkaW5nQW5pbWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbn07XG5cbmNvbnN0IHJlbmRlcldlYXRoZXJJbmZvID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHsgbWV0cmljIH0gPSBhd2FpdCBwcm9jZXNzSW5mbyhsb2NhdGlvbik7XG5cbiAgY2l0eS50ZXh0Q29udGVudCA9IGAke21ldHJpYy5jaXR5fSwgJHttZXRyaWMuY291bnRyeX1gO1xuICBpY29uLnNyYyA9IGljb25zW21ldHJpYy5pY29uXTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG1ldHJpYy5kZXNjcmlwdGlvbik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWV0cmljLmRlc2NyaXB0aW9uO1xuICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gbWV0cmljLnBvcDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBtZXRyaWMuaHVtaWRpdHk7XG4gIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBtZXRyaWMudmlzaWJpbGl0eTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IG1ldHJpYy50ZW1wO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgICR7bWV0cmljLmZlZWxzTGlrZX1gO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBtZXRyaWMud2luZFNwZWVkO1xuICBjbG91ZENvdmVyLnRleHRDb250ZW50ID0gbWV0cmljLmNsb3VkQ292ZXI7XG4gIHN1bnJpc2UudGV4dENvbnRlbnQgPSBtZXRyaWMuc3VucmlzZTtcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gbWV0cmljLnN1bnNldDtcblxuICByZW1vdmVMb2FkaW5nQW5pbWF0aW9uKCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJXZWF0aGVySW5mbywgbG9hZGluZ0FuaW1hdGlvbiB9O1xuIiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9jbGllbnRMb2NhdGlvbic7XG5cbmNvbnN0IGdldEN1cnJlbnRXZWF0aGVySW5mbyA9IChsb2NhdGlvbikgPT4ge1xuICBjb25zdCBhcHBJRCA9ICdhODY0YjMwNTdkMzY2ZjAzMTJlMzZjZWJkNzRjNzA3Nyc7XG5cbiAgY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHthcHBJRH1gKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEZvcmVjYXN0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHthcHBJRH1gKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFdlYXRoZXJJbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChbZ2V0V2VhdGhlckRhdGEoKSwgZ2V0Rm9yZWNhc3REYXRhKCldKTtcblxuICAgIGNvbnN0IFt3ZWF0aGVyRGF0YSwgZm9yZWNhc3REYXRhXSA9IGRhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBwb3A6IGZvcmVjYXN0RGF0YS5saXN0WzBdLnBvcCxcbiAgICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5LFxuICAgICAgdmlzaWJpbGl0eTogd2VhdGhlckRhdGEudmlzaWJpbGl0eSxcbiAgICAgIHRlbXA6IHdlYXRoZXJEYXRhLm1haW4udGVtcCxcbiAgICAgIGZlZWxzTGlrZTogd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgd2luZFNwZWVkOiB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkLFxuICAgICAgY2xvdWRDb3Zlcjogd2VhdGhlckRhdGEuY2xvdWRzLmFsbCxcbiAgICAgIHN1bnJpc2U6IHdlYXRoZXJEYXRhLnN5cy5zdW5yaXNlLFxuICAgICAgc3Vuc2V0OiB3ZWF0aGVyRGF0YS5zeXMuc3Vuc2V0LFxuICAgICAgY291bnRyeTogd2VhdGhlckRhdGEuc3lzLmNvdW50cnksXG4gICAgICB0aW1lem9uZTogd2VhdGhlckRhdGEudGltZXpvbmUsXG4gICAgICBjaXR5OiB3ZWF0aGVyRGF0YS5uYW1lLFxuICAgICAgaWNvbjogd2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIGdldFdlYXRoZXJJbmZvKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDdXJyZW50V2VhdGhlckluZm87XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBEb2N1bWVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShodG1sKSB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEVkZ2UsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuNjdlbTtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC42N2VtO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBuZXN0ZWQgbGlzdHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkbCwgb2wsIHVsKSA6d2hlcmUoZGwsIG9sLCB1bCkge1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoaHIpIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShwcmUpIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShhYmJyW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGIsIHN0cm9uZykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBUYWJ1bGFyIGRhdGFcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAyLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGFibGUpIHtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvKiAxICovXFxuICB0ZXh0LWluZGVudDogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gY29udHJvbHMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24pIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dDppcyhbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShwcm9ncmVzcykge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGV4dGFyZWEpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC41NDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgdXBsb2FkIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgb2YgZm9jdXMgb3V0bGluZXMgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dDppcyhbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pKTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBvdXRsaW5lIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0OmlzKFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwiY29sb3JcXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkpOjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYWRkaXRpb25hbCA6aW52YWxpZCBzdHlsZXMgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoOi1tb3otdWktaW52YWxpZCkge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IHN0eWxlcyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRpYWxvZykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG46d2hlcmUoZGlhbG9nOm5vdChbb3Blbl0pKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc3VtbWFyeSkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGNzc3Rvb2xzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsY0FBYyxFQUFFLE1BQU07RUFDdEIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsMEJBQTBCO0VBQzFCLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRG9jdW1lbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoaHRtbCkge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBFZGdlLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjY3ZW07XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNjdlbTtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gbmVzdGVkIGxpc3RzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGwsIG9sLCB1bCkgOndoZXJlKGRsLCBvbCwgdWwpIHtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGhyKSB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUocHJlKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYWJiclt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShiLCBzdHJvbmcpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShjb2RlLCBrYmQsIHNhbXApIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHNtYWxsKSB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogVGFidWxhciBkYXRhXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKHRhYmxlKSB7XFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMSAqL1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogRm9ybXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIGNvbnRyb2xzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uKSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQ6aXMoW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUocHJvZ3Jlc3MpIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShzZWxlY3QpIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKHRleHRhcmVhKSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgdGV4dCBzdHlsZSBvZiBwbGFjZWhvbGRlcnMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIHVwbG9hZCBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIG9mIGZvY3VzIG91dGxpbmVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQ6aXMoW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJjb2xvclxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSk6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgb3V0bGluZSBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dDppcyhbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pKTo6LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGFkZGl0aW9uYWwgOmludmFsaWQgc3R5bGVzIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKDotbW96LXVpLWludmFsaWQpIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzdHlsZXMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkaWFsb2cpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuOndoZXJlKGRpYWxvZzpub3QoW29wZW5dKSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHN1bW1hcnkpIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvQGNzc3Rvb2xzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9Db21mb3J0YWEtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9MaW1lbGlnaHQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogY29tZm9ydGFhO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBsaW1lbGlnaHQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNhYzRiYTg7XFxufVxcblxcbmE6dmlzaXRlZCB7IGNvbG9yOiAjODMzOTgwOyB9XFxuXFxuLyogcmdiKDI1LCAyNSwgODQpXFxucmdiKDQzLCAyNSwgODgpICovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDE1LCA3NSk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg0cmVtICsgODB2dyksIDk2MHB4KTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGNsYW1wKDMzNnB4LCBjYWxjKDFyZW0gKyA3NXZoKSwgMTA4MHB4KTtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbnNwYW4geyBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC4yNXJlbSArIDIuNXZ3KSwgMS41cmVtKTtcXG4gIGZvbnQtZmFtaWx5OiBsaW1lbGlnaHQ7XFxuICBtYXJnaW4tYmxvY2s6IGNsYW1wKDAuNXJlbSwgY2FsYygwLjFyZW0gKyAydmgpLCAycmVtKTtcXG4gIG1hcmdpbi1pbmxpbmU6IDAuMjVyZW07XFxuICBjb2xvcjogcmdiKDE4MCwgMTgwLCAyNDApO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC43NXJlbSwgY2FsYygwLjI1cmVtICsgNHZ3KSwgMnJlbSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMyB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5oNCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41KTtcXG59XFxuXFxucCB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVdlYXRoZXIgSW5mb3JtYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbi50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlclxcbn1cXG5cXG4udGVtcCB7IGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgY2FsYyg0cmVtICsgNHZ3KSwgOHJlbSk7IH1cXG5cXG4uZmVlbHMtbGlrZSB7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgY2FsYygwLjVyZW0gKyAydncpLCAxcmVtKTtcXG4gIGNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNSk7XFxufVxcblxcbi5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg2cmVtICsgNzB2dyksIDUwMHB4KTtcXG59XFxuXFxuLmltcG9ydGFudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBlcmNlbnRhZ2Uge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICB3aWR0aDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3JlbTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLFxcbi5jaGFuY2Uge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIGNhbGMoMC41cmVtICsgMi41dncpLCAxLjVyZW0pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9yZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgcm93LWdhcDogY2xhbXAoMC41cmVtLCBjYWxjKDAuMjVyZW0gKyAyLjV2aCksIDJyZW0pO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIGNhbGMoMC4yNXJlbSArIDN2dyksIDEuMXJlbSk7XFxuICB3aWR0aDogY2xhbXAoMzE4cHgsIGNhbGMoNnJlbSArIDcwdncpLCA3MjBweCk7XFxufVxcblxcbi5tb3JlLWluZm8gPiBkaXYgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNlYXJjaCBiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgY2FsYygwLjI1cmVtICsgM3Z3KSwgMS4ycmVtKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBwYWRkaW5nLWJsb2NrOiBjbGFtcCgwLjVyZW0sIGNhbGMoMC4yNXJlbSArIDN2dyksIDAuNzVyZW0pO1xcbiAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDEwLCA0MCk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIHdpZHRoOiBjbGFtcCgyNDBweCwgY2FsYygxcmVtICsgNzB2dyksIDM2MHB4KTtcXG59XFxuXFxuLnNlYXJjaC1zdmcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBoZWlnaHQ6IGNsYW1wKDFyZW0sIGNhbGMoMC4yNXJlbSArIDEwdncpLCAxLjNyZW0pO1xcbiAgd2lkdGg6IGNsYW1wKDFyZW0sIGNhbGMoMC4yNXJlbSArIDEwdncpLCAxLjNyZW0pO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgd2lkdGg6IDFyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLyogPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Mb2FkaW5nIEFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGNsYW1wKDI4MHB4LCBjYWxjKDFyZW0gKyA1MHZoKSwgOTYwcHgpO1xcbiAgd2lkdGg6IGNsYW1wKDMxOHB4LCBjYWxjKDRyZW0gKyA4MHZ3KSwgOTYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNSwgNzUpO1xcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICB3aWR0aDogNnJlbTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogNnB4IHNvbGlkIGFsaWNlYmx1ZTtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYigzNSwgMTUsIDc1KTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBNkM7RUFDN0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFnRDtFQUNoRCxrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLFlBQVksY0FBYyxFQUFFOztBQUU1QjtpQkFDaUI7QUFDakI7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTs7Ozs7T0FLTyxlQUFlLEVBQUU7O0FBRXhCO0VBQ0Usd0RBQXdEO0VBQ3hELHNCQUFzQjtFQUN0QixxREFBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxLQUFLLGdCQUFnQixFQUFFOztBQUV2QjtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7O0FBRUEsSUFBSSxnQkFBZ0IsRUFBRTs7QUFFdEIsNEVBQTRFO0FBQzVFO0VBQ0UsYUFBYTtFQUNiO0FBQ0Y7O0FBRUEsUUFBUSw4Q0FBOEMsRUFBRTs7QUFFeEQ7RUFDRSxrREFBa0Q7RUFDbEQsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysc0RBQXNEO0VBQ3RELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbURBQW1EO0VBQ25ELHFEQUFxRDtFQUNyRCw2Q0FBNkM7QUFDL0M7O0FBRUEsbUJBQW1CLGtCQUFrQixFQUFFOztBQUV2QyxtRUFBbUU7QUFDbkU7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscURBQXFEO0VBQ3JELFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMERBQTBEO0VBQzFELG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUEsMEVBQTBFOztBQUUxRTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5Qyw2Q0FBNkM7RUFDN0MsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogY29tZm9ydGFhO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0NvbWZvcnRhYS1Cb2xkLnR0ZicpO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBsaW1lbGlnaHQ7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvTGltZWxpZ2h0LVJlZ3VsYXIudHRmJyk7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufTtcXG5cXG5AaW1wb3J0ICd+QGNzc3Rvb2xzL25vcm1hbGl6ZS5jc3MnO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNhYzRiYTg7XFxufVxcblxcbmE6dmlzaXRlZCB7IGNvbG9yOiAjODMzOTgwOyB9XFxuXFxuLyogcmdiKDI1LCAyNSwgODQpXFxucmdiKDQzLCAyNSwgODgpICovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDE1LCA3NSk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg0cmVtICsgODB2dyksIDk2MHB4KTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGNsYW1wKDMzNnB4LCBjYWxjKDFyZW0gKyA3NXZoKSwgMTA4MHB4KTtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbnNwYW4geyBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDAuNzVyZW0sIGNhbGMoMC4yNXJlbSArIDIuNXZ3KSwgMS41cmVtKTtcXG4gIGZvbnQtZmFtaWx5OiBsaW1lbGlnaHQ7XFxuICBtYXJnaW4tYmxvY2s6IGNsYW1wKDAuNXJlbSwgY2FsYygwLjFyZW0gKyAydmgpLCAycmVtKTtcXG4gIG1hcmdpbi1pbmxpbmU6IDAuMjVyZW07XFxuICBjb2xvcjogcmdiKDE4MCwgMTgwLCAyNDApO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMC43NXJlbSwgY2FsYygwLjI1cmVtICsgNHZ3KSwgMnJlbSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMyB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG5oNCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC41KTtcXG59XFxuXFxucCB7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVdlYXRoZXIgSW5mb3JtYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbi50ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlclxcbn1cXG5cXG4udGVtcCB7IGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgY2FsYyg0cmVtICsgNHZ3KSwgOHJlbSk7IH1cXG5cXG4uZmVlbHMtbGlrZSB7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgY2FsYygwLjVyZW0gKyAydncpLCAxcmVtKTtcXG4gIGNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNSk7XFxufVxcblxcbi5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHdpZHRoOiBjbGFtcCgzMThweCwgY2FsYyg2cmVtICsgNzB2dyksIDUwMHB4KTtcXG59XFxuXFxuLmltcG9ydGFudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBlcmNlbnRhZ2Uge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICB3aWR0aDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3JlbTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLFxcbi5jaGFuY2Uge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIGNhbGMoMC41cmVtICsgMi41dncpLCAxLjVyZW0pO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9yZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgcm93LWdhcDogY2xhbXAoMC41cmVtLCBjYWxjKDAuMjVyZW0gKyAyLjV2aCksIDJyZW0pO1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIGNhbGMoMC4yNXJlbSArIDN2dyksIDEuMXJlbSk7XFxuICB3aWR0aDogY2xhbXAoMzE4cHgsIGNhbGMoNnJlbSArIDcwdncpLCA3MjBweCk7XFxufVxcblxcbi5tb3JlLWluZm8gPiBkaXYgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4vKiA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNlYXJjaCBiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPiAqL1xcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgY2FsYygwLjI1cmVtICsgM3Z3KSwgMS4ycmVtKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBwYWRkaW5nLWJsb2NrOiBjbGFtcCgwLjVyZW0sIGNhbGMoMC4yNXJlbSArIDN2dyksIDAuNzVyZW0pO1xcbiAgcGFkZGluZy1pbmxpbmU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDEwLCA0MCk7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMTtcXG4gIHdpZHRoOiBjbGFtcCgyNDBweCwgY2FsYygxcmVtICsgNzB2dyksIDM2MHB4KTtcXG59XFxuXFxuLnNlYXJjaC1zdmcge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBoZWlnaHQ6IGNsYW1wKDFyZW0sIGNhbGMoMC4yNXJlbSArIDEwdncpLCAxLjNyZW0pO1xcbiAgd2lkdGg6IGNsYW1wKDFyZW0sIGNhbGMoMC4yNXJlbSArIDEwdncpLCAxLjNyZW0pO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgd2lkdGg6IDFyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLyogPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Mb2FkaW5nIEFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+ICovXFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGNsYW1wKDI4MHB4LCBjYWxjKDFyZW0gKyA1MHZoKSwgOTYwcHgpO1xcbiAgd2lkdGg6IGNsYW1wKDMxOHB4LCBjYWxjKDRyZW0gKyA4MHZ3KSwgOTYwcHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxNSwgNzUpO1xcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICB3aWR0aDogNnJlbTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogNnB4IHNvbGlkIGFsaWNlYmx1ZTtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYigzNSwgMTUsIDc1KTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyV2VhdGhlckluZm8sIGxvYWRpbmdBbmltYXRpb24gfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyV2VhdGhlckluZm8nO1xuaW1wb3J0IHsgZ2V0Q2xpZW50TG9jYXRpb24gfSBmcm9tICcuL21vZHVsZXMvY2xpZW50TG9jYXRpb24nO1xuaW1wb3J0IHNlYXJjaFdoaXRlIGZyb20gJy4vYXNzZXRzL3NlYXJjaC1zdmcvc2VhcmNoLXdoaXRlLnN2Zyc7XG5pbXBvcnQgc2VhcmNoRGVmYXVsdCBmcm9tICcuL2Fzc2V0cy9zZWFyY2gtc3ZnL3NlYXJjaC1kZWZhdWx0LnN2Zyc7XG5pbXBvcnQgY2xlYXJTVkcgZnJvbSAnLi9hc3NldHMvc2VhcmNoLXN2Zy9jbGVhci13aGl0ZS5zdmcnO1xuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcbmNvbnN0IGltZ1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlYXJjaC1zdmddJyk7XG5jb25zdCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNsZWFyXScpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBsb2FkaW5nQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgZ2V0Q2xpZW50TG9jYXRpb24oKTtcbiAgcmVuZGVyV2VhdGhlckluZm8obG9jYXRpb24pO1xuICBzZWFyY2gudmFsdWUgPSAnJztcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxvYWRpbmdBbmltYXRpb24oKTtcbiAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2gudmFsdWU7XG4gIHJlbmRlcldlYXRoZXJJbmZvKGxvY2F0aW9uKTtcbiAgc2VhcmNoLnBsYWNlaG9sZGVyID0gJ1NlYXJjaGluZy4uLic7XG4gIHNlYXJjaC52YWx1ZSA9ICcnO1xuICBjbGVhci5zcmMgPSAnJztcbiAgY2xlYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuICBjbGVhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgc2VhcmNoLmJsdXIoKTtcbn0pO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gIGltZ1NlYXJjaC5zcmMgPSBzZWFyY2hXaGl0ZTtcbn0pO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgaW1nU2VhcmNoLnNyYyA9IHNlYXJjaERlZmF1bHQ7XG59KTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBjbGVhci5zcmMgPSBjbGVhclNWRztcbiAgY2xlYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTZweCcpO1xuICBjbGVhci5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzE2cHgnKTtcbiAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2VhcmNoLnZhbHVlID0gJyc7XG4gICAgY2xlYXIuc3JjID0gJyc7XG4gICAgY2xlYXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuICAgIGNsZWFyLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIHNlYXJjaC5mb2N1cygpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbImNsZWFyU2t5RGF5IiwiY2xlYXJTa3lOaWdodCIsImZld0Nsb3Vkc0RheSIsImZld0Nsb3Vkc05pZ2h0Iiwic2NhdHRlcmVkQ2xvdWRzRGF5Iiwic2NhdHRlcmVkQ2xvdWRzTmlnaHQiLCJicm9rZW5DbG91ZHNEYXkiLCJicm9rZW5DbG91ZHNOaWdodCIsInNob3dlclJhaW5EYXkiLCJzaG93ZXJSYWluTmlnaHQiLCJyYWluRGF5IiwicmFpbk5pZ2h0IiwidGh1bmRlcnN0b3JtRGF5IiwidGh1bmRlcnN0b3JtTmlnaHQiLCJzbm93RGF5Iiwic25vd05pZ2h0IiwibWlzdERheSIsIm1pc3ROaWdodCIsImljb25zIiwiZmV0Y2hEYXRhIiwiZ2V0Q2xpZW50TG9jYXRpb24iLCJkYXRhIiwiY2l0eSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJnZXRDdXJyZW50V2VhdGhlckluZm8iLCJjb3VudHJpZXMiLCJjYXBpdGFsaXplIiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImdldFBvcFBlcmNlbnRhZ2UiLCJudW1iZXIiLCJNYXRoIiwicm91bmQiLCJjb252ZXJ0VG9DZWxzaXVzIiwia2VsdmluIiwiY29udmVydFRvRmFocmVuaGVpdCIsImdldFJlYWRhYmxlVGltZXN0YW1wIiwidW5peCIsIm5ld0RhdGUiLCJEYXRlIiwidGltZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsInNwbGljZSIsInByb2Nlc3NJbmZvIiwibG9jYXRpb24iLCJpbmZvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJtZXRyaWMiLCJwb3AiLCJodW1pZGl0eSIsInZpc2liaWxpdHkiLCJ0ZW1wIiwiZmVlbHNMaWtlIiwid2luZFNwZWVkIiwiY2xvdWRDb3ZlciIsInN1bnJpc2UiLCJ0aW1lem9uZSIsInN1bnNldCIsImNvdW50cnkiLCJpY29uIiwiaW1wZXJpYWwiLCJzZWFyY2hTVkciLCJwcmVjaXBpdGF0aW9uIiwiaW1nU2VhcmNoIiwic3JjIiwibG9hZGluZ0FuaW1hdGlvbiIsIm1haW4iLCJvdmVybGF5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNwaW5uZXIiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUxvYWRpbmdBbmltYXRpb24iLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInJlbmRlcldlYXRoZXJJbmZvIiwidGV4dENvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBJRCIsImdldFdlYXRoZXJEYXRhIiwiZ2V0Rm9yZWNhc3REYXRhIiwiZ2V0V2VhdGhlckluZm8iLCJQcm9taXNlIiwiYWxsIiwid2VhdGhlckRhdGEiLCJmb3JlY2FzdERhdGEiLCJ3ZWF0aGVyIiwibGlzdCIsImZlZWxzX2xpa2UiLCJ3aW5kIiwic3BlZWQiLCJjbG91ZHMiLCJzeXMiLCJuYW1lIiwic2VhcmNoV2hpdGUiLCJzZWFyY2hEZWZhdWx0IiwiY2xlYXJTVkciLCJzZWFyY2giLCJjbGVhciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJibHVyIiwiZm9jdXMiXSwic291cmNlUm9vdCI6IiJ9