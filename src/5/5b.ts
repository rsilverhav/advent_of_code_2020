import { calculateSeatPosition } from './calculateSeatPosition'
import { input5 } from './input_5'

function getFirstMissingExistingSeat(seatNumbers: string[]) {
  const occupiedSeats = new Set<string>([])
  for (const seatNumber of seatNumbers) {
    const { row, col } = calculateSeatPosition(seatNumber)
    occupiedSeats.add(`${row}:${col}`)
  }
  let lastMissing = true
  for (let row = 0; row <= 127; row++) {
    for (let col = 0; col <= 7; col++) {
      const isMissing = !occupiedSeats.has(`${row}:${col}`)
      if (isMissing && !lastMissing) {
        return row * 8 + col
      }
      lastMissing = isMissing
    }
  }
  return -1
}

console.log('Your seat: ', getFirstMissingExistingSeat(input5))
