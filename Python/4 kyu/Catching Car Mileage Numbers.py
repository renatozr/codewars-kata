def is_interesting(number, awesome_phrases):
    def all_zeros(num):
        return num[1:] == "0" * (len(num) - 1)

    def all_same(num):
        return len(set(num)) == 1

    def sequential_inc(num):
        return num in "1234567890"

    def sequential_dec(num):
        return num in "9876543210"

    def is_palindrome(num):
        return num == num[::-1]

    def in_awesome_phrases(num):
        return int(num) in awesome_phrases

    def check_interesting(num):
        if num < 100:
            return False
        str_num = str(num)
        return (
            all_zeros(str_num)
            or all_same(str_num)
            or sequential_inc(str_num)
            or sequential_dec(str_num)
            or is_palindrome(str_num)
            or in_awesome_phrases(str_num)
        )

    if check_interesting(number):
        return 2
    if check_interesting(number + 1) or check_interesting(number + 2):
        return 1
    return 0
