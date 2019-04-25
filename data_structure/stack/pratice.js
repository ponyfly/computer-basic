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

//练习3 实现一个栈，除了常见的push，pop方法以外，还要提供min方法，返回栈里最小的元素
function MinStack(){
  // 存储数据的栈
  const data_stack = new Stack()
  // 存储最小值的栈
  const min_stack = new Stack()

  this.push = function(item) {
    data_stack.push(item)
    // 如果min_stack是空栈，则把item是当前最小值
    // 如果min_stack不是空栈，且item比min_stack的top小，则item是当前最小值
    // 如果min_stack不是空栈，且item比min_stack的top大，则min_stack的top还是最小值
    // 得到最小值，做压栈处理，保证当前的栈顶元素始终是最小值
    if(min_stack.isEmpty() || item < min_stack.top()) {
      min_stack.push(item)
    } else {
      min_stack.push(min_stack.top())
    }
  }
  this.pop = function () {
    data_stack.pop()
    min_stack.pop()
  }
  this.min = function() {
    return min_stack.top()
  }
}
const minStack = new MinStack()
minStack.push(100)
minStack.push(20)
minStack.push(60)
minStack.pop()
console.log(minStack.min())

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
