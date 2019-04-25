const Queue = require('./queue')
// 用两个队列实现一个栈
function QueueForStack() {
  var queue1 = new Queue()
  var queue2 = new Queue()
  var data_queue = null
  var empty_queue = null
  function initQueue() {
    if(queue1.isEmpty() && !queue2.isEmpty()) {
      data_queue = queue2
      empty_queue = queue1
    } else {
      data_queue = queue1
      empty_queue = queue2
    }
  }
  this.push = function (item) {
    initQueue()
    data_queue.enqueue(item)
  }
  this.top = function () {
    initQueue()
    return data_queue.tail()
  }
  this.pop = function () {
    while (!data_queue.isEmpty()) {
      const item = data_queue.dequeue()
      if(data_queue.size() === 0) {
        return item
      }
      empty_queue.enqueue(item)
    } 
  }
}

const quToStack = new QueueForStack()
quToStack.push(1)
quToStack.push(3)
quToStack.push(2)
console.log(quToStack.top())
quToStack.push(6)
console.log(quToStack.pop(9))
quToStack.push(10)
console.log(quToStack.top())