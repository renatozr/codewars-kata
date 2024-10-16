const points = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)
