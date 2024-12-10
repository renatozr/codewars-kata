export function generateShape(int: number): string {
  let square = ''

  for (let i = 0; i < int; i++) {
    if (i !== 0) square += '\n'

    for (let j = 0; j < int; j++) {
      square += '+'
    }
  }

  return square
}
