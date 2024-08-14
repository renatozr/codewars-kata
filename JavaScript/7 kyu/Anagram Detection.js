const isAnagram = (t, o) =>
  t.toLowerCase().split("").sort().join("") ===
  o.toLowerCase().split("").sort().join("");
