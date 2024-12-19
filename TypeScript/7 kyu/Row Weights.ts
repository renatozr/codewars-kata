export function rowWeights(arr: number[]) {
  return arr.reduce(
    (acc: number[], cur: number, i: number) =>
      i % 2 === 0 ? [acc[0] + cur, acc[1]] : [acc[0], acc[1] + cur],
    [0, 0]
  )
}
