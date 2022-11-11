def tower_builder(n_floors):
    return [
        " " * (n_floors - 1 - n) + "*" * (n * 2 + 1) + " " * (n_floors - 1 - n)
        for n in range(0, n_floors)
    ]
