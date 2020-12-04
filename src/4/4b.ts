import { input4 } from './input_4'
import { valueValidator } from './passPortValidators'
import { verifyPasspostInfo } from './verifyPassportInfo'

let counter = 0
for (const passportInfo of input4.split(/\n\n/)) {
  counter += verifyPasspostInfo(passportInfo, valueValidator) ? 1 : 0
}

console.log('Nr of valid passports: ', counter)
