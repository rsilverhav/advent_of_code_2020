import { findContiguousSum } from '../findContiguousSum'

describe('findContiguousSum', () => {
  it('should return [15, 25, 47, 40] for test input', () => {
    const input = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ]

    expect(findContiguousSum(input, 127)).toEqual([15, 25, 47, 40])
  })
})
