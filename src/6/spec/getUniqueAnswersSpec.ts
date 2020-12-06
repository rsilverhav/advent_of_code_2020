import { getUniqueAnswers } from '../getUniqueAnswers'

describe('getUniqueAnswers', () => {
  const allTestData: { answers: string; expected: number }[] = [
    {
      answers: 'abc',
      expected: 3,
    },
    {
      answers: `a
b
c`,
      expected: 3,
    },
    {
      answers: `ab
ac`,
      expected: 3,
    },
    {
      answers: `a
a
a
a`,
      expected: 1,
    },
    {
      answers: 'b',
      expected: 1,
    },
  ]

  for (const testData of allTestData) {
    it(`should return ${testData.expected} when answers are ${testData.answers}`, () => {
      expect(getUniqueAnswers(testData.answers)).toBe(testData.expected)
    })
  }
})
