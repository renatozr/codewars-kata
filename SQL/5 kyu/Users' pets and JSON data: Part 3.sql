WITH user_pets AS (
    SELECT
        id,
        info ->> 'name' AS name,
        (info ->> 'age')::int AS age,
        jsonb_array_length(info -> 'pets') AS pet_count,
        CASE
            WHEN (info ->> 'age')::int BETWEEN 18 AND 30 THEN '18-30'
            WHEN (info ->> 'age')::int BETWEEN 31 AND 45 THEN '31-45'
            WHEN (info ->> 'age')::int BETWEEN 46 AND 60 THEN '46-60'
            ELSE '61 and above'
        END AS age_group
    FROM users
),
group_stats AS (
    SELECT
        age_group,
        ROUND(AVG(pet_count)::numeric, 1) AS avg_pet_count
    FROM user_pets
    GROUP BY age_group
),
max_pet_owners AS (
    SELECT DISTINCT ON (age_group)
        age_group,
        name AS max_pet_owner,
        pet_count AS max_pet_count
    FROM user_pets
    ORDER BY age_group, pet_count DESC, id ASC
)
SELECT
    g.age_group,
    g.avg_pet_count,
    m.max_pet_owner,
    m.max_pet_count
FROM group_stats g
JOIN max_pet_owners m ON g.age_group = m.age_group
ORDER BY g.avg_pet_count DESC, g.age_group ASC;
