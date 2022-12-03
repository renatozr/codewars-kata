function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || (bounce <= 0 || bounce >= 1) || window >= h) {
    return -1;
  }
  
  let seenBallCount = 1;
  
  let ballMaxHeight = h * bounce;
  
  while (ballMaxHeight > window) {
    seenBallCount += 2;
    
    ballMaxHeight = ballMaxHeight * bounce;
  }
  
  return seenBallCount;
}
