export function findContiguousSum(values: number[], targetValue: number): number[] {
  for (let index = 0; index < values.length - 1; index++) {
    let sum = values[index]
    for (let index2 = index + 1; index2 < values.length; index2++) {
      sum += values[index2]
      if (sum === targetValue) {
        return values.slice(index, index2 + 1)
      } else if (sum > targetValue) {
        break
      }
    }
  }
  return []
}
