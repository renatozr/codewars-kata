SELECT
  t.id,
  t.heads,
  b.legs,
  t.arms,
  b.tails,
  CASE 
    WHEN t.heads > t.arms THEN 'BEAST'
    WHEN b.tails > b.legs THEN 'BEAST'
    ELSE 'WEIRDO'
  END AS species
FROM top_half t
JOIN bottom_half b ON t.id = b.id
ORDER BY species;
