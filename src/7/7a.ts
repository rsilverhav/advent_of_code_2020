import { input7 } from './input_7'
import { traverseGraph } from './traverseGraph'

console.log('Nr of nodes (excluding start node)', traverseGraph(input7, 'shiny gold').size - 1)
