SELECT
  DATE(created_at) AS day,
  description,
  COUNT(id) AS count
FROM
  events
WHERE
  name = 'trained'
GROUP BY
  DATE(created_at),
  description
ORDER BY
  day;