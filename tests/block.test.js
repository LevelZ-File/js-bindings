import { test, expect, describe } from '@jest/globals'
import { Block, LevelObject } from '../src/block.js'
import { Coordinate2D, Coordinate3D } from '../src/coordinate.js'

describe('blocks', () => {
    test('construct', () => {
        let b = new Block('block')

        expect(b.name).toBe('block')
    })

})

describe('objects', () => {
    test('construct 2D', () => {
        let b1 = new Block('block')
        let o1 = new LevelObject(b1, new Coordinate2D(2, 3))

        expect(o1.block).toBe(b1)
        expect(o1.coordinate.x).toBe(2)
        expect(o1.coordinate.y).toBe(3)

        let b2 = new Block('stone', {"snowy": true})
        let o2 = new LevelObject(b2, [-1, -1])

        expect(o2.block).toBe(b2)
        expect(o2.coordinate.x).toBe(-1)
        expect(o2.coordinate.y).toBe(-1)
    })

    test('construct 3D', () => {
        let b1 = new Block('block')
        let o1 = new LevelObject(b1, new Coordinate3D(2, 3, 4))

        expect(o1.block).toBe(b1)
        expect(o1.coordinate.x).toBe(2)
        expect(o1.coordinate.y).toBe(3)
        expect(o1.coordinate.z).toBe(4)

        let b2 = new Block('stone', {"snowy": false})
        let o2 = new LevelObject(b2, [23, -6, 17])

        expect(o2.block).toBe(b2)
        expect(o2.coordinate.x).toBe(23)
        expect(o2.coordinate.y).toBe(-6)
        expect(o2.coordinate.z).toBe(17)
    })

    test('toString 2D', () => {
        let b1 = new Block('grass')
        let o1 = new LevelObject(b1, new Coordinate2D(9, 0))
        expect(o1.toString()).toBe('grass: [9, 0]')
        
        let o2 = new LevelObject('grass', new Coordinate2D(1, 8))
        expect(o2.toString()).toBe('grass: [1, 8]')

        let b2 = new Block('stone', {"snowy": true})
        let o3 = new LevelObject(b2, new Coordinate2D(-1, -1))
        expect(o3.toString()).toBe('stone<snowy=true>: [-1, -1]')

        let b3 = new Block('magma', {"temp": 0.3})
        let o4 = new LevelObject(b3, [4, 5])
        expect(o4.toString()).toBe('magma<temp=0.3>: [4, 5]')
    })

    test('toString 3D', () => {
        let b1 = new Block('grass')
        let o1 = new LevelObject(b1, new Coordinate3D(-2, 0, 6))
        expect(o1.toString()).toBe('grass: [-2, 0, 6]')

        let o2 = new LevelObject('grass', new Coordinate3D(1, 4, 1))
        expect(o2.toString()).toBe('grass: [1, 4, 1]')

        let b2 = new Block('stone', {"snowy": false})
        let o3 = new LevelObject(b2, new Coordinate3D(-1, 3, -1))
        expect(o3.toString()).toBe('stone<snowy=false>: [-1, 3, -1]')

        let b3 = new Block('magma', {"temp": 0.4})
        let o4 = new LevelObject(b3, [4, 5, 6])
        expect(o4.toString()).toBe('magma<temp=0.4>: [4, 5, 6]')
    })
})