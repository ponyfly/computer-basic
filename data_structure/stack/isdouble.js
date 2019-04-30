const Stack = require('./stack')
// 练习1 合法括号，成对出现，括号有两种出现方式，一种是嵌套（（）），一种是并列（）（）
function isDouble(str) {
  const stack = new Stack()

  for (let i = 0; i < str.length; i++) {
    const item = str[i]
    if(item === '(') {
      stack.push(item)
    } else if(item === ')') {
      if(stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}
console.log(isDouble('()fdadsf(())fdasf'))