import math


def get_divisors(n):
    divisors = []
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            divisors.append(i)
            if i != n // i:
                divisors.append(n // i)
    return divisors


def list_squared(m, n):
    result = []
    for num in range(m, n + 1):
        divisors = get_divisors(num)
        sum_of_squares = sum(d**2 for d in divisors)
        if math.isqrt(sum_of_squares) ** 2 == sum_of_squares:
            result.append([num, sum_of_squares])
    return result
