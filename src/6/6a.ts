import { getUniqueAnswers } from './getUniqueAnswers'
import { input6 } from './input_6'

let sum = 0
for (const answers of input6.split(/\n\n/)) {
  sum += getUniqueAnswers(answers)
}
console.log('Sum: ', sum)
