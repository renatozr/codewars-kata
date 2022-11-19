function order(string){
    const words = string.split(' ');
    const sortedWords = [];

    for (let i = 0; i < words.length; i += 1) {
        for (let j = 0; j < words[i].length; j += 1) {   
            if (words[i][j] > 0) {
                sortedWords[words[i][j] - 1] = words[i];
            }
        }
    }

    return sortedWords.join(' ');
}
