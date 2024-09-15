def gimme(input_array):
    return sorted(enumerate(input_array), key=lambda e: e[1])[1][0]
