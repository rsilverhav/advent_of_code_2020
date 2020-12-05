import { isValidHeight } from '../isValidHeight'

describe('isValidHeight', () => {
  const allTestData: { height: string; expectedResult: boolean }[] = [
    {
      height: '74in',
      expectedResult: true,
    },
    {
      height: '158cm',
      expectedResult: true,
    },
    {
      height: '60cm',
      expectedResult: false,
    },
    {
      height: '140in',
      expectedResult: false,
    },
  ]
  for (const testData of allTestData) {
    it(`${testData.height} should return ${testData.expectedResult.toString()}`, () => {
      expect(isValidHeight(testData.height, { in: 59, cm: 150 }, { in: 76, cm: 193 })).toBe(
        testData.expectedResult
      )
    })
  }
})
