const Stack = require('./stack')
// 练习4 使用栈，完成中序表达式转后续表达式((4+3)*6/(2+5))/8+2
const priority_exp = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
}
function infixTosuffix(arr) {
  const suffix_str = []
  const stack = new Stack()
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if(!isNaN(item)) {
      suffix_str.push(item)
    } else if (item === '(') {
      stack.push(item)
    } else if (item === ')') {
      while(stack.top() !== '(') {
        suffix_str.push(stack.pop)
      }
      stack.pop(item)
    } else {
      //运算符
      if( !stack.isEmpty() && '+-*/'.indexOf(item) > -1 && priority_exp[stack.top()] >= priority_exp[item] ) {
        suffix_str.push(stack.pop())
      }
      // 栈顶插入运算符
      stack.push(item)
    }
  }
  while(!stack.isEmpty()) {
    suffix_str.push(stack.pop())
  }
}

console.log(infixTosuffix([]))