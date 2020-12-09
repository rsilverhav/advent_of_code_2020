import { findContiguousSum } from './findContiguousSum'
import { input9 } from './input_9'

const contigouosSum = findContiguousSum(input9, 105950735)
console.log(
  'Contiguous weakness: ',
  Math.min.apply(Math, contigouosSum) + Math.max.apply(Math, contigouosSum)
)
