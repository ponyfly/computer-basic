const Stack = require('../stack/stack')

// 使用两个栈实现一个队列
function Stack_for_queue() {
  var stack1 = new Stack()
  var stack2 = new Stack()

  this.enqueue = function (item) {
    // initStack()
    if(!stack2.isEmpty()) {
      while (!stack2.isEmpty()) {
        stack1.push(stack2.pop())
      }
    }
    stack1.push(item)
  }
  this.dequeue = function () {
    if(!stack1.isEmpty()) {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop())
      }
    }
    return stack2.pop()
  }
  this.head = function () {
    // initStack()
    if(!stack1.isEmpty()) {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop())
      }
    }
    return stack2.top()
  }
}

const queue = new Stack_for_queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.head())