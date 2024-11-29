export const mxdiflg = (a1: string[], a2: string[]): number => {
  if (a1.length === 0 || a2.length === 0) return -1

  const a1Lengths: number[] = a1.map((s: string) => s.length)
  const a2Lengths: number[] = a2.map((s: string) => s.length)
  const [a1MinLength, a1MaxLength] = [
    Math.min(...a1Lengths),
    Math.max(...a1Lengths),
  ]
  const [a2MinLength, a2MaxLength] = [
    Math.min(...a2Lengths),
    Math.max(...a2Lengths),
  ]

  return Math.max(
    Math.abs(a1MaxLength - a2MinLength),
    Math.abs(a2MaxLength - a1MinLength)
  )
}
