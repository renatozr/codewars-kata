function tribonacci(signature,n){
  let arr = signature;
  if (n < 3) return arr.slice(0, n);
  for (let i = 0; arr.length < n; i++) {
    const num1 = arr[i];
    const num2 = arr[i + 1];
    const num3 = arr[i + 2];
    arr.push(num1 + num2 + num3);
  }
  return arr;
}