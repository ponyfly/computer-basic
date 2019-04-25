const Queue = require('./queue')
// 练习二 菲波那切数列
function fibonacci(n) {
  // 边界情况
  if(n ===1 || n === 2) return 1

  // 正常情况
  let queue = new Queue()
  // 给前两项塞1
  queue.enqueue(1)
  queue.enqueue(1)
  let index = 0
  while (index < n - 2) {
    let del_data = queue.dequeue()
    let enqueue_data = del_data + queue.head()
    queue.enqueue(enqueue_data)
    index++
  }
  return queue.tail()
}

// 第二种解法
function fibonacci1(n) {
  // 边界情况
  if(n ===1 || n === 2) return 1

  return fibonacci1(n-1) + fibonacci1(n-2)
}


console.log(fibonacci(20))
console.log(fibonacci1(20))