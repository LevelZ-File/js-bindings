import { test, expect, describe } from '@jest/globals'
import { Coordinate2D, Coordinate3D } from '../src/coordinate.js'

describe('coordinates', () => {
    test('construct 2D', () => {
        let c = new Coordinate2D(2, 3)
        expect(c.dimension).toBe(2)
        expect(c.magnitude).toBe(Math.sqrt(13))

        expect(c.x).toBe(2)
        expect(c.y).toBe(3)

        c = new Coordinate2D(0, 0)
        expect(c.x).toBe(0)
        expect(c.y).toBe(0)
    })

    test('construct 3D', () => {
        let c = new Coordinate3D(2, 3, 4)
        expect(c.dimension).toBe(3)
        expect(c.magnitude).toBe(Math.sqrt(29))

        expect(c.x).toBe(2)
        expect(c.y).toBe(3)
        expect(c.z).toBe(4)

        c = new Coordinate3D(0, -1, 0)
        expect(c.dimension).toBe(3)
        expect(c.magnitude).toBe(1)

        expect(c.x).toBe(0)
        expect(c.y).toBe(-1)
        expect(c.z).toBe(0)
    })

    test('fromString 2D', () => {
        let c = Coordinate2D.fromString('[2,3]')
        expect(c.x).toBe(2)
        expect(c.y).toBe(3)

        c = Coordinate2D.fromString('[-4,11]')
        expect(c.x).toBe(-4)
        expect(c.y).toBe(11)
    })

    test('fromString 3D', () => {
        let c = Coordinate3D.fromString('[2,3,-5]')
        expect(c.x).toBe(2)
        expect(c.y).toBe(3)
        expect(c.z).toBe(-5)

        c = Coordinate3D.fromString('[-4,19,-17]')
        expect(c.x).toBe(-4)
        expect(c.y).toBe(19)
        expect(c.z).toBe(-17)
    })
})