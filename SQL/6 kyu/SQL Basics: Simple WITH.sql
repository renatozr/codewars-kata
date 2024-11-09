WITH special_sales AS (
  SELECT DISTINCT department_id FROM sales WHERE price > 90
)
SELECT id, name
FROM departments
WHERE id IN (SELECT department_id FROM special_sales);