export function noBoringZeros(n: number): number {
  if (n === 0) return n

  while (n % 10 === 0) {
    n /= 10
  }

  return n
}
