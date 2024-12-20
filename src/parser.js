import { Coordinate2D, Coordinate3D } from './coordinate.js'
import { Block, LevelObject } from './block.js'
import { Level, Level2D, Level3D } from './level.js'
import { CoordinateMatrix2D, CoordinateMatrix3D } from './matrix.js'

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
export function parseLevel(level) {
    const [headers0, blocks0] = split(level)
    
    const headers = readHeaders(headers0)
    const is2D = headers.get('type') == 2

    const spawn = headers.get('spawn')
    if (!spawn || spawn === 'default') 
        headers.set('spawn', is2D ? '[0, 0]' : '[0, 0, 0]')

    if (!headers.get('scroll'))
        headers.set('scroll', 'none')

    const blocks = new Set()
    for (const line of blocks0) {
        if (!line) continue
        if (line === 'end') break

        const ci = line.indexOf('#')
        const line0 = (ci > -1 ? line.slice(0, ci) : line).trim()

        if (!line0) continue
        if (line0 === 'end') break

        const [block, points] = readLine(line0, !is2D)
        if (!block || !points) continue

        for (const point of points)
            blocks.add(new LevelObject(block, point))
    }

    if (is2D) return new Level2D(headers, blocks)

    return new Level3D(headers, blocks)
}

// Internal

/**
 * @private
 * @param {string} level
 * @returns {string[][]}
 */
export function split(level) {
    const [headers, blocks] = level.split('\n---')
    return [headers.split('\n'), blocks.split('\n')]
}

/**
 * @private
 * @param {Map<any, number>} map 
 * @returns {any}
 */
export function roll(map) {
    const sum = Array.from(map.values()).reduce((a, b) => a + b, 0)
    if (sum < 1) throw new SyntaxError(`Invalid Probabilities: ${sum}`)

    let t

    const r = Math.random()
    let cumulative = 0
    for (const [key, value] of map) {
        cumulative += value
        if (r < cumulative / sum) {
            t = key
            break
        }
    }

    return t
}

/**
 * @private
 * @param {string[]} headers
 * @returns {Map<string, string>}
 */
export function readHeaders(headers) {
    const map = new Map()
    for (const s of headers) {
        if (!s.startsWith('@')) throw new SyntaxError(`'Invalid header; does not start with @: ${s}`)

        const [key, value] = s.split(/\s(.*)/s)
        map.set(key.slice(1), value.trim())
    }

    if (!map.has('type')) throw new SyntaxError('Missing @type header')
    if (map.get('type') != '2' && map.get('type') != '3') throw new SyntaxError('Invalid @type header (found "' + map.get('type') + '")')

    if (!map.has('spawn')) throw new SyntaxError('Missing @spawn header')

    return map
}

/**
 * @private
 * @param {string} input 
 * @returns {Set<Coordinate2D>}
 */
export function read2DPoints(input) {
    const points = new Set()
    
    const inputs = input.split(/\*/)

    for (const s0 of inputs) {
        const s = s0.trim()
        if (!s) return

        if (s.startsWith('(') && s.endsWith(']')) {
            for (const coord of CoordinateMatrix2D.fromString(s))
                points.add(coord)
        } else
            points.add(Coordinate2D.fromString(s))
    }

    return points
}

/**
 * @private
 * @param {string} input 
 * @returns {Set<Coordinate3D>} 
 */
export function read3DPoints(input) {
    const points = new Set()
    
    const inputs = input.split(/\*/)

    for (const s0 of inputs) {
        const s = s0.trim()
        if (!s) return

        if (s.startsWith('(') && s.endsWith(']')) {
            for (const coord of CoordinateMatrix3D.fromString(s))
                points.add(coord)
        } else
            points.add(Coordinate3D.fromString(s))
    }

    return points
}

/**
 * @private
 * @param {string} input 
 * @param {boolean} threeD
 * @returns {Array.<any>}
 */
export function readLine(input, threeD = false) {
    if (!input) return [];
    const split = input.replace(/\s/g, "").split(/:/)

    const block = readBlock(split[0])
    if (!block) return [];

    const points = !threeD ? read2DPoints(split[1]) : read3DPoints(split[1])

    return [block, points]
}

/**
 * @private
 * @param {string} line 
 * @returns {Block}
 */
export function readBlock(line) {
    if (line.startsWith('{') && line.endsWith('}')) {
        const block0 = line.replace(/[{}]/g, "")
        
        let blocks;
        if (line.includes('>,')) {
            blocks = block0.split(/>,/g)
            for (let i = 0; i < blocks.length; i++)
                if (blocks[i].includes('<'))
                    blocks[i] = `${blocks[i]}>`
        } else
            blocks = block0.split(/,/g)

        const l = blocks.length
        const blockToChance = new Map()
        for (const s of blocks) {
            const [block, chance] = s.split(/=/, 2)

            const v = parseFloat(chance)
            if (v)
                blockToChance.set(readRawBlock(block), v)
            else
                blockToChance.set(readRawBlock(block), 1 / l)
        }

        return roll(blockToChance)
    } else
        return readRawBlock(line)
}

/**
 * @private
 * @param {string} input 
 * @returns {Block}
 */
export function readRawBlock(input) {
    if (!input) return null

    const split = input.replace(/[\s\>]/, "").split(/\</)
    const name = split[0].trim()

    if (split.length < 2) return new Block(name)

    const properties = new Map()
    const rawProperties = split[1].split(/,/)

    for (const s of rawProperties) {
        const [key, value] = s.split(/=/)
        properties.set(key, value)
    }

    return new Block(name, properties)
}
