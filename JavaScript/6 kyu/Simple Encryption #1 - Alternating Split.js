function encrypt(text, n) {
    if (!text || n < 0) return text;

    let encryptedText = text;

    while(n--) {
        const oddChars = encryptedText.split('').filter((c, i) => i % 2 === 1).join('');
        const evenChars = encryptedText.split('').filter((c, i) => i % 2 === 0).join('');
        
        encryptedText = oddChars + evenChars;
    }

    return encryptedText;
    }

    function decrypt(encryptedText, n) {
    if (!encryptedText || n < 0) return encryptedText;

    let decryptedText = encryptedText;

    while (n--) {
        let text = '';
        const middleIdx = Math.floor(decryptedText.length / 2);
        const leftChars = decryptedText.substring(0, middleIdx);
        const rightChars = decryptedText.substring(middleIdx, encryptedText.length);
        
        for (let j = 0; j <= leftChars.length; j += 1) {
        text += (rightChars[j] || '') + (leftChars[j] || '');
        }
        
        decryptedText = text;
    }

    return decryptedText;
}