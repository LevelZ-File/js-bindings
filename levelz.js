(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Block", {
  enumerable: true,
  get: function get() {
    return _block["default"];
  }
});
Object.defineProperty(exports, "Coordinate", {
  enumerable: true,
  get: function get() {
    return _coordinate["default"];
  }
});
Object.defineProperty(exports, "Coordinate2D", {
  enumerable: true,
  get: function get() {
    return _coordinate["default"];
  }
});
Object.defineProperty(exports, "Coordinate3D", {
  enumerable: true,
  get: function get() {
    return _coordinate["default"];
  }
});
Object.defineProperty(exports, "LevelObject", {
  enumerable: true,
  get: function get() {
    return _object["default"];
  }
});
var _coordinate = _interopRequireDefault(require("./src/coordinate.js"));
var _block = _interopRequireDefault(require("./src/block.js"));
var _object = _interopRequireDefault(require("./src/object.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./src/block.js":2,"./src/coordinate.js":3,"./src/object.js":4}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _properties = /*#__PURE__*/new WeakMap();
/**
 * Represents a Block in a level.
 * @classdesc Block in LevelZ World
 */
var Block = exports.Block = /*#__PURE__*/function () {
  /**
   * Constructs a new Block.
   * @param {string} name Name of the block
   * @param {Map<string, any>} properties Properties of the block
   */
  function Block(name, properties) {
    _classCallCheck(this, Block);
    /**
     * The name of this block.
     * @type {string}
     */
    _defineProperty(this, "name", void 0);
    /**
     * @private
     */
    _classPrivateFieldInitSpec(this, _properties, {});
    this.name = name;
    this.properties = properties;
  }

  /**
   * Gets the properties of this block.
   * @returns {Map<string, any>} The properties of this block.
   */
  return _createClass(Block, [{
    key: "properties",
    get: function get() {
      return structuredClone(_classPrivateFieldGet(_properties, this));
    }

    /**
     * Returns the string representation of this block.
     * @returns {string} The string representation of this block.
     */
  }, {
    key: "toString",
    value: function toString() {
      var str = "".concat(this.name, "<");
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_properties, this)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          str += "".concat(key, "=").concat(value, ", ");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      str.slice(0, -2);
      return str + '>';
    }
  }]);
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Coordinate3D = exports.Coordinate2D = exports.Coordinate = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents an abstract Coordinate.
 * @abstract
 * @classdesc Abstract Coordinate for representation purposes
 */
var Coordinate = exports.Coordinate = /*#__PURE__*/function () {
  function Coordinate() {
    _classCallCheck(this, Coordinate);
    if ((this instanceof Coordinate ? this.constructor : void 0) === Coordinate) throw new TypeError('Cannot instantiate abstract class');
  }

  /**
   * Returns the magnitude of this Coordinate.
   * @returns {number} The magnitude of this Coordinate.
   */
  return _createClass(Coordinate, [{
    key: "magnitude",
    get: function get() {
      throw new Error('Abstract method');
    }
  }]);
}();
/**
 * Represents a 2D Coordinate.
 * @classdesc 2D Coordinates in LevelZ
 */
var Coordinate2D = exports.Coordinate2D = /*#__PURE__*/function (_Coordinate) {
  /**
   * Constructs a new 2D Coordinate.
   * @constructor
   * @param {number} x The X Value
   * @param {number} y The Y Value
   */
  function Coordinate2D(x, y) {
    var _this;
    _classCallCheck(this, Coordinate2D);
    _this = _callSuper(this, Coordinate2D);
    /**
     * The X value for this 2D Coordinate.
     * @type {number}
     */
    _defineProperty(_this, "x", void 0);
    /**
     * The Y value for this 2D Coordinate.
     * @type {number}
     */
    _defineProperty(_this, "y", void 0);
    if (typeof x !== 'number' || typeof y !== 'number') throw new SyntaxError('Invalid input');
    _this.x = x;
    _this.y = y;
    return _this;
  }
  _inherits(Coordinate2D, _Coordinate);
  return _createClass(Coordinate2D, [{
    key: "magnitude",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Returns the string representation of this 2D Coordinate.
     * @returns {string} The string representation of this 2D Coordinate.
     */
  }, {
    key: "toString",
    value: function toString() {
      return "[".concat(this.x, ", ").concat(this.y, "]");
    }

    // Statics

    /**
     * Returns a new 2D Coordinate with X and Y at `0`.
     * @static
     * @returns {Coordinate2D} The 2D Coordinate
     */
  }], [{
    key: "zero",
    get: function get() {
      return new Coordinate2D(0, 0);
    }

    /**
     * Converts a string to a 2D Coordinate.
     * @static
     * @param {string} str The string to convert 
     * @returns {Coordinate2D} The 2D Coordinate
     */
  }, {
    key: "fromString",
    value: function fromString(str) {
      if (typeof str !== 'string') throw new SyntaxError('Invalid input');
      var values = str.substring(1, str.length - 1).split(',');
      return new Coordinate2D(Number(values[0].trim()), Number(values[1].trim()));
    }
  }]);
}(Coordinate);
/**
 * Represents a 3D Coordinate.
 * @classdesc 3D Coordinates in LevelZ
 */
var Coordinate3D = exports.Coordinate3D = /*#__PURE__*/function (_Coordinate2) {
  /**
   * Constructs a new 3D Coordinate.
   * @param {number} x The X Value
   * @param {number} y The Y Value
   * @param {number} z The Z Value 
   */
  function Coordinate3D(x, y, z) {
    var _this2;
    _classCallCheck(this, Coordinate3D);
    _this2 = _callSuper(this, Coordinate3D);
    /**
     * The X value for this 3D Coordinate.
     * @type {number}
     */
    _defineProperty(_this2, "x", void 0);
    /**
     * The Y value for this 3D Coordinate.
     * @type {number}
     */
    _defineProperty(_this2, "y", void 0);
    /**
     * The Z value for this 3D Coordinate.
     * @type {number}
     */
    _defineProperty(_this2, "z", void 0);
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') throw new SyntaxError('Invalid input');
    _this2.x = x;
    _this2.y = y;
    _this2.z = z;
    return _this2;
  }
  _inherits(Coordinate3D, _Coordinate2);
  return _createClass(Coordinate3D, [{
    key: "magnitude",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Returns the string representation of this 3D Coordinate.
     * @returns {string} The string representation of this 3D Coordinate.
     */
  }, {
    key: "toString",
    value: function toString() {
      return "[".concat(this.x, ", ").concat(this.y, ", ").concat(this.z, "]");
    }

    // Statics

    /**
     * Returns a new 3D Coordinate with X, Y and Z at `0`.
     * @static
     * @returns {Coordinate3D} The 3D Coordinate
     */
  }], [{
    key: "zero",
    get: function get() {
      return new Coordinate3D(0, 0, 0);
    }

    /**
     * Converts a string to a 3D Coordinate.
     * @static
     * @param {string} str The string to convert 
     * @returns {Coordinate3D} The 3D Coordinate
     */
  }, {
    key: "fromString",
    value: function fromString(str) {
      if (typeof str !== 'string') throw new SyntaxError('Invalid input');
      var values = str.substring(1, str.length - 1).split(',');
      return new Coordinate3D(Number(values[0].trim()), Number(values[1].trim()), Number(values[2].trim()));
    }
  }]);
}(Coordinate);

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LevelObject = void 0;
var _coordinate = require("./coordinate.js");
var _block = require("./block.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Utility Object for representing a Level Block and its Coordinate.
 * @classdesc Coordinate and Block in LevelZ World
 */
var LevelObject = exports.LevelObject = /*#__PURE__*/function () {
  /**
   * Constructs a new LevelObject.
   * @constructor
   * @param {Block} block The Block
   * @param {Coordinate} coordinate The Coordinate
   */
  function LevelObject(block, coordinate) {
    _classCallCheck(this, LevelObject);
    /**
     * The Block of this LevelObject.
     * @type {Block}
     */
    _defineProperty(this, "block", void 0);
    /**
     * The Coordinate of this LevelObject.
     * @type {Coordinate}
     */
    _defineProperty(this, "coordinate", void 0);
    this.block = block;
    this.coordinate = coordinate;
  }

  /**
   * Returns the string representation of this LevelObject.
   * @returns {string} The string representation of this LevelObject.
   */
  return _createClass(LevelObject, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.block.toString(), ": ").concat(this.coordinate.toString());
    }
  }]);
}();

},{"./block.js":2,"./coordinate.js":3}]},{},[1])
//# sourceMappingURL=levelz.js.map