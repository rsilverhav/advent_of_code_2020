import { input } from './input'
import { walkToBottom } from './walkToBottom'

const results: number[] = []
const slopes = [
  { dX: 1, dY: 1 },
  { dX: 3, dY: 1 },
  { dX: 5, dY: 1 },
  { dX: 7, dY: 1 },
  { dX: 1, dY: 2 },
]

for (const slope of slopes) {
  results.push(walkToBottom(input, slope))
}
console.log(results.reduce((all, next) => all * next, 1))
