import { test, expect, describe } from '@jest/globals'
import { Level, Level2D, Level3D, Scroll } from '../src/level.js'
import { Coordinate2D, Coordinate3D } from '../src/coordinate.js'
import { LevelObject } from '../src/block.js'

describe('level', () => {
    test('abstract', () => {
        expect(() => {
            new Level()
        }).toThrow(TypeError)
    })

    test('dimension', () => {
        let l1 = new Level2D()
        expect(l1.dimension).toBe(2)

        let l2 = new Level3D()
        expect(l2.dimension).toBe(3)
    })

    test('2D', () => {
        let l1 = new Level2D()
        l1.spawn = new Coordinate2D(0, 0)
        expect(l1.spawn.x).toBe(0)
        expect(l1.spawn.y).toBe(0)

        l1.headers.set('spawn', new Coordinate2D(1, 1))
        expect(l1.spawn.x).toBe(1)
        expect(l1.spawn.y).toBe(1)

        l1.scroll = Scroll.HORIZONTAL_LEFT
        expect(l1.scroll).toBe(Scroll.HORIZONTAL_LEFT)

        l1.scroll = Scroll.VERTICAL_DOWN
        expect(l1.scroll).toBe(Scroll.VERTICAL_DOWN)

        let l2 = new Level2D({"type": "2", "spawn": Coordinate2D.fromString("[-2.5, 2.5]")})
        expect(l2.dimension).toBe(2)
        expect(l2.spawn.x).toBe(-2.5)
        expect(l2.spawn.y).toBe(2.5)

        let l3o = [
            new LevelObject('grass', [0, 0]),
            new LevelObject('stone', [1, 1]),
            new LevelObject('stone', [0, 2])
        ]
        let l3 = new Level2D({"type": "2", "spawn": Coordinate2D.fromString("[0, 0]")}, l3o)
        expect(l3.dimension).toBe(2)
        expect(l3.spawn.x).toBe(0)
        expect(l3.spawn.y).toBe(0)

        expect(l3.coordinates.length).toBe(3)
        expect(l3.rawBlocks.length).toBe(3)
    })

    test('3D', () => {
        let l1 = new Level3D()
        l1.spawn = new Coordinate3D(0, 2, 0)
        expect(l1.spawn.x).toBe(0)
        expect(l1.spawn.y).toBe(2)
        expect(l1.spawn.z).toBe(0)

        l1.headers.set('spawn', new Coordinate3D(1, 1, 4))
        expect(l1.spawn.x).toBe(1)
        expect(l1.spawn.y).toBe(1)
        expect(l1.spawn.z).toBe(4)

        let l2 = new Level3D({"type": "3", "spawn": Coordinate3D.fromString("[-4, 7, 11]")})
        expect(l2.dimension).toBe(3)
        expect(l2.spawn.x).toBe(-4)
        expect(l2.spawn.y).toBe(7)
        expect(l2.spawn.z).toBe(11)
    })

    test('toString 2D half', () => {
        let l = new Level2D()
        l.spawn = new Coordinate2D(0, 0)
        l.scroll = Scroll.HORIZONTAL_RIGHT

        expect(l.toString()).toBe('@type 2\n@spawn [0, 0]\n@scroll horizontal-right')
    })

    test('toString 2D full', () => {
        let l = new Level2D()
        l.spawn = new Coordinate2D(0, 0)
        l.scroll = Scroll.VERTICAL_UP

        l.blocks.add(new LevelObject('grass', [0, 0]))
        l.blocks.add(new LevelObject('stone', [1, 0]))

        expect(l.toString()).toBe(
            '@type 2\n' +
            '@spawn [0, 0]\n' +
            '@scroll vertical-up\n' +
            '---\n' +
            'grass: [0, 0]\n' +
            'stone: [1, 0]\n' +
            'end'
        )
    
    })

    test('toString 3D half', () => {
        let l = new Level3D()
        l.spawn = new Coordinate3D(0, 0, 0)

        expect(l.toString()).toBe('@type 3\n@spawn [0, 0, 0]')
    })

    test('toString 3D full', () => {
        let l = new Level3D()
        l.spawn = new Coordinate3D(1, -2, 4)

        l.blocks.add(new LevelObject('grass', [0, 0, 0]))
        l.blocks.add(new LevelObject('stone', [1, 0, 0]))

        expect(l.toString()).toBe(
            '@type 3\n' +
            '@spawn [1, -2, 4]\n' +
            '---\n' +
            'grass: [0, 0, 0]\n' +
            'stone: [1, 0, 0]\n' +
            'end'
        )
    })
})