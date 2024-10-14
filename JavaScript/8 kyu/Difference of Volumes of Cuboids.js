function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, cur) => acc * cur) - b.reduce((acc, cur) => acc * cur)
  )
}
