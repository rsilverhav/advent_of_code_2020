import { getNewPosition } from './getNewPosition'

export function walkToBottom(map: string[], step: { dX: number; dY: number }) {
  const currentPosition = { x: 0, y: 0 }
  let treeCounter = 0
  while (currentPosition.y !== map.length - 1) {
    const { x, y, collidesWithTree } = getNewPosition({ map, currentPosition, step })
    currentPosition.x = x
    currentPosition.y = y
    treeCounter += collidesWithTree ? 1 : 0
  }

  return treeCounter
}
