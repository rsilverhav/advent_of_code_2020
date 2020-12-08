import { processInstructions } from '../processInstructions'

describe('processInstructions', () => {
  fit('should parse given test instructions and return correct ACC value', () => {
    const input = [
      'nop +0',
      'acc +1',
      'jmp +4',
      'acc +3',
      'jmp -3',
      'acc -99',
      'acc +1',
      'jmp -4',
      'acc +6',
    ]

    expect(processInstructions(input)).toEqual({ acc: 5, finished: false })
  })
})
