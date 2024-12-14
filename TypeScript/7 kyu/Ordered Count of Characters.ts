export function orderedCount(text: string): [string, number][] {
  const charMap = new Map<string, number>()

  for (const char of text) {
    charMap.set(char, (charMap.get(char) || 0) + 1)
  }

  return Array.from(charMap)
}
