import { parseGraph } from '../parseGraph'

describe('parseGraph', () => {
  it('should parse input and return correct node info', () => {
    const input = [
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
      'bright white bags contain 1 shiny gold bag.',
      'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      'dotted black bags contain no other bags.',
    ]

    const res = parseGraph(input)

    const expected: { [key: string]: string[] } = {
      'shiny gold': ['bright white', 'muted yellow'],
      'muted yellow': ['light red', 'dark orange'],
      'bright white': ['light red', 'dark orange'],
      'faded blue': ['muted yellow'],
      'dark olive': ['shiny gold'],
      'vibrant plum': ['shiny gold'],
    }
    for (const key in res) {
      expect(Array.from(res[key])).toEqual(expected[key])
    }
  })
})
