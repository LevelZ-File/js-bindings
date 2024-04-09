import { Coordinate } from "./coordinate.js";
import { Block } from './block.js'

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
     * @param {Block} block The Block
     * @param {Coordinate} coordinate The Coordinate
     */
    constructor(block, coordinate) {
        this.block = block
        this.coordinate = coordinate
    }

    /**
     * Returns the string representation of this LevelObject.
     * @returns {string} The string representation of this LevelObject.
     */
    toString() {
        return `${this.block.toString()}: ${this.coordinate.toString()}`
    }
}