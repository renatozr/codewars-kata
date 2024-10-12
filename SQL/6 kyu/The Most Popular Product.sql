WITH product_order_counts AS (
  SELECT o.product_id, p.product_name, COUNT(*) AS count_orders
  FROM orders AS o
  JOIN products AS p ON o.product_id = p.id
  GROUP BY o.product_id, p.product_name
)
SELECT product_id, product_name, count_orders
FROM product_order_counts
WHERE count_orders = (SELECT MAX(count_orders) FROM product_order_counts)
ORDER BY product_id DESC;