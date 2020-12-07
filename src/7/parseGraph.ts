export type Graph = { [key: string]: { name: string; amount: number }[] }

export function parseGraph(graphInfo: string[], childrenAsKey: boolean): Graph {
  const result: Graph = {}
  for (const nodeInfo of graphInfo) {
    const [name, children] = /(.*) bags contain (.*)\./.exec(nodeInfo)?.slice(1) ?? []
    if (/\d/.test(children)) {
      for (const child of children.split(',')) {
        const [amount, childName] = /(\d+) (.*) bag/.exec(child)?.slice(1) ?? []
        if (typeof result[childrenAsKey ? childName : name] === 'undefined') {
          result[childrenAsKey ? childName : name] = []
        }
        result[childrenAsKey ? childName : name].push({
          name: childrenAsKey ? name : childName,
          amount: Number(amount),
        })
      }
    }
  }
  return result
}
