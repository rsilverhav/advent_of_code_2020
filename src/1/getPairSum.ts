export function getPairSum(targetValue: number, availableNumbers: number[]): number {
  const numbersSet = new Set(availableNumbers)
  for (const currentNumber of availableNumbers) {
    const pairNumber = targetValue - currentNumber
    if (numbersSet.has(pairNumber)) {
      return currentNumber * pairNumber
    }
  }

  return -1
}
