export function escape(carpark: number[][]): string[] {
  const route: string[] = []

  let moveDownCount: number = 0

  for (let i: number = 0; i < carpark.length; i += 1) {
    const floor: number[] = carpark[i]

    const myPos: number = floor.findIndex((space: number) => space === 2)
    if (myPos === -1) continue

    if (i === carpark.length - 1) {
      if (moveDownCount > 0) {
        route.push(`D${moveDownCount}`)
        moveDownCount = 0
      }
      const exitDist = floor.length - myPos - 1

      if (exitDist !== 0) {
        route.push(`R${floor.length - myPos - 1}`)
      }

      break
    }

    const stairPos: number = floor.findIndex((space: number) => space === 1)
    if (stairPos === -1) {
      moveDownCount += 1
      carpark[i + 1][myPos] = 2
      continue
    }

    if (moveDownCount > 0) {
      route.push(`D${moveDownCount}`)
      moveDownCount = 0
    }

    const posDiff: number = stairPos - myPos
    const dist: number = Math.abs(posDiff)

    route.push(posDiff > 0 ? `R${dist}` : `L${dist}`)
    moveDownCount += 1
    carpark[i + 1][stairPos] = 2
  }

  return route
}
