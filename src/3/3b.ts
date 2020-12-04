import { input3 } from './input_3'
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
  results.push(walkToBottom(input3, slope))
}
console.log(results.reduce((all, next) => all * next, 1))
