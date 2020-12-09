import { findCipherError } from '../findCipherError'

describe('findCipherError', () => {
  it('should return 127 given test input with preamble size 5', () => {
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
    expect(findCipherError(input, 5)).toBe(127)
  })
})
