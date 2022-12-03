function cal(obj, num) {
  if (obj.op === '+') return num + obj.num;
  if (obj.op === '-') return num - obj.num;
  if (obj.op === '*') return num * obj.num;
  if (obj.op === '/') return Math.floor(num / obj.num);
}

function zero(obj) {
  if (obj === undefined) return 0;
  return cal(obj, 0);
}
function one(obj) {
  if (obj === undefined) return 1;
  return cal(obj, 1);
}
function two(obj) {
  if (obj === undefined) return 2;
  return cal(obj, 2);
}
function three(obj) {
  if (obj === undefined) return 3;
  return cal(obj, 3);
}
function four(obj) {
  if (obj === undefined) return 4;
  return cal(obj, 4);
}
function five(obj) {
  if (obj === undefined) return 5;
  return cal(obj, 5);
}
function six(obj) {
  if (obj === undefined) return 6;
  return cal(obj, 6);
}
function seven(obj) {
  if (obj === undefined) return 7;
  return cal(obj, 7);
}
function eight(obj) {
  if (obj === undefined) return 8;
  return cal(obj, 8);
}
function nine(obj) {
  if (obj === undefined) return 9;
  return cal(obj, 9);
}

function plus(num) { return { num, op: '+' }; }
function minus(num) { return { num, op: '-' }; }
function times(num) { return { num, op: '*' }; }
function dividedBy(num) { return { num, op: '/' }; }
