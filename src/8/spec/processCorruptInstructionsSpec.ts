import { processCorruptInstructions } from '../processCorruptInstructions'

describe('processCorruptInstructions', () => {
  it('should find a way to run the whole program by changing exactly 1 jmp or nop instruction', () => {
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

    expect(processCorruptInstructions(input)).toBe(8)
  })
})
