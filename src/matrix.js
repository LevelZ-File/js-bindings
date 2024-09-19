import { Dimension, Coordinate, Coordinate2D, Coordinate3D } from './coordinate.js';

/**
 * Represents a coordinate matrix.
 * @abstract
 * @classdesc Abstract Coordinate Matrix for representation purposes
 */
export class CoordinateMatrix {
    constructor() {
        if (new.target === CoordinateMatrix)
            throw new TypeError('Cannot instantiate abstract class')
    }

    /**
     * Gets the iterator for this CoordinateMatrix.
     * @returns {Iterator<Coordinate>} The iterator for this CoordinateMatrix.
     */
    [Symbol.iterator]() {
        return this.coordinates.values()
    }

    /**
     * Returns the dimension of this CoordinateMatrix.
     * @returns {Dimension} The dimension of this CoordinateMatrix.
     */
    get dimension() {
        throw new Error('Abstract method')
    }

    /**
     * Returns the coordinates of this CoordinateMatrix.
     * @returns {Array<Coordinate>} The coordinates of this CoordinateMatrix.
     */
    get coordinates() {
        throw new Error('Abstract method')
    }
}

export class CoordinateMatrix2D extends CoordinateMatrix {

    /**
     * The minimum x value of this matrix.
     * @type {number}
     */
    minX;

    /**
     * The maximum x value of this matrix.
     * @type {number}
     */
    maxX;

    /**
     * The minimum y value of this matrix.
     * @type {number}
     */
    minY;

    /**
     * The maximum y value of this matrix.
     * @type {number}
     */
    maxY;

    /**
     * The starting coordinate of this matrix.
     * @type {Coordinate2D}
     */
    start;

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
    constructor(minX, maxX, minY, maxY, start) {
        super();

        if (minX > maxX) throw new SyntaxError(`minX cannot be greater than maxX: ${minX} > ${maxX}`);
        if (minY > maxY) throw new SyntaxError(`minY cannot be greater than maxY: ${minY} > ${maxY}`);

        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
        this.start = start;
    }

    get dimension() {
        return Dimension.TWO;
    }

    get coordinates() {
        const coords = [];

        for (let x = this.minX; x <= this.maxX; x++) {
            for (let y = this.minY; y <= this.maxY; y++) {
                coords.push(new Coordinate2D(x, y));
            }
        }

        return coords;
    }

    /**
     * Gets the string representation of this CoordinateMatrix2D.
     * @returns {string} The string representation of this CoordinateMatrix2D.
     */
    toString() {
        return `(${this.minX}, ${this.maxX}, ${this.minY}, ${this.maxY})^${this.start.toString()}`;
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
    static fromString(str) {
        const split = str.split(/\^/)
        if (split.length !== 2) throw new SyntaxError(`Invalid 3D matrix string: ${str}`)

        const coords = split[1].replace(/[\[\]\s]/g, "").split(/,/)
        const matrix = split[0].replace(/[()\s]/g, "").split(/,/)

        if (coords.length !== 2) throw new SyntaxError(`Invalid 2D point: ${str}`)
        if (matrix.length !== 4) throw new SyntaxError(`Invalid 2D matrix: ${str}`)

        const cx = parseFloat(coords[0]), cy = parseFloat(coords[1])
        
        const x1 = parseInt(matrix[0]), x2 = parseInt(matrix[1]) 
        const y1 = parseInt(matrix[2]), y2 = parseInt(matrix[3])

        if (x1 > x2) throw new SyntaxError(`minX cannot be greater than maxX: ${str}`)
        if (y1 > y2) throw new SyntaxError(`minY cannot be greater than maxY: ${str}`)
        
        return new CoordinateMatrix2D(x1, x2, y1, y2, new Coordinate2D(cx, cy))
    }

}

/**
 * Represents a 3D coordinate matrix.
 */
export class CoordinateMatrix3D extends CoordinateMatrix {

    /**
     * The minimum x value of this matrix.
     * @type {number}
     */
    minX;

    /**
     * The maximum x value of this matrix.
     * @type {number}
     */
    maxX;

    /**
     * The minimum y value of this matrix.
     * @type {number}
     */
    minY;

    /**
     * The maximum y value of this matrix.
     * @type {number}
     */
    maxY;

    /**
     * The minimum z value of this matrix.
     * @type {number}
     */
    minZ;

    /**
     * The maximum z value of this matrix.
     * @type {number}
     */
    maxZ;

    /**
     * The starting coordinate of this matrix.
     * @type {Coordinate3D}
     */
    start;

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
    constructor(minX, maxX, minY, maxY, minZ, maxZ, start) {
        super();
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
        this.minZ = minZ;
        this.maxZ = maxZ;
        this.start = start;
    }

    get dimension() {
        return Dimension.THREE;
    }

    get coordinates() {
        const coords = [];

        for (let x = this.minX; x <= this.maxX; x++) {
            for (let y = this.minY; y <= this.maxY; y++) {
                for (let z = this.minZ; z <= this.maxZ; z++) {
                    coords.push(new Coordinate3D(x, y, z));
                }
            }
        }

        return coords;
    }

    /**
     * Gets the string representation of this CoordinateMatrix3D.
     * @returns {string} The string representation of this CoordinateMatrix3D.
     */
    toString() {
        return `(${this.minX}, ${this.maxX}, ${this.minY}, ${this.maxY}, ${this.minZ}, ${this.maxZ})^${this.start.toString()}`;
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
    static fromString(str) {
        const split = str.split(/\^/)
        if (split.length !== 2) throw new SyntaxError(`Invalid 3D matrix string: ${str}`)

        const coords = split[1].replace(/[\[\]\s]/g, "").split(/,/)
        const matrix = split[0].replace(/[()\s]/g, "").split(/,/)

        if (coords.length !== 3) throw new SyntaxError(`Invalid 2D point: ${str}`)
        if (matrix.length !== 6) throw new SyntaxError(`Invalid 2D matrix: ${str}`)

        const cx = parseFloat(coords[0]), cy = parseFloat(coords[1]), cz = parseFloat(coords[2])
        
        const x1 = parseInt(matrix[0]), x2 = parseInt(matrix[1]) 
        const y1 = parseInt(matrix[2]), y2 = parseInt(matrix[3])
        const z1 = parseInt(matrix[4]), z2 = parseInt(matrix[5])

        if (x1 > x2) throw new SyntaxError(`minX cannot be greater than maxX: ${str}`)
        if (y1 > y2) throw new SyntaxError(`minY cannot be greater than maxY: ${str}`)
        if (z1 > z2) throw new SyntaxError(`minZ cannot be greater than maxZ: ${str}`)
        
        return new CoordinateMatrix3D(x1, x2, y1, y2, z1, z2, new Coordinate3D(cx, cy, cz))
    }

}