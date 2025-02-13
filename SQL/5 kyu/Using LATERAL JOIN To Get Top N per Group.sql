SELECT 
    c.id AS category_id,
    c.category,
    p.title,
    p.views,
    p.id AS post_id
FROM 
    categories c
LEFT JOIN LATERAL (
    SELECT 
        p.title,
        p.views,
        p.id
    FROM 
        posts p
    WHERE 
        p.category_id = c.id
    ORDER BY 
        p.views DESC, p.id ASC
    LIMIT 2
) p ON true
ORDER BY 
    c.category, 
    p.views DESC NULLS LAST, 
    p.id ASC NULLS LAST;
