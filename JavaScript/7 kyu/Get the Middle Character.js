function getMiddle(s) {
    const middleIndex = Math.ceil(s.length / 2 - 1);

    if (s.length % 2 === 0) return s[middleIndex] + s[middleIndex + 1]
    return s[middleIndex]
}