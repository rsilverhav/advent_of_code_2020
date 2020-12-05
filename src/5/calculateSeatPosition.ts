import { binarySearch } from './binarySearch'

export function calculateSeatPosition(seatNumber: string): { row: number; col: number } {
  const row = binarySearch({
    seatNumbers: seatNumber.replace(/[^FB]/g, ''),
    min: 0,
    max: 127,
    lowChar: 'F',
    highChar: 'B',
  })
  const col = binarySearch({
    seatNumbers: seatNumber.replace(/[^LR]/g, ''),
    min: 0,
    max: 7,
    lowChar: 'L',
    highChar: 'R',
  })

  return { row, col }
}
