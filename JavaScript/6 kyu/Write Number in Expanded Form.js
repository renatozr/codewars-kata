function expandedForm(num) {
  const strNum = num.toString();
  
  let expandedNum = strNum[0].padEnd(strNum.length, '0');
  
  for (let i = 1; i < strNum.length; i += 1) {
    const strDig = strNum[i];
    
    if (strDig !== '0') {
      const digValue = strDig.padEnd(strNum.length - i, '0');
      
      expandedNum += ` + ${digValue}`;
    }
  }
  
  return expandedNum;
}
