WITH michaelmas_courses AS (
    SELECT 
        c.student_id,
        c.course_name,
        c.score,
        c.course_date
    FROM courses c
    WHERE c.course_date BETWEEN '2022-10-01' AND '2022-12-31'
),
student_course_info AS (
    SELECT
        s.id AS student_id,
        s.name,
        COUNT(DISTINCT mc.course_name) AS num_courses,
        STRING_AGG(
            mc.course_name || ' (' || mc.course_date || ' - ' || mc.score || ')', 
            ', ' ORDER BY mc.course_date, mc.course_name
        ) AS course_list,
        MAX(mc.score) AS highest_score
    FROM students s
    JOIN michaelmas_courses mc ON s.id = mc.student_id
    GROUP BY s.id, s.name
),
highest_score_course AS (
    SELECT
        student_id,
        course_name || ' (' || score || ')' AS highest_scored_course
    FROM (
        SELECT 
            mc.student_id,
            mc.course_name,
            mc.score,
            mc.course_date,
            ROW_NUMBER() OVER (
                PARTITION BY mc.student_id
                ORDER BY mc.score DESC, mc.course_date DESC, mc.course_name
            ) AS row_num
        FROM michaelmas_courses mc
    ) AS ranked_courses
    WHERE row_num = 1
)
SELECT
    sci.student_id,
    sci.name,
    sci.num_courses,
    hsc.highest_scored_course,
    sci.course_list
FROM student_course_info sci
JOIN highest_score_course hsc ON sci.student_id = hsc.student_id
ORDER BY 
    sci.num_courses DESC, 
    sci.highest_score DESC, 
    sci.student_id ASC
LIMIT 20;
