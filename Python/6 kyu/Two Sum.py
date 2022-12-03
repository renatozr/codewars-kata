def two_sum(numbers, target):
    for i in range(len(numbers)):
        n1 = numbers[i]

        for j in range(len(numbers)):
            if i == j:
                continue

            n2 = numbers[j]

            if n1 + n2 == target:
                return [i, j]
