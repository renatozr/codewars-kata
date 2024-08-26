def check_exam(arr1, arr2):
    result = 0
    
    for i, correct_answer in enumerate(arr1):
        student_answer = arr2[i]
        
        if student_answer == "":
            continue
            
        if student_answer == correct_answer:
            result += 4
            continue
        
        result -= 1
        
    return 0 if result < 0 else result
