SELECT 
    TRIM(
        COALESCE(prefix || ' ', '') || 
        COALESCE(first || ' ', '') || 
        COALESCE(last || ' ', '') || 
        COALESCE(suffix, '')
    ) AS title
FROM 
    names;
