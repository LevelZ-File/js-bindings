import { Coordinate, Coordinate2D, Coordinate3D } from "./coordinate.js";

/**
 * Represents a Block in a level.
 * @classdesc Block in LevelZ World
 */
export class Block {

    /**
     * The name of this block.
     * @type {string}
     */
    name;

    /**
     * The properties of this block.
     * @type {Map<string, any>}
     */
    properties = new Map();

    /**
     * Constructs a new Block.
     * @param {string} name Name of the block
     * @param {Map<string, any>|Object.<string, any>} [properties] Properties of the block
     * @example
     * new Block('grass', new Map([['snowy', false]]))
     * new Block('grass', {'snowy': false})
     */
    constructor(name, properties) {
        this.name = name
        if (properties) {
            if (properties instanceof Map) 
                properties.forEach((value, key) => { this.properties.set(key, value) })
            else for (const [key, value] of Object.entries(properties)) 
                this.properties.set(key, value)
        }
    }

    /**
     * Returns the string representation of this block.
     * @returns {string} The string representation of this block.
     * @example
     * grass<snowy=false>
     */
    toString() {
        let str = `${this.name}`
        if (this.properties.size == 0) return str;

        str += '<'
        for (const [key, value] of this.properties) {
            str += `${key}=${value}, `
        }
        str = str.slice(0, -2)

        return str + '>'
    }

}

/**
 * Utility Object for representing a Level Block and its Coordinate.
 * @classdesc Coordinate and Block in LevelZ World
 */
export class LevelObject {

    /**
     * The Block of this LevelObject.
     * @type {Block}
     */
    block;

    /**
     * The Coordinate of this LevelObject.
     * @type {Coordinate}
     */
    coordinate;

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
    constructor(block, coordinate) {
        if (coordinate instanceof Array) {
            if (coordinate.length == 2) 
                coordinate = new Coordinate2D(coordinate[0], coordinate[1])
            else if (coordinate.length == 3) 
                coordinate = new Coordinate3D(coordinate[0], coordinate[1], coordinate[2])
        }

        if (typeof(block) === 'string')
            block = new Block(block)

        if (!(block instanceof Block) || !(coordinate instanceof Coordinate))
            throw new SyntaxError('Invalid input')

        this.block = block
        this.coordinate = coordinate
    }

    /**
     * Gets the name of the block.
     * @returns {string} The name of the block.
     */
    get name() {
        return this.block.name
    }

    /**
     * Gets the properties of the block.
     * @returns {Map<string, any>} The properties of the block.
     */
    get properties() {
        return this.block.properties
    }

    /**
     * Returns the string representation of this LevelObject.
     * @returns {string} The string representation of this LevelObject.
     * @example
     * block<property=value>: [x, y]
     */
    toString() {
        return `${this.block.toString()}: ${this.coordinate.toString()}`
    }
}