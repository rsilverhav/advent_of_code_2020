import { isPasswordPositionValid } from '../isPasswordPositionValid'

describe('isPasswordPositionValid', () => {
  it('should return true for 1-3 a: abcde', () => {
    expect(isPasswordPositionValid('1-3 a: abcde')).toBe(true)
  })
  it('should return false for 1-3 b: cdefg', () => {
    expect(isPasswordPositionValid('1-3 b: cdefg')).toBe(false)
  })
  it('should return true for 2-9 c: ccccccccc', () => {
    expect(isPasswordPositionValid('2-9 c: ccccccccc')).toBe(false)
  })
})
