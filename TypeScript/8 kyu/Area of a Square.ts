export const squareArea = (num: number): number => {
  const perimeter = num * 4
  const radius = perimeter / (2 * Math.PI)
  const area = radius ** 2

  return Math.round(area * 100) / 100
}
