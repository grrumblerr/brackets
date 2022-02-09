module.exports = function check(str, bracketsConfig) {
  // your solution

  let pairs = Object.fromEntries(bracketsConfig.map(([i,j])=>[j,i]));
  let opens = Object.values(pairs);
  let closed = Object.keys(pairs);
  // let string = str.split('');
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
    // return stack;
  return stack.length===0;
}

// console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));

// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
// let stringg = '([{}])';
// console.log(stringg.split(''));

// let pairs = Object.fromEntries(config6.map(([i,j])=>[j,i]));
// console.log(pairs);
// console.log(pairs['8'])
// let opens = Object.values(pairs);
// console.log(opens);