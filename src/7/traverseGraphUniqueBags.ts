import { Graph, parseGraph } from './parseGraph'

export function traverseGraphUniqueBags({
  graphInfo,
  startNode,
  childrenAsKey,
}: {
  graphInfo: string[]
  startNode: string
  childrenAsKey: boolean
}): Set<string> {
  const graph: Graph = parseGraph(graphInfo, childrenAsKey)
  const visited = new Set<string>([])
  const queue = [startNode]

  while (queue.length > 0) {
    // We can assume this is a string because of while
    const current = queue.pop() as string
    visited.add(current)
    for (const child of graph[current] ?? []) {
      if (!visited.has(child.name) && !queue.find((q) => q === child.name)) {
        queue.push(child.name)
      }
    }
  }

  return visited
}
