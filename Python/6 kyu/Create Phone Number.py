def create_phone_number(n):
    n = "".join(str(e) for e in n)

    return f"({n[:3]}) {n[3:6]}-{n[6:]}"
