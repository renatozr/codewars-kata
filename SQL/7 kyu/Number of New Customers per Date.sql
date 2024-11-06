WITH first_purchase AS (
  SELECT customer_id, MIN(DATE) AS first_purchase_date
  FROM customer_purchases
  GROUP BY customer_id
)
SELECT first_purchase_date AS date, COUNT(customer_id) AS num_new_customers
FROM first_purchase
GROUP BY first_purchase_date
ORDER BY date ASC;