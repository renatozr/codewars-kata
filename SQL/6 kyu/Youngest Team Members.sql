WITH youngest_employees AS (
    SELECT e1.*
    FROM employees e1
    LEFT JOIN employees e2
        ON e1.team = e2.team AND e1.birth_date < e2.birth_date
    WHERE e2.employee_id IS NULL
)
SELECT *
FROM youngest_employees
ORDER BY team ASC;
