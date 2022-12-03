const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((e, i) => sum(a, 0, i) === sum(a, i + 1));
