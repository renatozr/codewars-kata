import math


def proper_fractions(d):
    if d == 1:
        return 0

    result = d
    p = 2
    while p * p <= d:
        if d % p == 0:
            while d % p == 0:
                d //= p
            result -= result // p
        p += 1

    if d > 1:
        result -= result // d

    return result
