from string import ascii_lowercase


def high(x):
    alpha = list(ascii_lowercase)
    points_by_letter = {alpha[i]: i + 1 for i in range(26)}
    words = x.split()

    return max(
        words,
        key=lambda word: sum(points_by_letter[letter] for letter in word),
    )
