export const primeFactors = (n: number): string => {
  const factors: { [key: number]: number } = {}

  const countFactors = (prime: number): void => {
    while (n % prime === 0) {
      factors[prime] = (factors[prime] || 0) + 1
      n /= prime
    }
  }

  countFactors(2)

  let i = 3
  while (i * i <= n) {
    countFactors(i)
    i += 2
  }

  if (n > 1) {
    factors[n] = (factors[n] || 0) + 1
  }

  return Object.keys(factors)
    .map((key) => {
      const prime = Number(key)
      const power = factors[prime]
      return power > 1 ? `(${prime}**${power})` : `(${prime})`
    })
    .join('')
}
