Math.round = function(number) {
  const strNumber = number.toString();
  
  if(strNumber.includes('.')) {
    const int = Number(strNumber.slice(0, strNumber.indexOf('.')));
    const float = number - int;
    
    if (float < 0.5) return int;
    else return int + 1;
  }
  
  return number;
};

Math.ceil = function(number) {
  const strNumber = number.toString();
  
  if(strNumber.includes('.')) {
    const int = Number(strNumber.slice(0, strNumber.indexOf('.')));
    
    return int + 1;
  }
  
  return number;
};

Math.floor = function(number) {
  const strNumber = number.toString();
  
  if(strNumber.includes('.')) {
    const int = Number(strNumber.slice(0, strNumber.indexOf('.')));
    
    return int;
  }
  
  return number;
};
