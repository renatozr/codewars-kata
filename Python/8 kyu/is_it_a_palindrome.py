def is_palindrome(s):
    s_len = len(s)

    for i in range(s_len):
        j = s_len - 1 - i

        if s[i].lower() != s[j].lower():
            return False

    return True
