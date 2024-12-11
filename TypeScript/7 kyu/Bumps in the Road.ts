export function bump(x: string): string {
  let bumpCount = 0

  for (const road of x) {
    if (road === 'n') bumpCount += 1
  }

  if (bumpCount <= 15) return 'Woohoo!'

  return 'Car Dead'
}
