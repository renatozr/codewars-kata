function diamond(n){
    if (n <= 0 || n % 2 === 0) return null;
  
    const middle = (n + 1) / 2;
    let str = '';
    let astCount = 1;
  
    for (let i = 1; i <= n; i += 1) {
        str += ' '.repeat((n - astCount) / 2);
        str += '*'.repeat(astCount) + '\n';
        
        i >= middle ? astCount -= 2 : astCount += 2;
    }
    
    return str;
}