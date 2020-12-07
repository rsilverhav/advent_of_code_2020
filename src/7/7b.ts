import { input7 } from './input_7'
import { traverseGraphCountBags } from './traverseGraphCountBags'

console.log(
  'Bag count: ',
  traverseGraphCountBags({
    graphInfo: input7,
    startNode: 'shiny gold',
    childrenAsKey: false,
  })
)
