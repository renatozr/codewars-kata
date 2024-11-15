export const getEvenNumbers = (numbersArray: number[]): number[] => {
  return numbersArray.filter((num) => num % 2 === 0)
}
