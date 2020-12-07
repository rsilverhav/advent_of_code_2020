export type Graph = { [key: string]: Set<string> }

export function parseParentsGraph(graphInfo: string[]): Graph {
  const result: { [key: string]: Set<string> } = {}
  for (const nodeInfo of graphInfo) {
    const [name, children] = /(.*) bags contain (.*)\./.exec(nodeInfo)?.slice(1) ?? []
    if (/\d/.test(children)) {
      for (const child of children.split(',')) {
        const [childName] = /\d+ (.*) bag/.exec(child)?.slice(1) ?? []
        if (typeof result[childName] === 'undefined') {
          result[childName] = new Set([])
        }
        result[childName].add(name)
      }
    }
  }
  return result
}
