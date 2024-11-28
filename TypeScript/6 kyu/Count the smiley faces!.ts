export function countSmileys(arr: string[]): number {
  return arr.reduce((count: number, face: string) => {
    const eyes: string = face[0]
    let nose: string = ''
    let mouth: string = face[1]

    if (face.length === 3) {
      nose = face[1]
      mouth = face[2]
    }

    if (
      [':', ';'].includes(eyes) &&
      ['', '-', '~'].includes(nose) &&
      [')', 'D'].includes(mouth)
    ) {
      return count + 1
    }

    return count
  }, 0)
}
