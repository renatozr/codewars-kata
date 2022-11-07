def dig_pow(n, p):
    s = 0

    for i, d in enumerate(str(n)):
        s += int(d) ** (p + i)

    return s / n if s % n == 0 else -1
