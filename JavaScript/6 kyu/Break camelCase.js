function solution(string) {
  return string
    .split('')
    .map((letter) => {
      if (/[A-Z]/.test(letter)) return ` ${letter}`;
      return letter;
    })
    .join('');
}
