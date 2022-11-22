function sumDigPow(a, b) {
    const arr = [];
    
    for (let i = a; i <= b; i += 1) {
        let sum = 0;
        const iStr = i.toString();
        
        for (let j = 0; j <= iStr.length; j += 1) {
            sum += parseInt(iStr[j]) ** (j + 1);
            
            if (sum === i) arr.push(i);
        }
    }
    
    return arr;
}
