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
Object.defineProperty(exports, "Dimension", {
  enumerable: true,
  get: function get() {
    return _coordinate["default"];
  }
});
Object.defineProperty(exports, "Level", {
  enumerable: true,
  get: function get() {
    return _level["default"];
  }
});
Object.defineProperty(exports, "Level2D", {
  enumerable: true,
  get: function get() {
    return _level["default"];
  }
});
Object.defineProperty(exports, "Level3D", {
  enumerable: true,
  get: function get() {
    return _level["default"];
  }
});
Object.defineProperty(exports, "LevelBuilder", {
  enumerable: true,
  get: function get() {
    return _builder["default"];
  }
});
Object.defineProperty(exports, "LevelObject", {
  enumerable: true,
  get: function get() {
    return _block["default"];
  }
});
Object.defineProperty(exports, "Scroll", {
  enumerable: true,
  get: function get() {
    return _level["default"];
  }
});
Object.defineProperty(exports, "parseLevel", {
  enumerable: true,
  get: function get() {
    return _parser["default"];
  }
});
var _coordinate = _interopRequireDefault(require("./src/coordinate.js"));
var _block = _interopRequireDefault(require("./src/block.js"));
var _level = _interopRequireDefault(require("./src/level.js"));
var _builder = _interopRequireDefault(require("./src/builder.js"));
var _parser = _interopRequireDefault(require("./src/parser.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }

},{"./src/block.js":2,"./src/builder.js":3,"./src/coordinate.js":4,"./src/level.js":5,"./src/parser.js":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LevelObject = exports.Block = void 0;
var _coordinate = require("./coordinate.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents a Block in a level.
 * @classdesc Block in LevelZ World
 */
var Block = exports.Block = /*#__PURE__*/function () {
  /**
   * Constructs a new Block.
   * @param {string} name Name of the block
   * @param {Map<string, any>|Object.<string, any>} [properties] Properties of the block
   * @example
   * new Block('grass', new Map([['snowy', false]]))
   * new Block('grass', {'snowy': false})
   */
  function Block(name, properties) {
    var _this = this;
    _classCallCheck(this, Block);
    /**
     * The name of this block.
     * @type {string}
     */
    _defineProperty(this, "name", void 0);
    /**
     * The properties of this block.
     * @type {Map<string, any>}
     */
    _defineProperty(this, "properties", new Map());
    this.name = name;
    if (properties) {
      if (properties instanceof Map) properties.forEach(function (value, key) {
        _this.properties.set(key, value);
      });else for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        this.properties.set(key, value);
      }
    }
  }

  /**
   * Returns the string representation of this block.
   * @returns {string} The string representation of this block.
   * @example
   * grass<snowy=false>
   */
  return _createClass(Block, [{
    key: "toString",
    value: function toString() {
      var str = "".concat(this.name);
      if (this.properties.size == 0) return str;
      str += '<';
      var _iterator = _createForOfIteratorHelper(this.properties),
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
      str = str.slice(0, -2);
      return str + '>';
    }
  }]);
}();
/**
 * Utility Object for representing a Level Block and its Coordinate.
 * @classdesc Coordinate and Block in LevelZ World
 */
var LevelObject = exports.LevelObject = /*#__PURE__*/function () {
  /**
   * Constructs a new LevelObject.
   * @constructor
   * @param {Block|string} block The Block
   * @param {Coordinate|number[]} coordinate The Coordinate
   * @example
   * new LevelObject(new Block('block'), new Coordinate2D(1, 2))
   * @example
   * new LevelObject('block', [1, 2])
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
    if (coordinate instanceof Array) {
      if (coordinate.length == 2) coordinate = new _coordinate.Coordinate2D(coordinate[0], coordinate[1]);else if (coordinate.length == 3) coordinate = new _coordinate.Coordinate3D(coordinate[0], coordinate[1], coordinate[2]);
    }
    if (typeof block === 'string') block = new Block(block);
    if (!(block instanceof Block) || !(coordinate instanceof _coordinate.Coordinate)) throw new SyntaxError('Invalid input');
    this.block = block;
    this.coordinate = coordinate;
  }

  /**
   * Gets the name of the block.
   * @returns {string} The name of the block.
   */
  return _createClass(LevelObject, [{
    key: "name",
    get: function get() {
      return this.block.name;
    }

    /**
     * Gets the properties of the block.
     * @returns {Map<string, any>} The properties of the block.
     */
  }, {
    key: "properties",
    get: function get() {
      return this.block.properties;
    }

    /**
     * Returns the string representation of this LevelObject.
     * @returns {string} The string representation of this LevelObject.
     * @example
     * block<property=value>: [x, y]
     */
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.block.toString(), ": ").concat(this.coordinate.toString());
    }
  }]);
}();

},{"./coordinate.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LevelBuilder = void 0;
var _block2 = require("./block.js");
var _coordinate = require("./coordinate.js");
var _level = require("./level.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents a builder for creating LevelZ Levels.
 * @classdesc Level Builder for LevelZ
 */
var LevelBuilder = exports.LevelBuilder = /*#__PURE__*/function () {
  /**
   * Constructs a new Level Builder.
   * @constructs LevelBuilder
   * @param {Dimension} dimension The dimension for the level.
   * @example
   * new LevelBuilder(Dimension.TWO)
   */
  function LevelBuilder(dimension) {
    _classCallCheck(this, LevelBuilder);
    /**
     * The dimension of the level.
     * @type {number}
     */
    _defineProperty(this, "dimension", void 0);
    /**
     * The headers of the level.
     * @type {Map<string, any>}
     */
    _defineProperty(this, "headers", new Map());
    /**
     * The blocks of the level.
     * @type {Set<LevelObject>}
     */
    _defineProperty(this, "blocks", new Set());
    if (dimension !== 2 && dimension !== 3) throw new SyntaxError('Invalid dimension; must be 2 or 3');
    this.dimension = dimension;
  }

  /**
   * Sets the spawn point for the level.
   * @param {Coordinate} coordinate The coordinate to spawn the object at.
   * @throws Invalid coordinate; must be 2D or 3D (according to the {@link dimension})
   */
  return _createClass(LevelBuilder, [{
    key: "spawn",
    set: function set(coordinate) {
      if (coordinate instanceof Array) {
        if (coordinate.length !== this.dimension) throw new SyntaxError("Invalid coordinate; must be ".concat(this.dimension, "D"));
        if (this.dimension === 2) this.headers.set('spawn', new _coordinate.Coordinate2D(coordinate[0], coordinate[1]));
        if (this.dimension === 3) this.headers.set('spawn', new _coordinate.Coordinate3D(coordinate[0], coordinate[1], coordinate[2]));
        return;
      }
      if (this.dimension == 2 && !(coordinate instanceof _coordinate.Coordinate2D)) throw new SyntaxError('Invalid coordinate; must be 2D');
      if (this.dimension == 3 && !(coordinate instanceof _coordinate.Coordinate3D)) throw new SyntaxError('Invalid coordinate; must be 3D');
      this.headers.set('spawn', coordinate);
    }

    /**
     * Sets a header value.
     * @param {string} key The key of the header 
     * @param {*} value The value of the header
     */
  }, {
    key: "header",
    value: function header(key, value) {
      this.headers.set(key, value);
    }

    /**
     * Adds a Block to the level.
     * @param {LevelObject} block The level object to add to the level. 
     * @throws Invalid coordinate; must be 2D or 3D (according to the {@link dimension})
     */
  }, {
    key: "block",
    value:
    /**
     * Adds a Block to the level.
     * @param {string} name The name of the block.
     * @param {Coordinate|number[]} coordinate The coordinate of the block.
     * @param {Map<string, any>|Object.<string, any>} properties The properties of the block.
     */
    function block(name, coordinate, properties) {
      this.block(new _block2.LevelObject(new _block2.Block(name, properties), coordinate));
    }

    /**
     * Builds the level.
     * @returns {Level} The built level.
     * @example
     * LevelBuilder.create2D().block('grass', [0, 0]).build()
     */
  }, {
    key: "build",
    value: function build() {
      if (this.dimension === 2) return new _level.Level2D(this.headers, this.blocks);
      if (this.dimension === 3) return new _level.Level3D(this.headers, this.blocks);
      throw new SyntaxError('Invalid dimension; must be 2 or 3');
    }

    // Statics

    /**
     * Creates a new 2D Level Builder.
     * @returns {LevelBuilder} A new 2D Level Builder.
     */
  }], [{
    key: "create2D",
    value: function create2D() {
      return new LevelBuilder(_coordinate.Dimension.TWO);
    }

    /**
     * Creates a new 3D Level Builder.
     * @returns {LevelBuilder} A new 3D Level Builder.
     */
  }, {
    key: "create3D",
    value: function create3D() {
      return new LevelBuilder(_coordinate.Dimension.THREE);
    }
  }]);
}();

},{"./block.js":2,"./coordinate.js":4,"./level.js":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dimension = exports.Coordinate3D = exports.Coordinate2D = exports.Coordinate = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 2D or 3D space.
 * @typedef {2|3} Dimension
 */

/**
 * Represents a Dimension.
 */
var Dimension = exports.Dimension = {
  /**
   * Represents the 2D Dimension.
   * @type {Dimension}
   */
  TWO: 2,
  /**
   * Represents the 3D Dimension.
   * @type {Dimension}
   */
  THREE: 3
};

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

    /**
     * Returns the dimension of this Coordinate.
     * @returns {Dimension} The dimension of this Coordinate.
     */
  }, {
    key: "dimension",
    get: function get() {
      throw new Error('Abstract method');
    }
  }]);
}();
/**
 * Represents a 2D Coordinate.
 * @classdesc 2D Coordinates in LevelZ
 * @extends Coordinate
 */
var Coordinate2D = exports.Coordinate2D = /*#__PURE__*/function (_Coordinate) {
  /**
   * Constructs a new 2D Coordinate.
   * @constructor
   * @param {number} x The X Value
   * @param {number} y The Y Value
   * @example
   * new Coordinate2D(1, 2)
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
    if (isNaN(x) || isNaN(y)) throw new SyntaxError('Invalid input');
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
  }, {
    key: "dimension",
    get: function get() {
      return Dimension.TWO;
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
     * @throws {SyntaxError} If the string is invalid.
     * @example
     * Coordinate2D.fromString('[1, 2]')
     */
  }, {
    key: "fromString",
    value: function fromString(str) {
      if (!str || typeof str !== 'string') throw new SyntaxError('Invalid input');
      if (!str.startsWith('[') || !str.endsWith(']')) throw new SyntaxError('Invalid input');
      var values = str.substring(1, str.length - 1).split(',');
      if (values.length !== 2) throw new SyntaxError('Invalid input: 2 values expected');
      return new Coordinate2D(Number(values[0].trim()), Number(values[1].trim()));
    }
  }]);
}(Coordinate);
/**
 * Represents a 3D Coordinate.
 * @classdesc 3D Coordinates in LevelZ
 * @extends Coordinate
 */
var Coordinate3D = exports.Coordinate3D = /*#__PURE__*/function (_Coordinate2) {
  /**
   * Constructs a new 3D Coordinate.
   * @param {number} x The X Value
   * @param {number} y The Y Value
   * @param {number} z The Z Value
   * @example
   * new Coordinate3D(1, 2, 3) 
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
    if (isNaN(x) || isNaN(y) || isNaN(z)) throw new SyntaxError('Invalid input');
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
  }, {
    key: "dimension",
    get: function get() {
      return Dimension.THREE;
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
     * @example
     * Coordinate3D.fromString('[1, 2, 3]')
     */
  }, {
    key: "fromString",
    value: function fromString(str) {
      if (!str || typeof str !== 'string') throw new SyntaxError('Invalid input');
      if (!str.startsWith('[') || !str.endsWith(']')) throw new SyntaxError('Invalid input');
      var values = str.substring(1, str.length - 1).split(',');
      if (values.length !== 3) throw new SyntaxError('Invalid input: 3 values expected');
      return new Coordinate3D(Number(values[0].trim()), Number(values[1].trim()), Number(values[2].trim()));
    }
  }]);
}(Coordinate);

},{}],5:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scroll = exports.Level3D = exports.Level2D = exports.Level = void 0;
var _block = require("./block.js");
var _coordinate = require("./coordinate.js");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/**
 * Represents a LevelZ Level.
 * @abstract
 * @classdesc Abstract Level for representation purposes
 */
var _dimension = /*#__PURE__*/new WeakMap();
var Level = exports.Level = /*#__PURE__*/function () {
  function Level(dimension) {
    _classCallCheck(this, Level);
    _classPrivateFieldInitSpec(this, _dimension, void 0);
    /**
     * The headers of the level.
     * @type {Map<string, any>}
     */
    _defineProperty(this, "headers", new Map());
    /**
     * The blocks in the level.
     * @type {Set<LevelObject>}
     */
    _defineProperty(this, "blocks", new Set());
    if ((this instanceof Level ? this.constructor : void 0) === Level) throw new TypeError('Cannot instantiate abstract class');
    _classPrivateFieldSet(_dimension, this, dimension);
  }

  /**
   * The dimension of the level.
   * @type {Dimension}
   */
  return _createClass(Level, [{
    key: "dimension",
    get: function get() {
      return _classPrivateFieldGet(_dimension, this);
    }

    /**
     * Gets the spawn point of the level.
     * @returns {Coordinate} The spawn point of the level.
     */
  }, {
    key: "spawn",
    get: function get() {
      return this.headers.get('spawn');
    }

    /**
     * Gets all the coordinates of the blocks in the level.
     * @returns {Coordinate[]} The coordinates of the blocks in the level.
     */
  }, {
    key: "coordinates",
    get: function get() {
      return Array.from(this.blocks).map(function (block) {
        return block.coordinate;
      });
    }

    /**
     * Gets all the raw blocks in the level.
     * @returns {Block[]} The raw blocks in the level.
     */
  }, {
    key: "rawBlocks",
    get: function get() {
      return Array.from(this.blocks).map(function (block) {
        return block.block;
      });
    }

    /**
     * Gets the string representation of the level.
     * @returns {string} The string representation of the level.
     */
  }, {
    key: "toString",
    value: function toString() {
      var str = "@type ".concat(_classPrivateFieldGet(_dimension, this));
      var _iterator = _createForOfIteratorHelper(this.headers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];
          str += "\n@".concat(key, " ").concat(value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (this.blocks.size !== 0) {
        str += '\n---';
        var _iterator2 = _createForOfIteratorHelper(this.blocks),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var block = _step2.value;
            str += "\n".concat(block);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        str += '\nend';
      }
      return str;
    }
  }]);
}(); // 2D
/**
 * Represents a 2D Level.
 * @classdesc 2D Level in LevelZ
 * @extends Level
 */
var Level2D = exports.Level2D = /*#__PURE__*/function (_Level2) {
  /**
   * Constructs a 2D Level.
   * @constructs Level2D
   * @param {Map<string, any>|Object.<string, any>} [headers] The headers of the level 
   * @param {Set<LevelObject>|LevelObject[]} [blocks] The blocks in the level
   */
  function Level2D(headers, blocks) {
    var _this;
    _classCallCheck(this, Level2D);
    _this = _callSuper(this, Level2D, [_coordinate.Dimension.TWO]);
    if (headers) {
      if (headers instanceof Map) headers.forEach(function (value, key) {
        _this.headers.set(key, value);
      });else for (var _i = 0, _Object$entries = Object.entries(headers); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        _this.headers.set(key, value);
      }
    }
    if (blocks) {
      if (blocks instanceof Set) _this.blocks = blocks;else _this.blocks = new Set(blocks);
    }
    return _this;
  }

  /**
   * Returns the scroll direction of this 2D Level.
   * @returns {Scroll} The scroll direction
   */
  _inherits(Level2D, _Level2);
  return _createClass(Level2D, [{
    key: "scroll",
    get: function get() {
      return this.headers.get('scroll');
    }

    /**
     * Sets the scroll direction of this 2D Level.
     * @param {Scroll} value The scroll direction
     * @throws Invalid scroll direction
     */,
    set: function set(value) {
      if (value !== Scroll.NONE && value !== Scroll.HORIZONTAL_LEFT && value !== Scroll.HORIZONTAL_RIGHT && value !== Scroll.VERTICAL_UP && value !== Scroll.VERTICAL_DOWN) throw new SyntaxError('Invalid scroll direction');
      this.headers.set('scroll', value);
    }

    /**
     * Gets the spawn point of the level.
     * @returns {Coordinate2D} The spawn point of the level.
     */
  }, {
    key: "spawn",
    get: function get() {
      return _superPropGet(Level2D, "spawn", this, 1);
    }

    /**
     * Sets the spawn point for the level.
     * @param {Coordinate2D} coordinate The coordinate to spawn the object at.
     */,
    set: function set(coordinate) {
      if (coordinate instanceof Array) {
        if (coordinate.length !== 2) throw new SyntaxError('Invalid coordinate; must be 2D');
        this.headers.set('spawn', new _coordinate.Coordinate2D(coordinate[0], coordinate[1]));
        return;
      }
      if (!(coordinate instanceof _coordinate.Coordinate2D)) throw new SyntaxError('Invalid coordinate; must be 2D');
      this.headers.set('spawn', coordinate);
    }
  }]);
}(Level);
/**
 * The auto-scroll type in a 2D Level.
 * @typedef {'none'|'horizontal-left'|'horizontal-right'|'vertical-up'|'vertical-down'} Scroll
 */
/**
 * Represents the scroll direction of a 2D Level.
 */
var Scroll = exports.Scroll = {
  /**
   * No Scrolling
   * @type {Scroll}
   */
  NONE: "none",
  /**
   * Horizontal Scrolling moving Left
   * @type {Scroll}
   */
  HORIZONTAL_LEFT: "horizontal-left",
  /**
   * Horizontal Scrolling moving Right
   * @type {Scroll}
   */
  HORIZONTAL_RIGHT: "horizontal-right",
  /**
   * Vertical Scrolling moving Up
   * @type {Scroll}
   */
  VERTICAL_UP: "vertical-up",
  /**
   * Vertical Scrolling moving Down
   * @type {Scroll}
   */
  VERTICAL_DOWN: "vertical-down"
};

// 3D

/**
 * Represents a 3D Level.
 * @classdesc 3D Level in LevelZ
 * @extends Level
 */
var Level3D = exports.Level3D = /*#__PURE__*/function (_Level3) {
  /**
   * Constructs a 3D Level.
   * @constructs Level3D
   * @param {Map<string, any>|Object.<string, any>} [headers] The headers of the level 
   * @param {Set<LevelObject>|LevelObject[]} [blocks] The blocks in the level
   */
  function Level3D(headers, blocks) {
    var _this2;
    _classCallCheck(this, Level3D);
    _this2 = _callSuper(this, Level3D, [_coordinate.Dimension.THREE]);
    if (headers) {
      if (headers instanceof Map) headers.forEach(function (value, key) {
        _this2.headers.set(key, value);
      });else for (var _i2 = 0, _Object$entries2 = Object.entries(headers); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        _this2.headers.set(key, value);
      }
    }
    if (blocks) if (blocks instanceof Set) _this2.blocks = blocks;else _this2.blocks = new Set(blocks);
    return _this2;
  }

  /**
   * Gets the spawn point of the level.
   * @returns {Coordinate3D} The spawn point of the level.
   */
  _inherits(Level3D, _Level3);
  return _createClass(Level3D, [{
    key: "spawn",
    get: function get() {
      return _superPropGet(Level3D, "spawn", this, 1);
    }

    /**
     * Sets the spawn point for the level.
     * @param {Coordinate3D|number[]} coordinate The coordinate to spawn the object at.
     */,
    set: function set(coordinate) {
      if (coordinate instanceof Array) {
        if (coordinate.length !== 3) throw new SyntaxError('Invalid coordinate; must be 3D');
        this.headers.set('spawn', new _coordinate.Coordinate3D(coordinate[0], coordinate[1], coordinate[2]));
        return;
      }
      if (!(coordinate instanceof _coordinate.Coordinate3D)) throw new SyntaxError('Invalid coordinate; must be 3D');
      this.headers.set('spawn', coordinate);
    }
  }]);
}(Level);

},{"./block.js":2,"./coordinate.js":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoordinateMatrix3D = exports.CoordinateMatrix2D = exports.CoordinateMatrix = void 0;
var _coordinate = require("./coordinate.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents a coordinate matrix.
 * @abstract
 * @classdesc Abstract Coordinate Matrix for representation purposes
 */
var CoordinateMatrix = exports.CoordinateMatrix = /*#__PURE__*/function () {
  function CoordinateMatrix() {
    _classCallCheck(this, CoordinateMatrix);
    if ((this instanceof CoordinateMatrix ? this.constructor : void 0) === CoordinateMatrix) throw new TypeError('Cannot instantiate abstract class');
  }

  /**
   * Gets the iterator for this CoordinateMatrix.
   * @returns {Iterator<Coordinate>} The iterator for this CoordinateMatrix.
   */
  return _createClass(CoordinateMatrix, [{
    key: Symbol.iterator,
    value: function value() {
      return this.coordinates.values();
    }

    /**
     * Returns the dimension of this CoordinateMatrix.
     * @returns {Dimension} The dimension of this CoordinateMatrix.
     */
  }, {
    key: "dimension",
    get: function get() {
      throw new Error('Abstract method');
    }

    /**
     * Returns the coordinates of this CoordinateMatrix.
     * @returns {Array<Coordinate>} The coordinates of this CoordinateMatrix.
     */
  }, {
    key: "coordinates",
    get: function get() {
      throw new Error('Abstract method');
    }
  }]);
}();
var CoordinateMatrix2D = exports.CoordinateMatrix2D = /*#__PURE__*/function (_CoordinateMatrix) {
  /**
   * Constructs a CoordinateMatrix2D.
   * @constructor
   * @param {number} minX The minimum x value.
   * @param {number} maxX The maximum x value.
   * @param {number} minY The minimum y value.
   * @param {number} maxY The maximum y value.
   * @param {Coordinate2D} start The starting coordinate.
   * @example
   * new CoordinateMatrix2D(0, 1, 0, 1, new Coordinate2D(0, 0))
   */
  function CoordinateMatrix2D(minX, maxX, minY, maxY, start) {
    var _this;
    _classCallCheck(this, CoordinateMatrix2D);
    _this = _callSuper(this, CoordinateMatrix2D);
    /**
     * The minimum x value of this matrix.
     * @type {number}
     */
    _defineProperty(_this, "minX", void 0);
    /**
     * The maximum x value of this matrix.
     * @type {number}
     */
    _defineProperty(_this, "maxX", void 0);
    /**
     * The minimum y value of this matrix.
     * @type {number}
     */
    _defineProperty(_this, "minY", void 0);
    /**
     * The maximum y value of this matrix.
     * @type {number}
     */
    _defineProperty(_this, "maxY", void 0);
    /**
     * The starting coordinate of this matrix.
     * @type {Coordinate2D}
     */
    _defineProperty(_this, "start", void 0);
    if (minX > maxX) throw new SyntaxError("minX cannot be greater than maxX: ".concat(minX, " > ").concat(maxX));
    if (minY > maxY) throw new SyntaxError("minY cannot be greater than maxY: ".concat(minY, " > ").concat(maxY));
    _this.minX = minX;
    _this.maxX = maxX;
    _this.minY = minY;
    _this.maxY = maxY;
    _this.start = start;
    return _this;
  }
  _inherits(CoordinateMatrix2D, _CoordinateMatrix);
  return _createClass(CoordinateMatrix2D, [{
    key: "dimension",
    get: function get() {
      return _coordinate.Dimension.TWO;
    }
  }, {
    key: "coordinates",
    get: function get() {
      var coords = [];
      for (var x = this.minX; x <= this.maxX; x++) {
        for (var y = this.minY; y <= this.maxY; y++) {
          coords.push(new _coordinate.Coordinate2D(x, y));
        }
      }
      return coords;
    }

    /**
     * Gets the string representation of this CoordinateMatrix2D.
     * @returns {string} The string representation of this CoordinateMatrix2D.
     */
  }, {
    key: "toString",
    value: function toString() {
      return "(".concat(this.minX, ", ").concat(this.maxX, ", ").concat(this.minY, ", ").concat(this.maxY, ")^").concat(this.start.toString());
    }

    // Statics

    /**
     * Converts a string to a CoordinateMatrix2D.
     * @static
     * @param {string} str The string to convert. 
     * @returns {CoordinateMatrix2D} The parsed CoordinateMatrix2D.
     * @throws {SyntaxError} If the string is invalid.
     * @example
     * CoordinateMatrix2D.fromString('(0, 1, 0, 1)^[0, 0]')
     */
  }], [{
    key: "fromString",
    value: function fromString(str) {
      var split = str.split(/\^/);
      if (split.length !== 2) throw new SyntaxError("Invalid 3D matrix string: ".concat(str));
      var coords = split[1].replace(/[\[\]\s]/g, "").split(/,/);
      var matrix = split[0].replace(/[()\s]/g, "").split(/,/);
      if (coords.length !== 2) throw new SyntaxError("Invalid 2D point: ".concat(str));
      if (matrix.length !== 4) throw new SyntaxError("Invalid 2D matrix: ".concat(str));
      var cx = parseFloat(coords[0]),
        cy = parseFloat(coords[1]);
      var x1 = parseInt(matrix[0]),
        x2 = parseInt(matrix[1]);
      var y1 = parseInt(matrix[2]),
        y2 = parseInt(matrix[3]);
      if (x1 > x2) throw new SyntaxError("minX cannot be greater than maxX: ".concat(str));
      if (y1 > y2) throw new SyntaxError("minY cannot be greater than maxY: ".concat(str));
      return new CoordinateMatrix2D(x1, x2, y1, y2, new _coordinate.Coordinate2D(cx, cy));
    }
  }]);
}(CoordinateMatrix);
/**
 * Represents a 3D coordinate matrix.
 */
var CoordinateMatrix3D = exports.CoordinateMatrix3D = /*#__PURE__*/function (_CoordinateMatrix2) {
  /**
   * Constructs a CoordinateMatrix3D.
   * @constructor
   * @param {number} minX The minimum x value.
   * @param {number} maxX The maximum x value.
   * @param {number} minY The minimum y value.
   * @param {number} maxY The maximum y value.
   * @param {number} minZ The minimum z value.
   * @param {number} maxZ The maximum z value.
   * @param {Coordinate3D} start The starting coordinate.
   * @example
   * new CoordinateMatrix3D(0, 1, 0, 1, 0, 1, new Coordinate3D(0, 0, 0))
   */
  function CoordinateMatrix3D(minX, maxX, minY, maxY, minZ, maxZ, start) {
    var _this2;
    _classCallCheck(this, CoordinateMatrix3D);
    _this2 = _callSuper(this, CoordinateMatrix3D);
    /**
     * The minimum x value of this matrix.
     * @type {number}
     */
    _defineProperty(_this2, "minX", void 0);
    /**
     * The maximum x value of this matrix.
     * @type {number}
     */
    _defineProperty(_this2, "maxX", void 0);
    /**
     * The minimum y value of this matrix.
     * @type {number}
     */
    _defineProperty(_this2, "minY", void 0);
    /**
     * The maximum y value of this matrix.
     * @type {number}
     */
    _defineProperty(_this2, "maxY", void 0);
    /**
     * The minimum z value of this matrix.
     * @type {number}
     */
    _defineProperty(_this2, "minZ", void 0);
    /**
     * The maximum z value of this matrix.
     * @type {number}
     */
    _defineProperty(_this2, "maxZ", void 0);
    /**
     * The starting coordinate of this matrix.
     * @type {Coordinate3D}
     */
    _defineProperty(_this2, "start", void 0);
    _this2.minX = minX;
    _this2.maxX = maxX;
    _this2.minY = minY;
    _this2.maxY = maxY;
    _this2.minZ = minZ;
    _this2.maxZ = maxZ;
    _this2.start = start;
    return _this2;
  }
  _inherits(CoordinateMatrix3D, _CoordinateMatrix2);
  return _createClass(CoordinateMatrix3D, [{
    key: "dimension",
    get: function get() {
      return _coordinate.Dimension.THREE;
    }
  }, {
    key: "coordinates",
    get: function get() {
      var coords = [];
      for (var x = this.minX; x <= this.maxX; x++) {
        for (var y = this.minY; y <= this.maxY; y++) {
          for (var z = this.minZ; z <= this.maxZ; z++) {
            coords.push(new _coordinate.Coordinate3D(x, y, z));
          }
        }
      }
      return coords;
    }

    /**
     * Gets the string representation of this CoordinateMatrix3D.
     * @returns {string} The string representation of this CoordinateMatrix3D.
     */
  }, {
    key: "toString",
    value: function toString() {
      return "(".concat(this.minX, ", ").concat(this.maxX, ", ").concat(this.minY, ", ").concat(this.maxY, ", ").concat(this.minZ, ", ").concat(this.maxZ, ")^").concat(this.start.toString());
    }

    // Statics

    /**
     * Converts a string to a CoordinateMatrix3D.
     * @static
     * @param {string} str The string to convert. 
     * @returns {CoordinateMatrix3D} The parsed CoordinateMatrix3D.
     * @throws {SyntaxError} If the string is invalid.
     * @example
     * CoordinateMatrix3D.fromString('(0, 1, 0, 1, 0, 1)^[0, 0, 0]')
     */
  }], [{
    key: "fromString",
    value: function fromString(str) {
      var split = str.split(/\^/);
      if (split.length !== 2) throw new SyntaxError("Invalid 3D matrix string: ".concat(str));
      var coords = split[1].replace(/[\[\]\s]/g, "").split(/,/);
      var matrix = split[0].replace(/[()\s]/g, "").split(/,/);
      if (coords.length !== 3) throw new SyntaxError("Invalid 2D point: ".concat(str));
      if (matrix.length !== 6) throw new SyntaxError("Invalid 2D matrix: ".concat(str));
      var cx = parseFloat(coords[0]),
        cy = parseFloat(coords[1]),
        cz = parseFloat(coords[2]);
      var x1 = parseInt(matrix[0]),
        x2 = parseInt(matrix[1]);
      var y1 = parseInt(matrix[2]),
        y2 = parseInt(matrix[3]);
      var z1 = parseInt(matrix[4]),
        z2 = parseInt(matrix[5]);
      if (x1 > x2) throw new SyntaxError("minX cannot be greater than maxX: ".concat(str));
      if (y1 > y2) throw new SyntaxError("minY cannot be greater than maxY: ".concat(str));
      if (z1 > z2) throw new SyntaxError("minZ cannot be greater than maxZ: ".concat(str));
      return new CoordinateMatrix3D(x1, x2, y1, y2, z1, z2, new _coordinate.Coordinate3D(cx, cy, cz));
    }
  }]);
}(CoordinateMatrix);

},{"./coordinate.js":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLevel = parseLevel;
exports.read2DPoints = read2DPoints;
exports.read3DPoints = read3DPoints;
exports.readBlock = readBlock;
exports.readHeaders = readHeaders;
exports.readLine = readLine;
exports.readRawBlock = readRawBlock;
exports.roll = roll;
exports.split = split;
var _coordinate = require("./coordinate.js");
var _block = require("./block.js");
var _level = require("./level.js");
var _matrix = require("./matrix.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Export

/**
 * Parses a LevelZ Level.
 * @param {string} level The level input.
 * @returns {Level} The parsed level.
 * @throws {SyntaxError} if the level is invalid
 * @example
 * // Read from file
 * import * as fs from 'fs'
 * 
 * fs.readFile('level.lvlz', 'utf8', (err, data) => {
 *    if (err) throw err
 *    const level = parseLevel(data)
 *    console.log(level)
 * })
 */
function parseLevel(level) {
  var _split = split(level),
    _split2 = _slicedToArray(_split, 2),
    headers0 = _split2[0],
    blocks0 = _split2[1];
  var headers = readHeaders(headers0);
  var is2D = headers.get('type') == 2;
  var spawn = headers.get('spawn');
  if (!spawn || spawn === 'default') headers.set('spawn', is2D ? '[0, 0]' : '[0, 0, 0]');
  if (!headers.get('scroll')) headers.set('scroll', 'none');
  var blocks = new Set();
  var _iterator = _createForOfIteratorHelper(blocks0),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;
      if (!line) continue;
      if (line === 'end') break;
      var ci = line.indexOf('#');
      var line0 = (ci > -1 ? line.slice(0, ci) : line).trim();
      if (!line0) continue;
      if (line0 === 'end') break;
      var _readLine = readLine(line0, !is2D),
        _readLine2 = _slicedToArray(_readLine, 2),
        block = _readLine2[0],
        points = _readLine2[1];
      if (!block || !points) continue;
      var _iterator2 = _createForOfIteratorHelper(points),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var point = _step2.value;
          blocks.add(new _block.LevelObject(block, point));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (is2D) return new _level.Level2D(headers, blocks);
  return new _level.Level3D(headers, blocks);
}

// Internal

/**
 * @private
 * @param {string} level
 * @returns {string[][]}
 */
function split(level) {
  var _level$split = level.split('\n---'),
    _level$split2 = _slicedToArray(_level$split, 2),
    headers = _level$split2[0],
    blocks = _level$split2[1];
  return [headers.split('\n'), blocks.split('\n')];
}

/**
 * @private
 * @param {Map<any, number>} map 
 * @returns {any}
 */
function roll(map) {
  var sum = Array.from(map.values()).reduce(function (a, b) {
    return a + b;
  }, 0);
  if (sum < 1) throw new SyntaxError("Invalid Probabilities: ".concat(sum));
  var t;
  var r = Math.random();
  var cumulative = 0;
  var _iterator3 = _createForOfIteratorHelper(map),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _slicedToArray(_step3.value, 2),
        key = _step3$value[0],
        value = _step3$value[1];
      cumulative += value;
      if (r < cumulative / sum) {
        t = key;
        break;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return t;
}

/**
 * @private
 * @param {string[]} headers
 * @returns {Map<string, string>}
 */
function readHeaders(headers) {
  var map = new Map();
  var _iterator4 = _createForOfIteratorHelper(headers),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var s = _step4.value;
      if (!s.startsWith('@')) throw new SyntaxError("'Invalid header; does not start with @: ".concat(s));
      var _s$split = s.split(/\s([\s\S]*)/),
        _s$split2 = _slicedToArray(_s$split, 2),
        key = _s$split2[0],
        value = _s$split2[1];
      map.set(key.slice(1), value.trim());
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if (!map.has('type')) throw new SyntaxError('Missing @type header');
  if (map.get('type') != '2' && map.get('type') != '3') throw new SyntaxError('Invalid @type header (found "' + map.get('type') + '")');
  if (!map.has('spawn')) throw new SyntaxError('Missing @spawn header');
  return map;
}

/**
 * @private
 * @param {string} input 
 * @returns {Set<Coordinate2D>}
 */
function read2DPoints(input) {
  var points = new Set();
  var inputs = input.split(/\*/);
  var _iterator5 = _createForOfIteratorHelper(inputs),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var s0 = _step5.value;
      var s = s0.trim();
      if (!s) return;
      if (s.startsWith('(') && s.endsWith(']')) {
        var _iterator6 = _createForOfIteratorHelper(_matrix.CoordinateMatrix2D.fromString(s)),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var coord = _step6.value;
            points.add(coord);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      } else points.add(_coordinate.Coordinate2D.fromString(s));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return points;
}

/**
 * @private
 * @param {string} input 
 * @returns {Set<Coordinate3D>} 
 */
function read3DPoints(input) {
  var points = new Set();
  var inputs = input.split(/\*/);
  var _iterator7 = _createForOfIteratorHelper(inputs),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var s0 = _step7.value;
      var s = s0.trim();
      if (!s) return;
      if (s.startsWith('(') && s.endsWith(']')) {
        var _iterator8 = _createForOfIteratorHelper(_matrix.CoordinateMatrix3D.fromString(s)),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var coord = _step8.value;
            points.add(coord);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      } else points.add(_coordinate.Coordinate3D.fromString(s));
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return points;
}

/**
 * @private
 * @param {string} input 
 * @param {boolean} threeD
 * @returns {Array.<any>}
 */
function readLine(input) {
  var threeD = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!input) return [];
  var split = input.replace(/\s/g, "").split(/:/);
  var block = readBlock(split[0]);
  if (!block) return [];
  var points = !threeD ? read2DPoints(split[1]) : read3DPoints(split[1]);
  return [block, points];
}

/**
 * @private
 * @param {string} line 
 * @returns {Block}
 */
function readBlock(line) {
  if (line.startsWith('{') && line.endsWith('}')) {
    var block0 = line.replace(/[{}]/g, "");
    var blocks;
    if (line.includes('>,')) {
      blocks = block0.split(/>,/g);
      for (var i = 0; i < blocks.length; i++) if (blocks[i].includes('<')) blocks[i] = "".concat(blocks[i], ">");
    } else blocks = block0.split(/,/g);
    var l = blocks.length;
    var blockToChance = new Map();
    var _iterator9 = _createForOfIteratorHelper(blocks),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var s = _step9.value;
        var _s$split3 = s.split(/=/, 2),
          _s$split4 = _slicedToArray(_s$split3, 2),
          block = _s$split4[0],
          chance = _s$split4[1];
        var v = parseFloat(chance);
        if (v) blockToChance.set(readRawBlock(block), v);else blockToChance.set(readRawBlock(block), 1 / l);
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return roll(blockToChance);
  } else return readRawBlock(line);
}

/**
 * @private
 * @param {string} input 
 * @returns {Block}
 */
function readRawBlock(input) {
  if (!input) return null;
  var split = input.replace(/[\s\>]/, "").split(/\</);
  var name = split[0].trim();
  if (split.length < 2) return new _block.Block(name);
  var properties = new Map();
  var rawProperties = split[1].split(/,/);
  var _iterator10 = _createForOfIteratorHelper(rawProperties),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var s = _step10.value;
      var _s$split5 = s.split(/=/),
        _s$split6 = _slicedToArray(_s$split5, 2),
        key = _s$split6[0],
        value = _s$split6[1];
      properties.set(key, value);
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  return new _block.Block(name, properties);
}

},{"./block.js":2,"./coordinate.js":4,"./level.js":5,"./matrix.js":6}]},{},[1]);
