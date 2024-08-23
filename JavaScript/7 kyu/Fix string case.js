function solve(s) {
  let lowercaseCount = 0,
    uppercaseCount = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (char === char.toLowerCase()) {
      lowercaseCount += 1;
    } else {
      uppercaseCount += 1;
    }
  }

  return lowercaseCount >= uppercaseCount ? s.toLowerCase() : s.toUpperCase();
}
