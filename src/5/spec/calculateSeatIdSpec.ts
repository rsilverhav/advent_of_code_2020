import { calculateSeatId } from '../calculateSeatId'

describe('calculateSeatId', () => {
  const allTestData: { seatNumber: string; expectedId: number }[] = [
    {
      seatNumber: 'BFFFBBFRRR',
      expectedId: 567,
    },
    {
      seatNumber: 'FFFBBBFRRR',
      expectedId: 119,
    },
    {
      seatNumber: 'BBFFBBFRLL',
      expectedId: 820,
    },
  ]

  for (const testData of allTestData) {
    it(`should return ${testData.expectedId} when seatNumber is ${testData.seatNumber}`, () => {
      expect(calculateSeatId(testData.seatNumber)).toBe(testData.expectedId)
    })
  }
})
