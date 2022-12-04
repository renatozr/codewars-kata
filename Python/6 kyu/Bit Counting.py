def count_bits(n):
    count = 0

    while n > 0:
        i = 0

        while True:
            if 2**i > n:
                break

            b2 = 2**i
            i += 1

        n -= b2
        count += 1

    return count
