def is_multiple_of_index(i, e):
    if e == 0:
        return True

    if i == 0:
        return False

    return e % i == 0


def multiple_of_index(arr):
    return [e for i, e in enumerate(arr) if is_multiple_of_index(i, e)]
