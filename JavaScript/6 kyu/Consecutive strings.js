function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return ''
  return strarr
    .map((_, i) => strarr.slice(i, i + k).join(''))
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ''
    )
}
