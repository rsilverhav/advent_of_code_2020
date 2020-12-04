import { input2 } from './input_2'
import { isPasswordValid } from './isPasswordValid'

let counter = 0
for (const policyAndPassword of input2) {
  if (isPasswordValid(policyAndPassword)) {
    counter++
  }
}

console.log('Nr of valid passwords: ', counter)
