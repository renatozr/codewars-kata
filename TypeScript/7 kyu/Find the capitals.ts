export function capitals(word: string): number[] {
  return word
    .split('')
    .reduce(
      (acc: number[], cur: string, i: number) =>
        cur === cur.toUpperCase() ? [...acc, i] : acc,
      []
    )
}
