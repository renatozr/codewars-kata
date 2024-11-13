export function findMultiples(integer: number, limit: number): number[] {
  const multiples: number[] = [integer]

  let i = 2
  while (true) {
    const multiple = i * integer

    if (multiple > limit) break

    multiples.push(multiple)
    i += 1
  }

  return multiples
}
