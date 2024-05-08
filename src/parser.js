import { Coordinate, Coordinate2D, Coordinate3D } from './coordinate.js'
import { Block, LevelObject } from './block.js'
import { Level, Level2D, Level3D } from './level.js'

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
        if (line === 'end') break

        const [block, points] = readLine(line, !is2D)
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
        if (!s.startsWith('@')) throw new SyntaxError(`'Invalid header; does not stard with @: ${s}`)

        const [key, value] = s.split(/\s(.*)/s)
        map.set(key.slice(1), value)
    }

    if (!map.has('type')) throw new SyntaxError('Missing @type header')
    if (map.get('type') != '2' && map.get('type') != '3') throw new SyntaxError('Invalid @type header')

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
            const split = s.split(/\^/)

            const coords = split[1].replace(/[\[\]\s]/g, "").split(/,/)
            const matrix = split[0].replace(/[()\s]/g, "").split(/,/)

            if (coords.length !== 2) throw new SyntaxError(`Invalid 2D point: ${s0}`)
            if (matrix.length !== 4) throw new SyntaxError(`Invalid 2D matrix: ${s0}`)

            const cx = parseFloat(coords[0]), cy = parseFloat(coords[1])
            
            const x1 = parseInt(matrix[0]), x2 = parseInt(matrix[1]) 
            const y1 = parseInt(matrix[2]), y2 = parseInt(matrix[3])
            
            for (let x = x1; x <= x2; x++)
                for (let y = y1; y <= y2; y++)
                    points.add(new Coordinate2D(cx + x, cy + y))
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
            const split = s.split(/\^/)

            const coords = split[1].replace(/[\[\]\s]/g, "").split(/,/)
            const matrix = split[0].replace(/[()\s]/g, "").split(/,/)

            if (coords.length !== 3) throw new SyntaxError(`Invalid 2D point: ${s0}`)
            if (matrix.length !== 6) throw new SyntaxError(`Invalid 2D matrix: ${s0}`)

            const cx = parseFloat(coords[0]), cy = parseFloat(coords[1]), cz = parseFloat(coords[2])
            
            const x1 = parseInt(matrix[0]), x2 = parseInt(matrix[1]) 
            const y1 = parseInt(matrix[2]), y2 = parseInt(matrix[3])
            const z1 = parseInt(matrix[4]), z2 = parseInt(matrix[5])
            
            for (let x = x1; x <= x2; x++)
                for (let y = y1; y <= y2; y++)
                    for (let z = z1; z <= z2; z++)
                        points.add(new Coordinate3D(cx + x, cy + y, cz + z))
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
        if (line.contains('>,')) {
            blocks = block0.split(/>,/g)
            for (let i = 0; i < blocks.length; i++)
                if (blocks[i].contains('<'))
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
