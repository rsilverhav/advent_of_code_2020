import { Graph, parseGraph } from '../parseGraph'

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

    const res = parseGraph(input, true)

    const expected: Graph = {
      'bright white': [
        { name: 'light red', amount: 1 },
        { name: 'dark orange', amount: 3 },
      ],
      'muted yellow': [
        { name: 'light red', amount: 2 },
        { name: 'dark orange', amount: 4 },
      ],
      'shiny gold': [
        { name: 'bright white', amount: 1 },
        { name: 'muted yellow', amount: 2 },
      ],
      'faded blue': [{ name: 'muted yellow', amount: 9 }],
      'dark olive': [{ name: 'shiny gold', amount: 1 }],
      'vibrant plum': [{ name: 'shiny gold', amount: 2 }],
    }
    expect(res).toEqual(expected)
  })
})
