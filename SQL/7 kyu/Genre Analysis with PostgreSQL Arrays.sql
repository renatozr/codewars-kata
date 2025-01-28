SELECT
    genre,
    COUNT(*) AS count,
    ARRAY_AGG(title ORDER BY title) AS books
FROM
    books,
    UNNEST(genres) AS genre
GROUP BY
    genre
ORDER BY
    count DESC,
    genre ASC;
