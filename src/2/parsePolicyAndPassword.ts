export function parsePolicyAndPassword(policyAndPassword: string) {
  const [min, max, char, password] =
    /(\d+)-(\d+) (\w): (.*)/g.exec(policyAndPassword)?.slice(1) ?? []
  return { min: Number(min), max: Number(max), char, password }
}
