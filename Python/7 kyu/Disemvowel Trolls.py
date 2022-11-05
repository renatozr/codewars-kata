def disemvowel(s):
    return "".join([c for c in s if c.lower() not in "aeiou"])
