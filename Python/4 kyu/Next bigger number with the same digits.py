def next_bigger(n):
    digits = list(str(n))
    length = len(digits)

    for i in range(length - 2, -1, -1):
        if digits[i] < digits[i + 1]:
            for j in range(length - 1, i, -1):
                if digits[j] > digits[i]:
                    digits[i], digits[j] = digits[j], digits[i]

                    digits = digits[: i + 1] + sorted(digits[i + 1 :])

                    return int("".join(digits))

    return -1
