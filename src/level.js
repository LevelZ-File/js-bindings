import { LevelObject, Block } from "./block.js";
import { Dimension, Coordinate, Coordinate2D, Coordinate3D } from "./coordinate.js";

/**
 * Represents a LevelZ Level.
 * @abstract
 * @classdesc Abstract Level for representation purposes
 */
export class Level {

    #dimension;

    /**
     * The headers of the level.
     * @type {Map<string, any>}
     */
    headers = new Map();

    /**
     * The blocks in the level.
     * @type {Set<LevelObject>}
     */
    blocks = new Set();

    constructor(dimension) {
        if (new.target === Level)
            throw new TypeError('Cannot instantiate abstract class')
        
        this.#dimension = dimension
    }

    /**
     * The dimension of the level.
     * @type {Dimension}
     */
    get dimension() {
        return this.#dimension
    }

    /**
     * Gets the spawn point of the level.
     * @returns {Coordinate} The spawn point of the level.
     */
    get spawn() {
        return this.headers.get('spawn')
    }

    /**
     * Gets all the coordinates of the blocks in the level.
     * @returns {Coordinate[]} The coordinates of the blocks in the level.
     */
    get coordinates() {
        return Array.from(this.blocks).map(block => block.coordinate)
    }

    /**
     * Gets all the raw blocks in the level.
     * @returns {Block[]} The raw blocks in the level.
     */
    get rawBlocks() {
        return Array.from(this.blocks).map(block => block.block)
    }

    /**
     * Gets the string representation of the level.
     * @returns {string} The string representation of the level.
     */
    toString() {
        let str = `@type ${this.#dimension}`
        for (const [key, value] of this.headers) {
            str += `\n@${key} ${value}`
        }

        if (this.blocks.size !== 0) {
            str += '\n---'
            for (const block of this.blocks) {
                str += `\n${block}`
            }
            str += '\nend'
        }
        return str
    }

}

// 2D

/**
 * Represents a 2D Level.
 * @classdesc 2D Level in LevelZ
 * @extends Level
 */
export class Level2D extends Level {

    /**
     * Constructs a 2D Level.
     * @constructs Level2D
     * @param {Map<string, any>|Object.<string, any>} [headers] The headers of the level 
     * @param {Set<LevelObject>|LevelObject[]} [blocks] The blocks in the level
     */
    constructor(headers, blocks) {
        super(Dimension.TWO)

        if (headers) {
            if (headers instanceof Map) 
                headers.forEach((value, key) => { this.headers.set(key, value) })
            else for (const [key, value] of Object.entries(headers)) 
                this.headers.set(key, value)
        }
        if (blocks) {
            if (blocks instanceof Set)
                this.blocks = blocks
            else 
                this.blocks = new Set(blocks)
        }
    }

    /**
     * Returns the scroll direction of this 2D Level.
     * @returns {Scroll} The scroll direction
     */
    get scroll() {
        return this.headers.get('scroll')
    }

    /**
     * Sets the scroll direction of this 2D Level.
     * @param {Scroll} value The scroll direction
     * @throws Invalid scroll direction
     */
    set scroll(value) {
        if (value !== Scroll.NONE && value !== Scroll.HORIZONTAL_LEFT && value !== Scroll.HORIZONTAL_RIGHT && value !== Scroll.VERTICAL_UP && value !== Scroll.VERTICAL_DOWN)
            throw new SyntaxError('Invalid scroll direction')
        this.headers.set('scroll', value)
    }

    /**
     * Gets the spawn point of the level.
     * @returns {Coordinate2D} The spawn point of the level.
     */
    get spawn() {
        return super.spawn
    }

    /**
     * Sets the spawn point for the level.
     * @param {Coordinate2D} coordinate The coordinate to spawn the object at.
     */
    set spawn(coordinate) {
        if (coordinate instanceof Array) {
            if (coordinate.length !== 2)
                throw new SyntaxError('Invalid coordinate; must be 2D')
            this.headers.set('spawn', new Coordinate2D(coordinate[0], coordinate[1]))
            return
        }

        if (!(coordinate instanceof Coordinate2D))
            throw new SyntaxError('Invalid coordinate; must be 2D')

        this.headers.set('spawn', coordinate)
    }

}

/**
 * The auto-scroll type in a 2D Level.
 * @typedef {'none'|'horizontal-left'|'horizontal-right'|'vertical-up'|'vertical-down'} Scroll
 */

/**
 * Represents the scroll direction of a 2D Level.
 */
export const Scroll = {
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
}

// 3D

/**
 * Represents a 3D Level.
 * @classdesc 3D Level in LevelZ
 * @extends Level
 */
export class Level3D extends Level {

    /**
     * Constructs a 3D Level.
     * @constructs Level3D
     * @param {Map<string, any>|Object.<string, any>} [headers] The headers of the level 
     * @param {Set<LevelObject>|LevelObject[]} [blocks] The blocks in the level
     */
    constructor(headers, blocks) {
        super(Dimension.THREE)

        if (headers) {
            if (headers instanceof Map) 
                headers.forEach((value, key) => { this.headers.set(key, value) })
            else for (const [key, value] of Object.entries(headers)) 
                this.headers.set(key, value)
        }
        if (blocks) 
            if (blocks instanceof Set)
                this.blocks = blocks
            else
                this.blocks = new Set(blocks)
    }

    /**
     * Gets the spawn point of the level.
     * @returns {Coordinate3D} The spawn point of the level.
     */
    get spawn() {
        return super.spawn
    }

    /**
     * Sets the spawn point for the level.
     * @param {Coordinate3D|number[]} coordinate The coordinate to spawn the object at.
     */
    set spawn(coordinate) {
        if (coordinate instanceof Array) {
            if (coordinate.length !== 3)
                throw new SyntaxError('Invalid coordinate; must be 3D')
            this.headers.set('spawn', new Coordinate3D(coordinate[0], coordinate[1], coordinate[2]))
            return
        }

        if (!(coordinate instanceof Coordinate3D))
            throw new SyntaxError('Invalid coordinate; must be 3D')

        this.headers.set('spawn', coordinate)
    }

}