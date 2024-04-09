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
     * @private
     */
    #properties = {};
    

    /**
     * Constructs a new Block.
     * @param {string} name Name of the block
     * @param {Map<string, any>} properties Properties of the block
     */
    constructor(name, properties) {
        this.name = name
        this.properties = properties
    }

    /**
     * Gets the properties of this block.
     * @returns {Map<string, any>} The properties of this block.
     */
    get properties() {
        return structuredClone(this.#properties)
    }

    /**
     * Returns the string representation of this block.
     * @returns {string} The string representation of this block.
     */
    toString() {
        let str = `${this.name}<`
        for (const [key, value] of this.#properties) {
            str += `${key}=${value}, `
        }
        str.slice(0, -2)
        return str + '>'
    }

}