import { input2 } from '../2/input_2'
import { isPasswordPositionValid } from './isPasswordPositionValid'

let counter = 0
for (const policyAndPassword of input2) {
  if (isPasswordPositionValid(policyAndPassword)) {
    counter++
  }
}

console.log('Nr of valid passwords: ', counter)
