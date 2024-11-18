export function noOdds(values: number[]): number[] {
  return values.filter((val: number) => val % 2 === 0)
}
