// 实现一个链表类
function LinkList() {
  // 实现节点类
  var Node = function(data) {
    this.data = data
    this.next = null
  }
  var length = 0 // 链表的长度
  var head = null // 头结点
  var tail = null // 尾节点
  // 添加一个节点
  this.append = function (data) {
    // 创建新节点
    var new_node = new Node(data)
    if(length === 0) {
      // 此时链表为空，没有节点
      head = new_node
    } else {
      // 此时链表不为空
      tail.next = new_node
    }
    tail = new_node
    length++
  }

  // 打印一个链表
  this.print = function() {
    if(length) {
      var cur_node = head
      while (cur_node) {
        console.log(cur_node.data)
        cur_node = cur_node.next
      }
    }
  }
  // 插入一个元素
  this.insert = function(index, data) {
    // 如果index不在length范围内，就返回false
    if(index < 0 || index > length) return false
    // 如果index在length范围内
    // 创建要添加的节点
    var insert_node = new Node(data)
    // insert_node的前一个节点
    var last_node = null
    // insert_node的后一个节点
    var next_node = null

    // ------------ start: 确定last_node和next_node--------------
    if(index === 0) {
      // 在头部插入节点，可以知道head变成了next_node
      next_node = head
    }else {
      // 在中间插入节点，可以知道last_node和next_node
      last_node = head
      while (--index > 0) {
        last_node = last_node.next
      }
      next_node = last_node.next
    }
    // ------------ end: 确定last_node和next_node--------------

    // ------------ start: 连接上下游 -------------
    // 连接上游：last_node和insert_node
    if(last_node) last_node.next = insert_node
    // 连接下游：insert_node和next_node
    insert_node.next = next_node
    // ------------ end: 连接上下游 -------------

    // --------- start: 处理边界情况下，head和tail的处理--------
    // last_node不存在，说明是插入头节点,处理头节点
    if(last_node === null) head = insert_node
    // next_node不存在，说明是插入尾节点,处理头节点
    if(next_node === null) tail = insert_node
    // --------- end: 处理边界情况下，head和tail的处理--------

    length++
    return true
  }
  this.romove = function(index) {
    if(index < 0 || index > length - 1) return false
    // 初始化待删除节点
    var cur_node = null
    if(length) {
      cur_node = head
      while (index--) {
        cur_node = cur_node.next
      }
    }
  }
}

var link = new LinkList()
link.append(1)
link.insert(5,1)
link.insert(2,1)
link.insert(3,0)
link.print()