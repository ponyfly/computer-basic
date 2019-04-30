const Stack = require('./stack')
// 练习2 计算逆波兰表达式，也叫后缀表达式
function behindCalc(arr) {
  const stack = new Stack()
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!isNaN(item)) {
      // 如果是数字
      stack.push(item)
    } else {
      // 如果是操作符
      const num1 = stack.pop()
      const num2 = stack.pop()
      const exp_str = num2 + item + num1
      // 计算结果并取整
      const res = parseInt(eval(exp_str))
      // 计算结果压入栈中
      stack.push(res.toString())
    }
  }
  return stack.top()
}
console.log(behindCalc(['4', '13', '5', '/', '+']))