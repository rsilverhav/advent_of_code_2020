import { binarySearch } from './binarySearch'

export function calculateSeatId(seatNumber: string) {
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

  return row * 8 + col
}
