import { calculateSeatPosition } from '../calculateSeatPosition'

describe('calculateSeatId', () => {
  const allTestData: { seatNumber: string; expected: { row: number; col: number } }[] = [
    {
      seatNumber: 'BFFFBBFRRR',
      expected: { row: 70, col: 7 },
    },
    {
      seatNumber: 'FFFBBBFRRR',
      expected: { row: 14, col: 7 },
    },
    {
      seatNumber: 'BBFFBBFRLL',
      expected: { row: 102, col: 4 },
    },
  ]

  for (const testData of allTestData) {
    it(`should return row: ${testData.expected.row}, col: ${testData.expected.col} when seatNumber is ${testData.seatNumber}`, () => {
      expect(calculateSeatPosition(testData.seatNumber)).toEqual(testData.expected)
    })
  }
})
