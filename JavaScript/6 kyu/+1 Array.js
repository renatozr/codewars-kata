function upArray(arr){
  if (arr.length === 0 || arr.some((num) => num < 0 || num > 9)) return null;
  
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] !== 9) {
      arr[i] += 1;
      break;
    } else {
      arr[i] = 0;
    }
    
    if (i === 0) arr.unshift(1);
  }
  
  return arr;
}
