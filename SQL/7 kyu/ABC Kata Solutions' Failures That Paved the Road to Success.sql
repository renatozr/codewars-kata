WITH project_budgets AS (
    SELECT 
        bc.project_id,
        SUM(bc.component_value) AS total_budget
    FROM budget_components bc
    GROUP BY bc.project_id
),
average_budget AS (
    SELECT AVG(total_budget) AS avg_budget
    FROM project_budgets
)
SELECT 
    p.project_id,
    p.project_name,
    p.completion_status,
    pb.total_budget::money
FROM projects p
JOIN project_budgets pb ON p.project_id = pb.project_id
JOIN average_budget ab ON pb.total_budget > ab.avg_budget
WHERE p.completion_status != 'Completed'
ORDER BY p.project_name ASC;
