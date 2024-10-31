SELECT
  t.transaction_id,
  t.date,
  CASE
    WHEN COUNT(DISTINCT tc.supplier) = 1 THEN MAX(tc.supplier)
    ELSE 'Several'
  END AS supplier
FROM transaction t
JOIN transaction_content tc ON tc.transaction_id = t.transaction_id
GROUP BY t.transaction_id
ORDER BY t.transaction_id;
