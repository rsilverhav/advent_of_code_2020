import { getPairSum } from './getPairSum'

describe('1', () => {
  it('should find the matching value to reach 2020 from small set of numbers', () => {
    //Setup
    const testValues = [1721, 979, 366, 299, 675, 1456]

    // Execute
    const res = getPairSum(2020, testValues)

    // Verification
    expect(res).toBe(514579)
  })
})
