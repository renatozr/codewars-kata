def largest_pair_sum(numbers):
    n1, n2 = sorted(numbers)[-2:]

    return n1 + n2
