import { input } from '../2/input'
import { isPasswordPositionValid } from './isPasswordPositionValid'

let counter = 0
for (const policyAndPassword of input) {
  if (isPasswordPositionValid(policyAndPassword)) {
    counter++
  }
}

console.log('Nr of valid passwords: ', counter)
