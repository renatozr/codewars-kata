def delete_nth(order, max_e):
    n_count = {}
    new_order = []

    for n in order:
        if n not in n_count:
            n_count[n] = 0
        n_count[n] += 1

        if n_count[n] <= max_e:
            new_order.append(n)

    return new_order
