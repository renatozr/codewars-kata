function findOdd(numbers) {
    const numbers_count = numbers.reduce((count, num) => {
        if (count[num]) {
            count[num] += 1
        } else {
            count[num] = 1
        }
        
        return count
    }, {});
    
    const [num] = Object.entries(numbers_count).find(([_num, times]) => times % 2 === 1);
    
    return parseInt(num);
}