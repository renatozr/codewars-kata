WITH monthly_posts AS (
  SELECT
    DATE_TRUNC('month', created_at) AS first_of_month,
    COUNT(*) AS post_count
  FROM posts
  GROUP BY first_of_month
)
SELECT
  first_of_month::DATE AS date,
  post_count AS count,
  CASE
    WHEN LAG(post_count) OVER (ORDER BY first_of_month) IS NULL THEN NULL
    ELSE
      ROUND(
        100.0 * (post_count - LAG(post_count) OVER (ORDER BY first_of_month)) / LAG(post_count) OVER (ORDER BY first_of_month),
        1
      ) || '%'
  END AS percent_growth
FROM monthly_posts
ORDER BY first_of_month;
