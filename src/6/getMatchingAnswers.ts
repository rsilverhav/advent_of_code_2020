export function getMatchingAnswers(groupAnswers: string) {
  const groups = groupAnswers.split(/\n/g)
  let matchingAnswers = 0
  for (const answer of groups[0]) {
    if (groups.filter((g) => g.includes(answer)).length === groups.length) {
      matchingAnswers++
    }
  }

  return matchingAnswers
}
