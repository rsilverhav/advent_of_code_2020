import { Graph, parseGraph } from './parseGraph'

export function traverseGraphCountBags({
  graphInfo,
  startNode,
  childrenAsKey,
}: {
  graphInfo: string[]
  startNode: string
  childrenAsKey: boolean
}): number {
  const graph: Graph = parseGraph(graphInfo, childrenAsKey)
  const queue = [startNode]
  let bagCount = 0

  while (queue.length > 0) {
    // We can assume this is a string because of while
    const current = queue.pop() as string
    for (const child of graph[current] ?? []) {
      bagCount += child.amount
      for (let i = 0; i < child.amount; i++) {
        queue.push(child.name)
      }
    }
  }

  return bagCount
}
