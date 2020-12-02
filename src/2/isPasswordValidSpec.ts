import { isPasswordValid } from './isPasswordValid'

describe('isPasswordValid', () => {
  it('should return true for 1-3 a: abcde', () => {
    expect(isPasswordValid('1-3 a: abcde')).toBe(true)
  })
  it('should return false for 1-3 b: cdefg', () => {
    expect(isPasswordValid('1-3 b: cdefg')).toBe(false)
  })
  it('should return true for 2-9 c: ccccccccc', () => {
    expect(isPasswordValid('2-9 c: ccccccccc')).toBe(true)
  })
})
