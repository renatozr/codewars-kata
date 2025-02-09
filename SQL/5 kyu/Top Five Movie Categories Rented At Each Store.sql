WITH category_rentals AS (
    SELECT 
        s.store_id,
        c.name AS category,
        COUNT(r.rental_id) AS num_rentals
    FROM 
        rental r
    JOIN 
        inventory i ON r.inventory_id = i.inventory_id
    JOIN 
        film_category fc ON i.film_id = fc.film_id
    JOIN 
        category c ON fc.category_id = c.category_id
    JOIN 
        store s ON i.store_id = s.store_id
    GROUP BY 
        s.store_id, c.name
),
ranked_categories AS (
    SELECT 
        store_id,
        category,
        num_rentals,
        ROW_NUMBER() OVER (PARTITION BY store_id ORDER BY num_rentals DESC, category ASC) AS rank
    FROM 
        category_rentals
)
SELECT 
    store_id,
    category,
    num_rentals
FROM 
    ranked_categories
WHERE 
    rank <= 5
ORDER BY 
    store_id,
    rank;
