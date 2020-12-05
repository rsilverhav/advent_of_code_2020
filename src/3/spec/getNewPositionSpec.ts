import { getNewPosition } from '../getNewPosition'

describe('getNewPosition', () => {
  const testMap = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ]
  it('should end up on (3, 1), no tree, when starting on (0, 0)', () => {
    expect(
      getNewPosition({ map: testMap, currentPosition: { x: 0, y: 0 }, step: { dX: 3, dY: 1 } })
    ).toEqual({ x: 3, y: 1, collidesWithTree: false })
  })
  it('should end up on (6, 2), tree, when starting on (3, 1)', () => {
    expect(
      getNewPosition({ map: testMap, currentPosition: { x: 3, y: 1 }, step: { dX: 3, dY: 1 } })
    ).toEqual({ x: 6, y: 2, collidesWithTree: true })
  })
  it('should end up on (10, 2), tree, when starting on (2, 3)', () => {
    expect(
      getNewPosition({ map: testMap, currentPosition: { x: 10, y: 2 }, step: { dX: 3, dY: 1 } })
    ).toEqual({ x: 2, y: 3, collidesWithTree: true })
  })
})
