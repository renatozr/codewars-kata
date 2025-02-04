WITH age_grouped AS (
    SELECT 
        id,
        CASE 
            WHEN (info->>'age')::INT BETWEEN 18 AND 30 THEN '18-30'
            WHEN (info->>'age')::INT BETWEEN 31 AND 45 THEN '31-45'
            WHEN (info->>'age')::INT BETWEEN 46 AND 60 THEN '46-60'
            ELSE '61 and above'
        END AS age_group,
        jsonb_array_elements(info->'pets')->>'type' AS pet_type
    FROM users
),
pet_counts AS (
    SELECT 
        age_group,
        pet_type,
        COUNT(*) AS pet_count
    FROM age_grouped
    GROUP BY age_group, pet_type
),
ranked_pets AS (
    SELECT 
        age_group,
        pet_type,
        pet_count,
        RANK() OVER (PARTITION BY age_group ORDER BY pet_count DESC) AS rank
    FROM pet_counts
)
SELECT 
    age_group,
    ARRAY_AGG(pet_type ORDER BY pet_type) AS preferred_pet_type,
    pet_count AS count
FROM ranked_pets
WHERE rank = 1
GROUP BY age_group, pet_count
ORDER BY age_group;
