export function meeting(s: string): string {
  const friends: string[][] = s
    .toUpperCase()
    .split(';')
    .map((friendStr: string) => friendStr.split(':'))

  friends.sort((a: string[], b: string[]) => {
    const [aFirstName, aLastName] = a
    const [bFirstName, bLastName] = b

    if (aLastName < bLastName) return -1
    if (aLastName > bLastName) return 1

    if (aFirstName < bFirstName) return -1
    if (aFirstName > bFirstName) return 1

    return 0
  })

  return friends.reduce((acc, cur) => `${acc}(${cur[1]}, ${cur[0]})`, '')
}
