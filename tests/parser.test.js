import { test, expect, describe } from '@jest/globals'
import * as parser from '../src/parser.js'

describe('parser', () => {
    test('read headers', () => {
        const h1 = parser.readHeaders(["@type 2", "@scroll none", "@spawn default"])
        expect(h1.get('type')).toBe('2')
        expect(h1.get('scroll')).toBe('none')
        expect(h1.get('spawn')).toBe('default')

        const h2 = parser.readHeaders(["@type 3", "@spawn [0, 0, 0]"])
        expect(h2.get('type')).toBe('3')
        expect(h2.get('spawn')).toBe('[0, 0, 0]')

        const h3 = parser.readHeaders(["@type 2", "@scroll horizontal-left", "@spawn [2, -2]"])
        expect(h3.get('type')).toBe('2')
        expect(h3.get('scroll')).toBe('horizontal-left')
        expect(h3.get('spawn')).toBe('[2, -2]')
    })

    test('read 2D points', () => {
        const p1 = parser.read2DPoints('(0, 2, 0, 2)^[0, 0]')
        expect(p1.size).toBe(9)

        const p2 = parser.read2DPoints('(0, 2, 0, 2)^[0, 0]*[-1, 1.5]')
        expect(p2.size).toBe(10)

        const p3 = parser.read2DPoints('[1, 1]*[1, 2]*[1, 3]')
        expect(p3.size).toBe(3)
    })

    test('read 3D points', () => {
        const p1 = parser.read3DPoints('(0, 2, 0, 2, 0, 2)^[0, 0, 0]')
        expect(p1.size).toBe(27)

        const p2 = parser.read3DPoints('(0, 2, 0, 2, 0, 2)^[0, 0, 0]*[17, 0.5, 2]')
        expect(p2.size).toBe(28)

        const p3 = parser.read3DPoints('[1, 0, 1]*[1, 2, 1]*[1, 3, 1]')
        expect(p3.size).toBe(3)
    })

    test('read 2D line', () => {
        const l1 = "grass: [0, 0]"
        const p1 = parser.readLine(l1)
        expect(p1[0].name).toBe('grass')
        expect(p1[1].size).toBe(1)

        const l2 = "stone<temp=0.7>: (0, 3, 0, 3)^[0, 0]"
        const p2 = parser.readLine(l2)
        expect(p2[0].name).toBe('stone')
        expect(p2[0].properties.get('temp')).toBe('0.7')
        expect(p2[1].size).toBe(16)

        const l3 = "{stone, grass}: [0, 0]*[1, 1]*[2, 2]"
        const p3 = parser.readLine(l3)
        expect(p3[0].name).toBeDefined()
        expect(p3[1].size).toBe(3)
    })

    test('read 3D line', () => {
        const l1 = "grass: [-1, 0, 0.5]"
        const p1 = parser.readLine(l1, true)
        expect(p1[0].name).toBe('grass')
        expect(p1[1].size).toBe(1)

        const l2 = "stone<temp=0.7,cracked=false>: (0, 3, 0, 3, 0, 3)^[0, 0, 0]"
        const p2 = parser.readLine(l2, true)
        expect(p2[0].name).toBe('stone')
        expect(p2[0].properties.get('temp')).toBe('0.7')
        expect(p2[0].properties.get('cracked')).toBe('false')
        expect(p2[1].size).toBe(64)

        const l3 = "{stone, grass}: [0, 0, 0]*[1, 1, 1]*[2, 2, 2]"
        const p3 = parser.readLine(l3, true)
        expect(p3[0].name).toBeDefined()
        expect(p3[1].size).toBe(3)
    })

    test('read block', () => {
        const p1 = parser.readBlock('grass<snowy=false>')
        expect(p1.name).toBe('grass')
        expect(p1.properties.get('snowy')).toBe('false')

        const p2 = parser.readBlock('stone<snowy=true,temp=0.4>')
        expect(p2.name).toBe('stone')
        expect(p2.properties.get('snowy')).toBe('true')
        expect(p2.properties.get('temp')).toBe('0.4')
    })

    test('read level (str)', () => {
        const l1 = [
            "@type 2",
            "@spawn default",
            "---",
            "grass: [0, 0]",
            "stone<temp=0.7>: (0, 3, 0, 3)^[0, 0]",
            "{stone, grass}: [0, 0]*[1, 1]*[2, 2]",
            "end"
        ]

        const p1 = parser.parseLevel(l1.join('\n'))
        expect(p1.headers.get('type')).toBe('2')
        expect(p1.headers.get('scroll')).toBe('none')
        expect(p1.headers.get('spawn')).toBe('[0, 0]')
        expect(p1.blocks.size).toBe(20)

        const l2 = [
            "@type 3",
            "@spawn [-1, 0, 2]",
            "---",
            "grass: [-1, 0, 0.5]",
            "stone<temp=0.7,cracked=false>: (0, 3, 0, 3, 0, 3)^[0, 0, 0]",
            "{0.2=stone<temp=0.8>, 0.8=grass}: [0, 0, 0]*[1, 1, 1]*[2, 2, 2]",
            "end"
        ]

        const p2 = parser.parseLevel(l2.join('\n'))
        expect(p2.headers.get('type')).toBe('3')
        expect(p2.headers.get('spawn')).toBe('[-1, 0, 2]')
        expect(p2.blocks.size).toBe(68)
    })
})