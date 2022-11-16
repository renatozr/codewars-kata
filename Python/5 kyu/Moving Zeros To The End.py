def move_zeros(lst):
    zero_count = lst.count(0)
    lst = [n for n in lst if n != 0]

    lst.extend(0 for i in range(zero_count))

    return lst
