WITH RankedPosts AS (
    SELECT 
        c.id AS category_id,
        c.category,
        p.title,
        p.views,
        p.id AS post_id,
        ROW_NUMBER() OVER (
            PARTITION BY c.id
            ORDER BY p.views DESC, p.id ASC
        ) AS rank
    FROM 
        categories c
    LEFT JOIN 
        posts p ON c.id = p.category_id
)
SELECT 
    category_id,
    category,
    title,
    views,
    post_id
FROM 
    RankedPosts
WHERE 
    rank <= 2
ORDER BY 
    category ASC,
    views DESC,
    post_id ASC;