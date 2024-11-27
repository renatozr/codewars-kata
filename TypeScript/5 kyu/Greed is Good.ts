export function score(dices: number[]): number {
  const dicesCounter: { [dice: string]: number } = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
  }
  dices.forEach((dice: number) => (dicesCounter[dice] += 1))

  let points: number = 0

  Object.entries(dicesCounter).forEach(([dice, count]: [string, number]) => {
    const diceInt: number = parseInt(dice)

    if (count >= 3) {
      points += dice === '1' ? diceInt * 1000 : diceInt * 100
      count -= 3
    }

    if (dice === '1') points += 100 * count
    if (dice === '5') points += 50 * count
  })

  return points
}
