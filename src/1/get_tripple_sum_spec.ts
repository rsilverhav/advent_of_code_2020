import { getTrippleSum } from './get_tripple_sum'

describe('getTrippleSum', () => {
  it('should find 3 numbers with sum 2020 in a small set', () => {
    const testValues = [1721, 979, 366, 299, 675, 1456]
    const res = getTrippleSum(2020, testValues)

    expect(res).toBe(241861950)
  })
})
