import { traverseGraphCountBags } from '../traverseGraphCountBags'

describe('traverseGraphCountBags', () => {
  const input = [
    'shiny gold bags contain 2 dark red bags.',
    'dark red bags contain 2 dark orange bags.',
    'dark orange bags contain 2 dark yellow bags.',
    'dark yellow bags contain 2 dark green bags.',
    'dark green bags contain 2 dark blue bags.',
    'dark blue bags contain 2 dark violet bags.',
    'dark violet bags contain no other bags.',
  ]
  it('should return expected visited nodes', () => {
    expect(
      traverseGraphCountBags({
        graphInfo: input,
        startNode: 'shiny gold',
        childrenAsKey: false,
      })
    ).toBe(126)
  })
})
