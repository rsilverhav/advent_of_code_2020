import { getUniqueAnswers } from '../getUniqueAnswers'

describe('getUniqueAnswers', () => {
  const allTestData: { groupAnswers: string; expected: number }[] = [
    {
      groupAnswers: 'abc',
      expected: 3,
    },
    {
      groupAnswers: `a
b
c`,
      expected: 3,
    },
    {
      groupAnswers: `ab
ac`,
      expected: 3,
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
      expect(getUniqueAnswers(testData.groupAnswers)).toBe(testData.expected)
    })
  }
})
