export function cleanString(s: string): string {
  let result: string = ''

  for (let i: number = 0; i < s.length; i += 1) {
    const char: string = s[i]

    if (char === '#') {
      result = result.substr(0, result.length - 1)
      continue
    }

    result += char
  }

  return result
}
