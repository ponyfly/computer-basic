const Stack = require('./stack')
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