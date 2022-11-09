def comp(arr1, arr2):
    try:
        return sorted([n * n for n in arr1]) == sorted(arr2)
    except:
        return False
