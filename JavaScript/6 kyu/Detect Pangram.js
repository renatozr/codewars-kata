function isPangram(string){
    string = string.toLowerCase();
    
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((l) => string.includes(l));
}