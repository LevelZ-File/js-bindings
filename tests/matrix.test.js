import { test, expect, describe } from '@jest/globals'
import { CoordinateMatrix, CoordinateMatrix2D, CoordinateMatrix3D } from '../src/matrix.js'
import { Coordinate2D, Coordinate3D } from '../src/coordinate.js'

describe('matrix', () => {
    test('construct 2D', () => {
        let matrix = new CoordinateMatrix2D(0, 2, 0, 2, new Coordinate2D(0, 0))
        expect(matrix.minX).toBe(0)
        expect(matrix.maxX).toBe(2)
        expect(matrix.minY).toBe(0)
        expect(matrix.maxY).toBe(2)
        expect(matrix.start).toEqual(new Coordinate2D(0, 0))
        expect(matrix.dimension).toBe(2)

        matrix = new CoordinateMatrix2D(1, 3, 1, 3, new Coordinate2D(1, 1))
        expect(matrix.minX).toBe(1)
        expect(matrix.maxX).toBe(3)
        expect(matrix.minY).toBe(1)
        expect(matrix.maxY).toBe(3)
        expect(matrix.start).toEqual(new Coordinate2D(1, 1))
        expect(matrix.dimension).toBe(2)
    })

    test('construct 3D', () => {
        let matrix = new CoordinateMatrix3D(0, 1, 0, 2, 0, 3, new Coordinate3D(0, 0, 0))
        expect(matrix.minX).toBe(0)
        expect(matrix.maxX).toBe(1)
        expect(matrix.minY).toBe(0)
        expect(matrix.maxY).toBe(2)
        expect(matrix.minZ).toBe(0)
        expect(matrix.maxZ).toBe(3)
        expect(matrix.start).toEqual(new Coordinate3D(0, 0, 0))
        expect(matrix.dimension).toBe(3)

        matrix = new CoordinateMatrix3D(1, 2, 1, 3, 1, 4, new Coordinate3D(1, 1, 1))
        expect(matrix.minX).toBe(1)
        expect(matrix.maxX).toBe(2)
        expect(matrix.minY).toBe(1)
        expect(matrix.maxY).toBe(3)
        expect(matrix.minZ).toBe(1)
        expect(matrix.maxZ).toBe(4)
        expect(matrix.start).toEqual(new Coordinate3D(1, 1, 1))
        expect(matrix.dimension).toBe(3)
    })

    test('toString 2D', () => {
        const matrix = new CoordinateMatrix2D(0, 1, 0, 1, new Coordinate2D(0, 0))
        expect(matrix.toString()).toBe('(0, 1, 0, 1)^[0, 0]')
    })

    test('toString 3D', () => {
        const matrix = new CoordinateMatrix3D(0, 1, 0, 2, 0, 3, new Coordinate3D(0, 0, 0))
        expect(matrix.toString()).toBe('(0, 1, 0, 2, 0, 3)^[0, 0, 0]')
    })

    test('fromString 2D', () => {
        let matrix = CoordinateMatrix2D.fromString('(0, 1, 0, 1)^[0, 0]')
        expect(matrix.minX).toBe(0)
        expect(matrix.maxX).toBe(1)
        expect(matrix.minY).toBe(0)
        expect(matrix.maxY).toBe(1)
        expect(matrix.start).toEqual(new Coordinate2D(0, 0))

        matrix = CoordinateMatrix2D.fromString('(1, 3, 1, 3)^[1, 1]')
        expect(matrix.minX).toBe(1)
        expect(matrix.maxX).toBe(3)
        expect(matrix.minY).toBe(1)
        expect(matrix.maxY).toBe(3)
        expect(matrix.start).toEqual(new Coordinate2D(1, 1))
    })

    test('fromString 3D', () => {
        let matrix = CoordinateMatrix3D.fromString('(0, 1, 0, 2, 0, 3)^[0, 0, 0]')
        expect(matrix.minX).toBe(0)
        expect(matrix.maxX).toBe(1)
        expect(matrix.minY).toBe(0)
        expect(matrix.maxY).toBe(2)
        expect(matrix.minZ).toBe(0)
        expect(matrix.maxZ).toBe(3)
        expect(matrix.start).toEqual(new Coordinate3D(0, 0, 0))

        matrix = CoordinateMatrix3D.fromString('(1, 3, 1, 4, 1, 2)^[1, 1, 1]')
        expect(matrix.minX).toBe(1)
        expect(matrix.maxX).toBe(3)
        expect(matrix.minY).toBe(1)
        expect(matrix.maxY).toBe(4)
        expect(matrix.minZ).toBe(1)
        expect(matrix.maxZ).toBe(2)
        expect(matrix.start).toEqual(new Coordinate3D(1, 1, 1))
    })

    test('invalid parent', () => {
        expect(() => new CoordinateMatrix()).toThrow(TypeError)
    })

    test('invalid 2D', () => {
        expect(() => CoordinateMatrix2D.fromString('invalid')).toThrow(SyntaxError)
        expect(() => CoordinateMatrix2D.fromString('(0, 1, 0, 1, 0)')).toThrow(SyntaxError)
        expect(() => CoordinateMatrix2D.fromString('(0, 1)^[0, 0]')).toThrow(SyntaxError)
        expect(() => CoordinateMatrix2D.fromString('(0, 1, 0, 1)^[0, 0, 0]')).toThrow(SyntaxError)
    })

    test('invalid 3D', () => {
        expect(() => CoordinateMatrix3D.fromString('invalid')).toThrow(SyntaxError)
        expect(() => CoordinateMatrix3D.fromString('(0, 1, 0, 2, 0, 3, 0)')).toThrow(SyntaxError)
        expect(() => CoordinateMatrix3D.fromString('(0, 1, 0, 2)^[0, 0, 0]')).toThrow(SyntaxError)
        expect(() => CoordinateMatrix3D.fromString('(0, 1, 0, 2, 0, 3)^[0, 0]')).toThrow(SyntaxError)
    })
})