const MORSE_CODE = {}

export function decodeMorse(morseCode: string): string {
  let spaced: boolean = false

  return morseCode
    .trim()
    .split(' ')
    .reduce((acc: string, cur: string) => {
      if (cur === '') {
        if (spaced) {
          return acc
        }

        spaced = true
        return acc + ' '
      }

      spaced = false
      return acc + MORSE_CODE[cur]
    }, '')
}
