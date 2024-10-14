function warnTheSheep(queue) {
  const wolfIndex = queue.findIndex((a) => a === 'wolf')
  const sheepInDangerNumber = queue.length - wolfIndex - 1

  if (sheepInDangerNumber === 0) return 'Pls go away and stop eating my sheep'

  return `Oi! Sheep number ${sheepInDangerNumber}! You are about to be eaten by a wolf!`
}
