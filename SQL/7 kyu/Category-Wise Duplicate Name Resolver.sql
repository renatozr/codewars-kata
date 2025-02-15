SELECT
    item_id,
    category_id,
    CASE 
        WHEN row_num = 1 THEN item_name
        ELSE CONCAT(item_name, '_', row_num)
    END AS item_name
FROM (
    SELECT 
        item_id,
        category_id,
        item_name,
        ROW_NUMBER() OVER (
            PARTITION BY category_id, LOWER(item_name) 
            ORDER BY item_id
        ) AS row_num
    FROM items
) sub
ORDER BY category_id, item_id;
