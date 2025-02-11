WITH failed_courses AS (
    SELECT
        c.student_id,
        s.name,
        c.course_name,
        c.score
    FROM 
        courses c
    JOIN 
        students s ON c.student_id = s.id
    WHERE 
        c.score < 60
),
students_with_failures AS (
    SELECT
        student_id,
        name,
        STRING_AGG(course_name || '(' || score || ')', ', ' ORDER BY course_name) AS failed_courses,
        COUNT(*) AS fail_count
    FROM 
        failed_courses
    GROUP BY 
        student_id, name
    HAVING 
        COUNT(*) >= 3
),
students_who_quit AS (
    SELECT
        s.id AS student_id,
        s.name,
        'quit studying' AS reason
    FROM 
        students s
    LEFT JOIN 
        courses c ON s.id = c.student_id
    WHERE 
        c.student_id IS NULL
)
SELECT 
    student_id,
    name,
    'failed in ' || failed_courses AS reason
FROM 
    students_with_failures

UNION

SELECT 
    student_id,
    name,
    reason
FROM 
    students_who_quit

ORDER BY 
    student_id ASC;
