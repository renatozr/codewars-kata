class CustomInt(int):
    def __call__(self, n):
        return CustomInt(self + n)


def add(n):
    return CustomInt(n)
