import { input } from '../2/input'
import { isPasswordValid } from './isPasswordValid'

let counter = 0
for (const policyAndPassword of input) {
  if (isPasswordValid(policyAndPassword)) {
    counter++
  }
}

console.log('Nr of valid passwords: ', counter)
