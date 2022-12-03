function solution(number){
  if (number <= 3) return 0;

  let sum = 3;
  
  for (let i = 5; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
    
  return sum;
}
