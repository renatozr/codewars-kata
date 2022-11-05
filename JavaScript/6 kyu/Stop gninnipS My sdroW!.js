const spinWords = string => string
  .split(" ")
  .map(w => w.length >= 5 ? [...w].reverse().join("") : w)
  .join(" ");
