export function sumCubes(n: number): number {
  let sum: number = 1

  for (let i: number = 2; i <= n; i += 1) {
    sum += i ** 3
  }

  return sum
}
