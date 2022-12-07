from itertools import combinations


def choose_best_sum(t, k, ls):
    try:
        return max(sum(c) for c in combinations(ls, k) if sum(c) <= t)
    except ValueError:
        return None
