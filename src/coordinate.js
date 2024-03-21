/**
 * Represents a 2D Coordinate.
 * @classdesc 2D Coordinates in LevelZ
 */
export class Coordinate2D {
    /**
     * The X value for this 2D Coordinate.
     * @type {number}
     */
    x;
    
    /**
     * The Y value for this 2D Coordinate.
     * @type {number}
     */
    y;

    /**
     * Constructs a new 2D Coordinate.
     * @param {number} x The X Value
     * @param {number} y The Y Value
     */
    constructor(x, y) {
        if (typeof(x) !== 'number' || typeof(y) !== 'number')
            throw new SyntaxError('Invalid input')
        
        this.x = x
        this.y = y
    }
    
    /**
     * Returns the magnitude of this 2D Coordinate.
     * @returns {number} The magnitude of this 2D Coordinate.
     */
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    // Statics

    /**
     * Returns a new 2D Coordinate with X and Y at `0`.
     */
    static get zero() {
        return new Coordinate2D(0, 0)
    }

    /**
     * Converts a string to a 2D Coordinate.
     * @param {string} str The string to convert 
     * @returns {Coordinate2D} The 2D Coordinate
     */
    static fromString(str) {
        if (typeof(str) !== 'string')
            throw new SyntaxError('Invalid input')
        
        let values = str.substring(1, str.length - 1).split(',')
        return new Coordinate2D(Number(values[0].trim()), Number(values[1].trim()))
    }

}

/**
 * Represents a 3D Coordinate.
 * @classdesc 3D Coordinates in LevelZ
 */
export class Coordinate3D {

    /**
     * The X value for this 3D Coordinate.
     * @type {number}
     */
    x;

    /**
     * The Y value for this 3D Coordinate.
     * @type {number}
     */
    y;

    /**
     * The Z value for this 3D Coordinate.
     * @type {number}
     */
    z;

    /**
     * Constructs a new 3D Coordinate.
     * @param {number} x The X Value
     * @param {number} y The Y Value
     * @param {number} z The Z Value 
     */
    constructor(x, y, z) {
        if (typeof(x) !== 'number' || typeof(y) !== 'number' || typeof(z) !== 'number')
            throw new SyntaxError('Invalid input')
        
        this.x = x
        this.y = y
        this.z = z   
    }

    /**
     * Returns the magnitude of this 3D Coordinate.
     * @returns {number} The magnitude of this 3D Coordinate.
     */
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }

    // Statics

    /**
     * Returns a new 3D Coordinate with X, Y and Z at `0`.
     */
    static get zero() {
        return new Coordinate3D(0, 0, 0)
    }

    /**
     * Converts a string to a 3D Coordinate.
     * @param {string} str The string to convert 
     * @returns {Coordinate3D} The 3D Coordinate
     */
    static fromString(str) {
        if (typeof(str) !== 'string')
            throw new SyntaxError('Invalid input')
        
        let values = str.substring(1, str.length - 1).split(',')
        return new Coordinate3D(Number(values[0].trim()), Number(values[1].trim()), Number(values[2].trim()))
    }

}