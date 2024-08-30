def multiplication_table(size):
    table = []

    for i in range(size):
        table.append([])

        for j in range(1, size + 1):
            table[i].append(j * (i + 1))

    return table
