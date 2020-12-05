import { binarySearch } from '../binarySearch'

describe('binarySearch', () => {
  it('should return 44 when seatNumber is FBFBBFF, min: 0, max: 127, lowChar is F, highChar is B', () => {
    expect(
      binarySearch({ seatNumbers: 'FBFBBFF', min: 0, max: 127, lowChar: 'F', highChar: 'B' })
    ).toBe(44)
  })

  it('should return 5 when seatNumber is RLR, lowChar is L, highChar is R', () => {
    expect(binarySearch({ seatNumbers: 'RLR', min: 0, max: 7, lowChar: 'L', highChar: 'R' })).toBe(
      5
    )
  })
})
