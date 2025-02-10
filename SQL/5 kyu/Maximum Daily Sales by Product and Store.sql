WITH max_sales AS (
    SELECT
        store_id,
        product_id,
        transaction_date,
        quantity,
        ROW_NUMBER() OVER (PARTITION BY store_id, product_id ORDER BY quantity DESC, transaction_date ASC) AS rn
    FROM sales
),
max_sales_per_product AS (
    SELECT
        store_id,
        product_id,
        transaction_date,
        quantity AS max_quantity
    FROM max_sales
    WHERE rn = 1
),
total_sales_per_day AS (
    SELECT
        store_id,
        product_id,
        transaction_date,
        SUM(quantity) AS total_quantity_on_max_day
    FROM sales
    GROUP BY store_id, product_id, transaction_date
)
SELECT
    m.store_id,
    m.product_id,
    m.transaction_date,
    m.max_quantity,
    t.total_quantity_on_max_day
FROM max_sales_per_product m
JOIN total_sales_per_day t
    ON m.store_id = t.store_id
    AND m.product_id = t.product_id
    AND m.transaction_date = t.transaction_date
ORDER BY m.store_id ASC, m.product_id ASC;
