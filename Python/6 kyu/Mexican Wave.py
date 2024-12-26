def wave(people):
    arr = []

    for i in range(0, len(people)):
        if people[i] == " ":
            continue

        arr.append(f"{people[:i]}{people[i].upper()}{people[i+1:]}")

    return arr
