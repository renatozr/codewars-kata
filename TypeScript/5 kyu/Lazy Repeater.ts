export function makeLooper(str: string): () => string {
  let countLoop = -1

  return () => {
    countLoop++
    return str[countLoop % str.length]
  }
}
