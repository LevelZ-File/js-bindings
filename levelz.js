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
var _coordinate = _interopRequireDefault(require("./src/coordinate.js"));
var _block = _interopRequireDefault(require("./src/block.js"));
var _level = _interopRequireDefault(require("./src/level.js"));
var _builder = _interopRequireDefault(require("./src/builder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./src/block.js":2,"./src/builder.js":3,"./src/coordinate.js":4,"./src/level.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LevelObject = exports.Block = void 0;
var _coordinate = require("./coordinate.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Represents a Block's properties.
 * @typedef {Map<string, any>|Object} BlockProperties
 */
/**
 * Represents a Block in a level.
 * @classdesc Block in LevelZ World
 */
var Block = exports.Block = /*#__PURE__*/function () {
  /**
   * Constructs a new Block.
   * @param {string} name Name of the block
   * @param {BlockProperties} [properties] Properties of the block
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
     * @param {Coordinate} coordinate The coordinate of the block.
     * @param {Map<string, any>} properties The properties of the block.
     */
    function block(name, coordinate, properties) {
      this.block(new _block2.LevelObject(name, coordinate, properties));
    }

    /**
     * Builds the level.
     * @returns {Level} The built level.
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
      return new LevelBuilder(_block2.Dimension.TWO);
    }

    /**
     * Creates a new 3D Level Builder.
     * @returns {LevelBuilder} A new 3D Level Builder.
     */
  }, {
    key: "create3D",
    value: function create3D() {
      return new LevelBuilder(_block2.Dimension.THREE);
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
 * @extends Coordinate
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
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/**
 * Represents a Level's Headers.
 * @typedef {Map<string, any>|Object} Headers
 */
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
   * @param {Headers} [headers] The headers of the level 
   * @param {Set<LevelObject>} [blocks] The blocks in the level
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
    if (blocks) _this.blocks = blocks;
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
      return this.headers.get('spawn');
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
   * @param {Headers} headers 
   * @param {Set<LevelObject>} blocks 
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
    if (blocks) _this2.blocks = blocks;
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
      return this.headers.get('spawn');
    }

    /**
     * Sets the spawn point for the level.
     * @param {Coordinate3D} coordinate The coordinate to spawn the object at.
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

},{"./block.js":2,"./coordinate.js":4}]},{},[1]);
