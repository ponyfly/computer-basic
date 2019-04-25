// 队列
function Queue() {
  var items = []
  // 尾部添加元素
  this.enqueue = function(item) {
    items.push(item)
  }
  // 头部添加元素
  this.dequeue = function() {
    return items.shift()
  }
  this.head = function() {
    return items[0]
  }
  this.size = function() {
    return items.length
  }
  this.isEmpty = function() {
    return !items.length
  }
  this.clear = function() {
    items = []
  }
  // 返回尾部元素
  this.tail = function() {
    return items[items.length - 1]
  }
}

module.exports = Queue
