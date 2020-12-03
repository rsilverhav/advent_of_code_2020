import { walkToBottom } from './walkToBottom'

describe('walkToBottom', () => {
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

  const parametricTestData: { dX: number; dY: number; expectedResult: number }[] = [
    { dX: 1, dY: 1, expectedResult: 2 },
    { dX: 3, dY: 1, expectedResult: 7 },
    { dX: 5, dY: 1, expectedResult: 3 },
    { dX: 7, dY: 1, expectedResult: 4 },
    { dX: 1, dY: 2, expectedResult: 2 },
  ]

  for (const testData of parametricTestData) {
    it(`should find ${testData.expectedResult} trees when stepping (${testData.dX}, ${testData.dY})`, () => {
      expect(walkToBottom(testMap, { dX: testData.dX, dY: testData.dY })).toBe(
        testData.expectedResult
      )
    })
  }
})
