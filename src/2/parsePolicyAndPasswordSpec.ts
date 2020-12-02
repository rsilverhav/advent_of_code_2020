import { parsePolicyAndPassword } from './parsePolicyAndPassword'

describe('parsePolicyAndPassword', () => {
  it('should get parse 1-3 a: abcde corectly', () => {
    const { min, max, char, password } = parsePolicyAndPassword('1-3 a: abcde')
    expect(min).toBe(1)
    expect(max).toBe(3)
    expect(char).toBe('a')
    expect(password).toBe('abcde')
  })

  it('should get parse 10-13 c: ccccccccccccccccccc corectly', () => {
    const { min, max, char, password } = parsePolicyAndPassword('10-13 c: ccccccccccccccccccc')
    expect(min).toBe(10)
    expect(max).toBe(13)
    expect(char).toBe('c')
    expect(password).toBe('ccccccccccccccccccc')
  })
})
