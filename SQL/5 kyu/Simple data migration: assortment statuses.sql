WITH store_statuses AS (
    SELECT 
        pss.product_id,
        s.cluster_id,
        pss.status_id,
        COUNT(*) AS status_count
    FROM product_store_statuses pss
    JOIN stores s ON pss.store_id = s.id
    WHERE s.cluster_id IS NOT NULL
    GROUP BY pss.product_id, s.cluster_id, pss.status_id
),
ranked_statuses AS (
    SELECT 
        ss.product_id,
        ss.cluster_id,
        ss.status_id,
        RANK() OVER (
            PARTITION BY ss.product_id, ss.cluster_id 
            ORDER BY ss.status_count DESC, st.priority ASC
        ) AS rank
    FROM store_statuses ss
    JOIN statuses st ON ss.status_id = st.id
)
INSERT INTO product_cluster_statuses (product_id, cluster_id, status_id)
SELECT product_id, cluster_id, status_id
FROM ranked_statuses
WHERE rank = 1;

DELETE FROM product_store_statuses pss
USING stores s, product_cluster_statuses pcs
WHERE pss.store_id = s.id
AND s.cluster_id = pcs.cluster_id
AND pss.product_id = pcs.product_id
AND pss.status_id = pcs.status_id;
