def increment_string(string):
    for i in range(len(string)):
        substring = string[i:]

        if substring.isdigit():
            return string[:i] + str(int(substring) + 1).zfill(len(substring))

    return string + "1"
