export function nthFibo(n: number): number {
  let num: number = 0
  let lastNum: number = 1

  while (n > 1) {
    ;[num, lastNum] = [num + lastNum, num]

    n -= 1
  }

  return num
}
