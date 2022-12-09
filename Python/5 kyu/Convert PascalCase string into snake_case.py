def to_underscore(string):
    if isinstance(string, int):
        return str(string)

    new_string = string[0].lower()

    for c in string[1:]:
        if c.isupper():
            c = "_" + c.lower()

        new_string += c

    return new_string
