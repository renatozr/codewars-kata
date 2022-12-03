function nico  (key, message)  {
  const sortedKey = key.split('').sort();
  const numericKey = key.split('').map((c) => sortedKey.indexOf(c) + 1);
  const messageChars = message.split('');
  
  let encodedMessage = '';

  while (messageChars.length !== 0) {
    let map = {};
    
    for (let i = 0; i < numericKey.length; i += 1) {
      map = {...map, [numericKey[i]]: messageChars.shift() || ' '}
    }
    
   encodedMessage += [...numericKey].sort((a, b) => a - b).map((n) => map[n]).join(''); 
  }
  
  return encodedMessage;
}
