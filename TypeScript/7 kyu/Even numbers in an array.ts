export function evenNumbers(array: number[], n: number): number[] {
  const evenArray: number[] = array.filter((num) => num % 2 === 0).slice()

  return evenArray.slice(evenArray.length - n)
}
