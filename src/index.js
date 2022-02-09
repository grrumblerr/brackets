module.exports = function check(str, bracketsConfig) {
 
  let pairs = Object.fromEntries(bracketsConfig.map(([i,j])=>[j,i]));
  let opens = Object.values(pairs);
  let closed = Object.keys(pairs);
  let stack = [];
 

  for (let i=0; i<str.length; i++) {
    let current = str[i];
    if (current===stack[stack.length-1] && closed.includes(current)) {
      stack.pop();
    } else {
      if (opens.includes(current)) {
        stack.push(current);
      } else {
        if (stack.length === 0) {
          return false;
        }
        let stackTop = stack[stack.length - 1];
        if (pairs[current] == stackTop) {
          stack.pop();
        } else { return false };
      }
    }
  }
  return stack.length===0;
}