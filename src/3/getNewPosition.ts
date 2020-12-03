export function getNewPosition({
  map,
  currentPosition,
  step,
}: {
  map: string[]
  currentPosition: { x: number; y: number }
  step: { dX: number; dY: number }
}): { x: number; y: number; collidesWithTree: boolean } {
  const width = map[0].length
  const newX = (currentPosition.x + step.dX) % width
  const newY = currentPosition.y + step.dY
  return { x: newX, y: newY, collidesWithTree: map[newY][newX] === '#' }
}
