import re


def differentiate(polynomial, point):
    terms = re.findall(r"([+-]?\d*)x(?:\^(\d+))?|([+-]?\d+)", polynomial)
    derivative = 0

    for coeff, exp, constant in terms:
        if constant:
            continue

        coeff = (
            int(coeff)
            if coeff not in ("", "+", "-")
            else (1 if coeff in ("", "+") else -1)
        )

        exp = int(exp) if exp else 1

        if exp > 0:
            derivative += coeff * exp * (point ** (exp - 1))

    return derivative
