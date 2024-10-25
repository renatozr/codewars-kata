WITH scored_students AS (
  SELECT c.student_id, s.name, SUM(score) AS total_score
  FROM students s
  JOIN courses c ON c.student_id = s.id
  WHERE c.course_name IN ('Math', 'Science')
  GROUP BY c.student_id, s.name
  ORDER BY total_score DESC, c.student_id
)
SELECT ROW_NUMBER() OVER() AS rank, student_id, name, total_score
FROM scored_students;
