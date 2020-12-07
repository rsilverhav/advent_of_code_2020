import { input7 } from './input_7'
import { traverseGraphUniqueBags } from './traverseGraphUniqueBags'

console.log(
  'Nr of nodes (excluding start node)',
  traverseGraphUniqueBags({ graphInfo: input7, startNode: 'shiny gold', childrenAsKey: true })
    .size - 1
)
