def vowel_indices(word):
    return [i + 1 for i, letter in enumerate(word) if letter in "aeiouyAEIOUY"]
