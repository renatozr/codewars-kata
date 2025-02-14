WITH
    min_r_length AS (
        SELECT MIN(length) AS min_length
        FROM film
        WHERE rating = 'R'
    ),
    median_pg13_length AS (
        SELECT PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY length) AS median_length
        FROM film
        WHERE rating = 'PG-13'
    )
SELECT 
    film_id, 
    title, 
    length
FROM 
    film,
    min_r_length,
    median_pg13_length
WHERE 
    length < min_r_length.min_length OR
    length > median_pg13_length.median_length
ORDER BY 
    length ASC, 
    title ASC, 
    film_id ASC;
