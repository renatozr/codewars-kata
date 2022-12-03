const ipToInt32 = (ip) => ip.split('.')
  .reduce((acc, cur, i) => parseInt(cur) * 256 ** (3 - i) + acc, 0);
