function isValidWalk(walk) {
  if (walk.length !== 10) return false

  const directionsCount = {}

  walk.forEach((direction) => {
    if (!Object.keys(directionsCount).includes(direction)) {
      directionsCount[direction] = 0
    }

    directionsCount[direction] += 1
  })

  return (
    directionsCount['n'] === directionsCount['s'] &&
    directionsCount['w'] === directionsCount['e']
  )
}
