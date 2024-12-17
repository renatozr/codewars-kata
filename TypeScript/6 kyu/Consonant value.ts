export function solve(s: string): number {
  const alphaMap: { [key: string]: number } = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((acc: { [key: string]: number }, cur: string, i: number) => {
      acc[cur] = i + 1
      return acc
    }, {})
  const consonantsSubstrings: string[] = s.split(/[aeiou]/g)
  let highest: number = 0

  for (let i: number = 0; i < consonantsSubstrings.length; i += 1) {
    const consonantsSubstring: string = consonantsSubstrings[i]
    const value: number = consonantsSubstring
      .split('')
      .reduce((acc: number, cur: string) => acc + alphaMap[cur], 0)

    if (value > highest) highest = value
  }

  return highest
}
