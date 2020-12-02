import { parsePolicyAndPassword } from './parsePolicyAndPassword'

export function isPasswordValid(policyAndPassword: string): boolean {
  const { min, max, char, password } = parsePolicyAndPassword(policyAndPassword)
  const cleanPassword = password.replace(new RegExp(`[^${char}]`, 'g'), '')
  return cleanPassword.length >= min && cleanPassword.length <= max
}
