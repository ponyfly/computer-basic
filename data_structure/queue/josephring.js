const Queue = require('./queue')
// 练习1 约瑟夫环
// 0 - 99 每隔2个删除一个，到末尾时，循环至开头继续进行，求最后一个被删除的元素
function joseph_ring(n) {
  var queue = new Queue()
  // 把所有数字添加到队列
  for (let i = 0; i <= n; i++) {
    queue.enqueue(i)
  }
  var index = 0
  // 队列长度不为一时
  while(queue.size() !== 1) {
    // 弹出队头元素
    var item = queue.dequeue()
    // 判断队头元素是否能被3整除，如果不能被三整除，则把元素添加到对尾，同时index一直++,指向下一个元素
    if((index + 1) % 3 !== 0) {
      queue.enqueue(item)
    }
    index++
  }
  return queue.head()
}

console.log(joseph_ring(99))

