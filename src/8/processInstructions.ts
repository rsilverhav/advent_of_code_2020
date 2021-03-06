export function processInstructions(instructions: string[]): { acc: number; finished: boolean } {
  let acc = 0
  let programCounter = 0
  const visited = new Set<number>([])
  while (programCounter < instructions.length) {
    if (visited.has(programCounter)) {
      return { acc, finished: false }
    }
    visited.add(programCounter)
    const [op, value] = instructions[programCounter].split(' ')
    switch (op) {
      case 'nop':
        programCounter += 1
        break
      case 'acc':
        acc += Number(value)
        programCounter += 1
        break
      case 'jmp':
        programCounter += Number(value)
        break
      default:
        throw new Error(`Unknown instruction: ${op} ${value}`)
    }
  }

  return { acc, finished: programCounter === instructions.length }
}
