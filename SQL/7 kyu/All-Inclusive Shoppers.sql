SELECT user_id, name
FROM users JOIN orders ON user_id = users.id
GROUP BY user_id, name
HAVING COUNT(DISTINCT product_id) = (SELECT COUNT(*) FROM products)
ORDER BY user_id DESC;
