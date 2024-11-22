export function longestRepetition(text: string): [string, number] {
  let c: string = ''
  let l: number = 0

  let lastChar: string = text[0]
  let count: number = 1

  for (let i: number = 1; i < text.length; i += 1) {
    const char: string = text[i]

    if (char === lastChar) {
      count += 1
    }

    if (char !== lastChar) {
      if (count > l) {
        c = lastChar
        l = count
      }

      lastChar = char
      count = 1
    }
  }

  if (text && count > l) {
    c = lastChar
    l = count
  }

  return [c, l]
}
