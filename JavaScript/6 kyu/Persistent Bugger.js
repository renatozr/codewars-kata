function persistence(num) {
    let times = 0;
    num = num.toString();
    
    while (num.length > 1) {
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
        times += 1;
    }
    
    return times;
}
