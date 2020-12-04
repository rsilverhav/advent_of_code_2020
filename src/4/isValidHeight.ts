export const isValidHeight = (
  height: string,
  min: { cm: number; in: number },
  max: { cm: number; in: number }
) => {
  const heightInfo = /^(\d+)(\w{2})$/.exec(height)?.slice(1)
  debugger
  if (typeof heightInfo === 'undefined') {
    return false
  }
  if (heightInfo[1] === 'in') {
    return Number(heightInfo[0]) >= min.in && Number(heightInfo[0]) <= max.in
  } else if (heightInfo[1] === 'cm') {
    return Number(heightInfo[0]) >= min.cm && Number(heightInfo[0]) <= max.cm
  }

  return false
}
