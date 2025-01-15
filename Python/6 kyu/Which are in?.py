def in_array(array1, array2):
    result = set()

    for substring in array1:
        for string in array2:
            if substring in string:
                result.add(substring)
                break

    return sorted(result)
