import { getPairSum } from '../1/getPairSum'

export function findCipherError(values: number[], preambleSize: number) {
  for (let index = preambleSize; index < values.length; index++) {
    if (getPairSum(values[index], values.slice(index - preambleSize, index)) === -1) {
      return values[index]
    }
  }
  return -1
}
