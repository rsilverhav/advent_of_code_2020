import { isValidYear } from './isValidYear'

describe('isValidYear', () => {
  it('2002 should be valid', () => {
    expect(isValidYear('2002', 1920, 2002)).toBe(true)
  })
  it('2003 should be invalid', () => {
    expect(isValidYear('2003', 1920, 2002)).toBe(false)
  })
})
