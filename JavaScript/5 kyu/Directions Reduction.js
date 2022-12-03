function dirReduc(way){
  const oppositeDirMap = {
    SOUTH: 'NORTH',
    NORTH: 'SOUTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  const reducWay = [way[0]];
  
  for (let i = 1; i < way.length; i += 1) {
    const dir = way[i];
    const prevDir = reducWay[reducWay.length - 1];
    
    const isOpposite = dir === oppositeDirMap[prevDir];
    
    if (isOpposite) {
      reducWay.pop();
    } else {
      reducWay.push(dir);
    }
  }
  
  return reducWay;
}
