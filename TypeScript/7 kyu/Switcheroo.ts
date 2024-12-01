export function switcheroo(x: string): string {
  return x
    .split('')
    .map((char) => (char === 'a' ? 'b' : char === 'b' ? 'a' : char))
    .join('')
}
