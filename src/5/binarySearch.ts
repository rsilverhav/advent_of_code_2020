export function binarySearch({
  seatNumbers,
  min,
  max,
  lowChar,
  highChar,
}: {
  seatNumbers: string
  min: number
  max: number
  lowChar: string
  highChar: string
}): number {
  if (min === max || seatNumbers.length === 0) {
    return min
  }
  if (lowChar === seatNumbers[0]) {
    return binarySearch({
      seatNumbers: seatNumbers.slice(1),
      min,
      max: Math.floor(max - (max - min) / 2),
      lowChar,
      highChar,
    })
  } else if (highChar === seatNumbers[0]) {
    return binarySearch({
      seatNumbers: seatNumbers.slice(1),
      min: Math.ceil(min + (max - min) / 2),
      max,
      lowChar,
      highChar,
    })
  } else {
    throw new Error(`Unspecified char ${seatNumbers[0]}`)
  }
}
