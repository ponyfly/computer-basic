/**
 * 数据结构之栈
 */
function Stack() {
  var items = [] // 为什么不适用this.items = [],因为这样就把items暴露出去了
  // push 向栈例添加元素
  this.push = function(item) {
    return items.push(item)
  }
  // pop 弹出栈顶元素
  this.pop = function() {
    return items.pop()
  }
  // isEmpty 栈是否为空
  this.isEmpty = function() {
    return items.length === 0
  }
  // top 返回栈顶元素
  this.top = function() {
    return items[items.length - 1]
  }
  // size 栈长度
  this.size = function() {
    return items.length
  }
  // clear 清空栈
  this.clear = function() {
    items = []
    return items
  }
}

module.exports = Stack
