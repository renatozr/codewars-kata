const RomanNumerals = {
  toRoman: (num) => {
    const romanMap = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1,
    };
    
    let romanNum = '';
    
    for (let i in romanMap) {
      while (num >= romanMap[i]) {
        romanNum += i;
        num -= romanMap[i];
      }
    }
    
    return romanNum;
  },
  fromRoman: (romanNum) => {
    const romanMap = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1,
    },
    romanDigits = romanNum.split('');
    
    let num = 0,
    shouldSkip = false;

    for (let i = 0; i < romanDigits.length; i += 1) {
      if (shouldSkip) {
        shouldSkip = false;
        continue;
      }

      const romanDigit = romanDigits[i],
      nextRomanDigit = romanDigits[i + 1] || 'I';
      
      if (romanMap[romanDigit] < romanMap[nextRomanDigit]) {
        num += romanMap[`${romanDigit}${nextRomanDigit}`];
        shouldSkip = true;
      } else {
        num += romanMap[romanDigit];
      }
    }
    
    return num;
  },
};
