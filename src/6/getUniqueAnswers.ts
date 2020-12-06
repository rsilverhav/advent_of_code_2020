export function getUniqueAnswers(answers: string): number {
  return new Set(Array.from(answers.replace(/\n/g, ''))).size
}
