WITH trimester_scores AS (
    SELECT
        c.student_id,
        CASE
            WHEN c.course_date BETWEEN '2022-10-01' AND '2022-12-31' THEN 'Michaelmas'
            WHEN c.course_date BETWEEN '2023-01-01' AND '2023-03-31' THEN 'Lent'
            WHEN c.course_date BETWEEN '2023-04-01' AND '2023-06-30' THEN 'Summer'
        END AS trimester,
        c.score
    FROM courses c
    WHERE c.course_date BETWEEN '2022-10-01' AND '2023-06-30'
),
avg_scores AS (
    SELECT
        student_id,
        trimester,
        ROUND(AVG(score), 2) AS avg_score
    FROM trimester_scores
    GROUP BY student_id, trimester
),
student_trimesters AS (
    SELECT
        s.id AS student_id,
        s.name,
        MAX(CASE WHEN a.trimester = 'Michaelmas' THEN a.avg_score END) AS michaelmas_avg,
        MAX(CASE WHEN a.trimester = 'Lent' THEN a.avg_score END) AS lent_avg,
        MAX(CASE WHEN a.trimester = 'Summer' THEN a.avg_score END) AS summer_avg
    FROM students s
    LEFT JOIN avg_scores a ON s.id = a.student_id
    GROUP BY s.id, s.name
)
SELECT 
    st.student_id,
    st.name,
    CONCAT(
        'Michaelmas (', COALESCE(TO_CHAR(st.michaelmas_avg, 'FM999.00'), '0.00'), '), ',
        'Lent (', COALESCE(TO_CHAR(st.lent_avg, 'FM999.00'), '0.00'), '), ',
        'Summer (', COALESCE(TO_CHAR(st.summer_avg, 'FM999.00'), '0.00'), ')'
    ) AS trimesters_avg_scores,
    CASE 
        WHEN st.lent_avg > st.michaelmas_avg AND st.summer_avg > st.lent_avg THEN true
        ELSE false
    END AS consistent_improvement
FROM student_trimesters st
ORDER BY st.student_id DESC;
