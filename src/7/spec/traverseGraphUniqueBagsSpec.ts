import { traverseGraphUniqueBags } from '../traverseGraphUniqueBags'

describe('traverseGraphUniqueBags', () => {
  const input = [
    'light red bags contain 1 bright white bag, 2 muted yellow bags.',
    'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
    'bright white bags contain 1 shiny gold bag.',
    'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
    'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    'dotted black bags contain no other bags.',
  ]
  it('should return expected visited nodes', () => {
    const res = traverseGraphUniqueBags({
      graphInfo: input,
      startNode: 'shiny gold',
      childrenAsKey: true,
    })
    expect(Array.from(res).sort((a, b) => a.localeCompare(b))).toEqual([
      'bright white',
      'dark orange',
      'light red',
      'muted yellow',
      'shiny gold',
    ])
  })
})
