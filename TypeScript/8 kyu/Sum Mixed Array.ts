export function sumMix(x: (number | string)[]): number {
  return x.reduce((acc: number, cur: number | string) => acc + Number(cur), 0)
}
