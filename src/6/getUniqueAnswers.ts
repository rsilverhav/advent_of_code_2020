export function getUniqueAnswers(groupAnswers: string): number {
  return new Set(Array.from(groupAnswers.replace(/\n/g, ''))).size
}
