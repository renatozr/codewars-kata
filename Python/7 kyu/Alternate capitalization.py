def capitalize(s):
    return [
        "".join(char.upper() if i % 2 == 0 else char for i, char in enumerate(s)),
        "".join(char.upper() if i % 2 == 1 else char for i, char in enumerate(s)),
    ]
