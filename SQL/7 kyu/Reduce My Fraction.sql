WITH gcd_cte AS (
    SELECT 
        numerator,
        denominator,
        (
            WITH RECURSIVE gcd(a, b) AS (
                SELECT numerator, denominator
                UNION ALL
                SELECT b, a % b
                FROM gcd
                WHERE b != 0
            )
            SELECT a 
            FROM gcd 
            WHERE b = 0
        ) AS gcd_value
    FROM fraction
)
SELECT 
    numerator,
    denominator,
    numerator / gcd_value AS reduced_numerator,
    denominator / gcd_value AS reduced_denominator
FROM gcd_cte
ORDER BY numerator ASC, denominator ASC;
