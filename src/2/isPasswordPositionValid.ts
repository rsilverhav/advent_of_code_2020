import { parsePolicyAndPassword } from './parsePolicyAndPassword'

export function isPasswordPositionValid(policyAndPassword: string): boolean {
  const { min, max, char, password } = parsePolicyAndPassword(policyAndPassword)
  const firstCorrect = password[min - 1] === char
  const secondCorrect = password[max - 1] === char
  return (firstCorrect ? 1 : 0) + (secondCorrect ? 1 : 0) === 1
}
