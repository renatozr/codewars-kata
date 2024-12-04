export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  return [...iterable].filter((v, i) => v !== iterable[i - 1])
}
