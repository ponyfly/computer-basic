const Queue = require('./queue')
// 打印杨辉三角的前n行，n>=1
// 思路：假如我们需要输出5行的数据，并且此时队列中保存的是第4行数据，当我们输出改行的所有数据的时候，我们可以依次dequeue,但是，当我们要输入第5行的数据的时候该怎么办，我们可以知道第5行的值依赖第4行，所以我们可以把第5行的值放在队列的末尾，以便下次输出第5行的数据
// 假如我们需要输出5行的数据，所以，当输出第一行的时候，需要把第二行的数据塞到队列中，当输出第二行的时候，需要把第三行的数据塞到队列中，一次类推，当我们需要第n行的数据的时候，需要把第n+1行的数据塞到队列中
// 解法：假如队列中保存的是第n-1行数据，当我们dequeue一个数据的时候，同时得到n+1行的一个新数据添加到队列的尾部，当我们把第n行所有的数据都dequeue后，得到n+1行的n个数据，此时还需要在末尾添加一个1,
function print_yanghui(n) {
  const queue = new Queue()
  queue.enqueue(1)
  for (let i = 1; i <= n; i++) {
    let pre = 0
    let line = ''
    for (let j = 0; j < i; j++) {
      let item = queue.dequeue()
      line += item + ' '
      queue.enqueue(item + pre)
      pre = item
    }
    console.log(line)
    queue.enqueue(1)
  }
}

// 解法2：补零法
function print_yanghui_2(n) {
  const queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(0)
  for (let i = 1;i <= n; i++) {
    let pre = 0
    let line = ''
    for (let j = 0;j < i + 1; j++) {
      let item = queue.dequeue()
      if(item !== 0) {
        line += item + ' '
      }
      queue.enqueue(pre + item)
      pre = item
    }
    console.log(line)
    queue.enqueue(0)
  }
}

print_yanghui_2(5)