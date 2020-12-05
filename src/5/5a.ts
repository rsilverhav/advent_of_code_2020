import { calculateSeatId } from './calculateSeatId'
import { input5 } from './input_5'

let highestId = 0
for (const seatNumber of input5) {
  const currentId = calculateSeatId(seatNumber)
  highestId = currentId > highestId ? currentId : highestId
}

console.log('Highest ID: ', highestId)
