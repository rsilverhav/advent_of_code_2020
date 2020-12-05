import { calculateSeatPosition } from './calculateSeatPosition'
import { input5 } from './input_5'

let highestId = 0
for (const seatNumber of input5) {
  const { row, col } = calculateSeatPosition(seatNumber)
  const currentId = row * 8 + col
  highestId = currentId > highestId ? currentId : highestId
}

console.log('Highest ID: ', highestId)
