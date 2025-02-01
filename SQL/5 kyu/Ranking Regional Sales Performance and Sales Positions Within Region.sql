WITH ranked_sales AS (
    SELECT
        region_id,
        sale_date,
        sales_amount,
        RANK() OVER (PARTITION BY region_id ORDER BY sales_amount DESC, sale_date DESC) AS sales_rank_within_region
    FROM daily_sales
),
top_sales AS (
    SELECT
        region_id,
        sale_date,
        sales_amount
    FROM ranked_sales
    WHERE sales_rank_within_region = 1
),
earliest_top_sale AS (
    SELECT
        region_id,
        sale_date AS top_sale_date,
        RANK() OVER (ORDER BY sale_date ASC, region_id DESC) AS earliest_top_sale_rank
    FROM top_sales
)
SELECT
    rs.region_id,
    rs.sale_date,
    rs.sales_amount,
    rs.sales_rank_within_region,
    ets.earliest_top_sale_rank
FROM ranked_sales rs
JOIN earliest_top_sale ets
    ON rs.region_id = ets.region_id
ORDER BY
    ets.earliest_top_sale_rank ASC, 
    rs.sales_rank_within_region ASC;
