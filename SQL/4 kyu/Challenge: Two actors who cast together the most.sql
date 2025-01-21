WITH actor_pairs AS (
    SELECT
        a1.actor_id AS actor1_id,
        a2.actor_id AS actor2_id,
        CONCAT(a1.first_name, ' ', a1.last_name) AS first_actor,
        CONCAT(a2.first_name, ' ', a2.last_name) AS second_actor,
        f.title
    FROM film_actor fa1
    JOIN film_actor fa2 ON fa1.film_id = fa2.film_id
        AND fa1.actor_id < fa2.actor_id
    JOIN actor a1 ON fa1.actor_id = a1.actor_id
    JOIN actor a2 ON fa2.actor_id = a2.actor_id
    JOIN film f ON fa1.film_id = f.film_id
),
pair_counts AS (
    SELECT
        actor1_id,
        actor2_id,
        first_actor,
        second_actor,
        COUNT(title) AS film_count
    FROM actor_pairs
    GROUP BY actor1_id, actor2_id, first_actor, second_actor
),
max_pair AS (
    SELECT
        actor1_id,
        actor2_id,
        first_actor,
        second_actor,
        film_count
    FROM pair_counts
    ORDER BY film_count DESC
    LIMIT 1
)
SELECT
    mp.first_actor,
    mp.second_actor,
    ap.title
FROM max_pair mp
JOIN actor_pairs ap
    ON mp.actor1_id = ap.actor1_id
   AND mp.actor2_id = ap.actor2_id
ORDER BY ap.title;
