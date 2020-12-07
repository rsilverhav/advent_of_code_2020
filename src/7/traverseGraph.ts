import { Graph, parseGraph } from './parseGraph'

export function traverseGraph(graphInfo: string[], startNode: string): Set<string> {
  const graph: Graph = parseGraph(graphInfo)
  const visited = new Set<string>([])
  const queue = [startNode]

  debugger
  while (queue.length > 0) {
    // We can assume this is a string because of while
    const current = queue.pop() as string
    visited.add(current)
    for (const child of graph[current] ?? []) {
      if (!visited.has(child) && !queue.find((q) => q === child)) {
        queue.push(child)
      }
    }
  }

  return visited
}
