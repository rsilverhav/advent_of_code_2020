import { getMatchingAnswers } from '../getMatchingAnswers'

describe('getMatchingAnswers', () => {
  const allTestData: { groupAnswers: string; expected: number }[] = [
    {
      groupAnswers: 'abc',
      expected: 3,
    },
    {
      groupAnswers: `a
b
c`,
      expected: 0,
    },
    {
      groupAnswers: `ab
ac`,
      expected: 1,
    },
    {
      groupAnswers: `a
a
a
a`,
      expected: 1,
    },
    {
      groupAnswers: 'b',
      expected: 1,
    },
  ]

  for (const testData of allTestData) {
    it(`should return ${testData.expected} when groupAnswers are ${testData.groupAnswers}`, () => {
      expect(getMatchingAnswers(testData.groupAnswers)).toBe(testData.expected)
    })
  }
})
