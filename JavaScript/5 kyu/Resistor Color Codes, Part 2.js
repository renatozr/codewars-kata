function handleOhmsString(ohmsString) {
  let num = ohmsString.replace(' ohms', '');
  if (num.includes('k')) num = num.replace('k', '000');
  if (num.includes('M')) num = num.replace('M', '000000');
  if (num.includes('.')) num = (num.replace('.', '') / 10).toString();
  
  return num;
}

function encodeResistorColors(ohmsString) {
  const num = handleOhmsString(ohmsString);
  
  const colors = {
    '0': 'black',
    '1': 'brown',
    '2': 'red',
    '3': 'orange',
    '4': 'yellow',
    '5': 'green',
    '6': 'blue',
    '7': 'violet',
    '8': 'gray',
    '9': 'white',
  };
  
  const firstTwoDigits = num.slice(0, 2);
  const zeroCount = num.slice(2).length;
  
  const band1 = colors[firstTwoDigits[0]];
  const band2 = colors[firstTwoDigits[1]];
  const band3 = colors[zeroCount];
  
  return `${band1} ${band2} ${band3} gold`;
}
