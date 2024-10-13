WITH top_marks_per_subject AS (
  SELECT 
    subject_id, 
    MAX(mark_rate) AS max_mark_rate
  FROM 
    marks
  GROUP BY 
    subject_id
),
students_with_top_marks AS (
  SELECT
    s.subject_name,
    m.subject_id,
    m.mark_rate,
    st.student_name,
    st.student_id
  FROM 
    marks m
  JOIN 
    students st ON m.student_id = st.student_id
  JOIN 
    subjects s ON m.subject_id = s.subject_id
  JOIN 
    top_marks_per_subject tm ON m.subject_id = tm.subject_id AND m.mark_rate = tm.max_mark_rate
)
SELECT
  ARRAY_AGG(st.student_name ORDER BY st.student_id) AS student_names,
  st.subject_name,
  st.mark_rate
FROM 
  students_with_top_marks st
GROUP BY 
  st.subject_name, 
  st.mark_rate,
  st.subject_id
ORDER BY 
  st.subject_id;