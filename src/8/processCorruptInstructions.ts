import { processInstructions } from './processInstructions'

function getReplacementInstruction(instruction: string) {
  if (instruction.includes('nop')) {
    return instruction.replace('nop', 'jmp')
  } else if (instruction.includes('jmp')) {
    return instruction.replace('jmp', 'nop')
  }
  throw new Error('Failed create replacement instruction')
}

export function processCorruptInstructions(instructions: string[]): number {
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i].includes('acc')) {
      continue
    }

    const instructionsCopy: string[] = Object.assign([], instructions)
    instructionsCopy[i] = getReplacementInstruction(instructions[i])
    const res = processInstructions(instructionsCopy)
    if (res.finished) {
      return res.acc
    }
  }
  return -1
}
