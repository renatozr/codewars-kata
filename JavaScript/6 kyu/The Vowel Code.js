const vowels = ['a', 'e', 'i', 'o', 'u'];
const encode = str => str.split('').map(c => vowels.indexOf(c) + 1 || c).join('');
const decode = str => str.split('').map(c => vowels[parseInt(c) - 1] || c).join('');
