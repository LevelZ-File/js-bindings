import { Block, Dimension, LevelObject } from "./block.js";
import { Coordinate, Coordinate2D, Coordinate3D } from "./coordinate.js";
import { Level, Level2D, Level3D } from "./level.js";

/**
 * Represents a builder for creating LevelZ Levels.
 * @classdesc Level Builder for LevelZ
 */
export class LevelBuilder {

    /**
     * The dimension of the level.
     * @type {number}
     */
    dimension;

    /**
     * The headers of the level.
     * @type {Map<string, any>}
     */
    headers = new Map();

    /**
     * The blocks of the level.
     * @type {Set<LevelObject>}
     */
    blocks = new Set();

    /**
     * Constructs a new Level Builder.
     * @constructs LevelBuilder
     * @param {Dimension} dimension The dimension for the level.
     */
    constructor(dimension) {
        if (dimension !== 2 && dimension !== 3)
            throw new SyntaxError('Invalid dimension; must be 2 or 3')
        this.dimension = dimension
    }

    /**
     * Sets the spawn point for the level.
     * @param {Coordinate} coordinate The coordinate to spawn the object at.
     * @throws Invalid coordinate; must be 2D or 3D (according to the {@link dimension})
     */
    set spawn(coordinate) {
        if (coordinate instanceof Array) {
            if (coordinate.length !== this.dimension)
                throw new SyntaxError(`Invalid coordinate; must be ${this.dimension}D`)

            if (this.dimension === 2)
                this.headers.set('spawn', new Coordinate2D(coordinate[0], coordinate[1]))

            if (this.dimension === 3)
                this.headers.set('spawn', new Coordinate3D(coordinate[0], coordinate[1], coordinate[2]))

            return
        }

        if (this.dimension == 2 && !(coordinate instanceof Coordinate2D))
            throw new SyntaxError('Invalid coordinate; must be 2D')

        if (this.dimension == 3 && !(coordinate instanceof Coordinate3D))
            throw new SyntaxError('Invalid coordinate; must be 3D')

        this.headers.set('spawn', coordinate)
    }

    /**
     * Sets a header value.
     * @param {string} key The key of the header 
     * @param {*} value The value of the header
     */
    header(key, value) {
        this.headers.set(key, value)
    }

    /**
     * Adds a Block to the level.
     * @param {LevelObject} block The level object to add to the level. 
     * @throws Invalid coordinate; must be 2D or 3D (according to the {@link dimension})
     */
    block(block) {
        if (this.dimension === 2 && !(block.coordinate instanceof Coordinate2D))
            throw new SyntaxError('Invalid coordinate; object coordinate must be 2D')

        if (this.dimension === 3 && !(block.coordinate instanceof Coordinate3D))
            throw new SyntaxError('Invalid coordinate; object coordinate must be 3D')

        this.blocks.add(block)
    }

    /**
     * Adds a Block to the level.
     * @param {string} name The name of the block.
     * @param {Coordinate|number[]} coordinate The coordinate of the block.
     * @param {Map<string, any>|Object.<string, any>} properties The properties of the block.
     */
    block(name, coordinate, properties) {
        this.block(new LevelObject(new Block(name, properties), coordinate))
    }

    /**
     * Builds the level.
     * @returns {Level} The built level.
     */
    build() {
        if (this.dimension === 2) return new Level2D(this.headers, this.blocks)
        if (this.dimension === 3) return new Level3D(this.headers, this.blocks)

        throw new SyntaxError('Invalid dimension; must be 2 or 3')
    }

    // Statics

    /**
     * Creates a new 2D Level Builder.
     * @returns {LevelBuilder} A new 2D Level Builder.
     */
    static create2D() {
        return new LevelBuilder(Dimension.TWO)
    }

    /**
     * Creates a new 3D Level Builder.
     * @returns {LevelBuilder} A new 3D Level Builder.
     */
    static create3D() {
        return new LevelBuilder(Dimension.THREE)
    }

}