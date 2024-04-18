import { test, expect, describe } from '@jest/globals'

import { LevelBuilder } from '../src/builder.js'
import { Coordinate2D, Coordinate3D } from '../src/coordinate.js'
import { Scroll } from '../src/level.js'
import { LevelObject } from '../src/block.js'

describe('builder', () => {
    test('build 2D', () => {
        let b = new LevelBuilder(2)
        expect(b.toString()).toBe(LevelBuilder.create2D().toString())

        b.spawn = [0, 0]
        expect(b.headers.get('spawn').x).toBe(0)
        expect(b.headers.get('spawn').y).toBe(0)

        b.spawn = [-3, 4]
        expect(b.headers.get('spawn').x).toBe(-3)
        expect(b.headers.get('spawn').y).toBe(4)

        b.spawn = new Coordinate2D(1, 1)
        expect(b.headers.get('spawn').x).toBe(1)
        expect(b.headers.get('spawn').y).toBe(1)

        b.header('scroll', Scroll.VERTICAL_DOWN)
        expect(b.headers.get('scroll')).toBe(Scroll.VERTICAL_DOWN)

        let l = b.build()
        expect(l.spawn.x).toBe(1)
        expect(l.spawn.y).toBe(1)
        expect(l.scroll).toBe(Scroll.VERTICAL_DOWN)
    })

    test('build 3D', () => {
        let b = new LevelBuilder(3)
        expect(b.toString()).toBe(LevelBuilder.create3D().toString())
        
        b.spawn = [0, 0, 0]
        expect(b.headers.get('spawn').x).toBe(0)
        expect(b.headers.get('spawn').y).toBe(0)
        expect(b.headers.get('spawn').z).toBe(0)

        b.spawn = [-3, 4, 2]
        expect(b.headers.get('spawn').x).toBe(-3)
        expect(b.headers.get('spawn').y).toBe(4)
        expect(b.headers.get('spawn').z).toBe(2)

        b.spawn = new Coordinate3D(1, 7, 9)
        expect(b.headers.get('spawn').x).toBe(1)
        expect(b.headers.get('spawn').y).toBe(7)
        expect(b.headers.get('spawn').z).toBe(9)

        let l = b.build()
        expect(l.spawn.x).toBe(1)
        expect(l.spawn.y).toBe(7)
        expect(l.spawn.z).toBe(9)
    })

    test('invalid builder', () => {
        expect(() => new LevelBuilder(4)).toThrow(SyntaxError)
        expect(() => new LevelBuilder(1)).toThrow(SyntaxError)

        let b1 = new LevelBuilder(2)
        expect(() => b1.spawn = [1, 2, 3]).toThrow(SyntaxError)
        expect(() => b1.spawn = new Coordinate3D(4, -5, 6)).toThrow(SyntaxError)
        expect(() => b1.block(new LevelObject("grass", [-1, -2, -3]))).toThrow(SyntaxError)
        expect(() => b1.block(new LevelObject("grass", new Coordinate3D(-1, -2, -3)))).toThrow(SyntaxError)

        let b2 = new LevelBuilder(3)
        expect(() => b2.spawn = [1, 2]).toThrow(SyntaxError)
        expect(() => b2.spawn = new Coordinate2D(4, -5)).toThrow(SyntaxError)
        expect(() => b2.block(new LevelObject("grass", [-1, -2]))).toThrow(SyntaxError)
        expect(() => b2.block(new LevelObject("grass", new Coordinate2D(-1, -2)))).toThrow(SyntaxError)
    })
})