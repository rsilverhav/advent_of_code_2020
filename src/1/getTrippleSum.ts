export function getTrippleSum(targetValue: number, data: number[]) {
  const index = [0, 0, 0]
  for (index[0] = 0; index[0] < data.length; index[0]++) {
    for (index[1] = index[0] + 1; index[1] < data.length; index[1]++) {
      for (index[2] = index[1] + 1; index[2] < data.length; index[2]++) {
        if (data[index[0]] + data[index[1]] + data[index[2]] === targetValue) {
          return data[index[0]] * data[index[1]] * data[index[2]]
        }
      }
    }
  }
  return -1
}
