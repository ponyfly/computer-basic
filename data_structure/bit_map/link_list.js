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
    // 初始化待添加的节点insert_node, 待添加的节点的前一个节点pre_node，待添加的节点的后一个节点next_node
    var insert_node = new Node(data)
    var pre_node = null
    var next_node = null

    // ------------ start: 确定pre_node和next_node--------------
    if(index === 0) {
      // 在头部插入节点，可以知道head变成了next_node
      next_node = head
    }else {
      // 在中间插入节点，可以知道pre_node和next_node
      pre_node = head
      while (index > 1) {
        pre_node = pre_node.next
        index--
      }
      next_node = pre_node.next
    }
    // ------------ end: 确定pre_node和next_node--------------

    // ------------ start: 连接上下游 -------------
    // 连接上游：pre_node和insert_node
    if(pre_node) pre_node.next = insert_node
    // 连接下游：insert_node和next_node
    insert_node.next = next_node
    // ------------ end: 连接上下游 -------------

    // --------- start: 处理边界情况下，head和tail的处理--------
    // pre_node不存在，说明是插入头节点,处理头节点
    if(pre_node === null) head = insert_node
    // next_node不存在，说明是插入尾节点,处理尾节点
    if(next_node === null) tail = insert_node
    // --------- end: 处理边界情况下，head和tail的处理--------

    length++
    return true
  }
  this.remove = function(index) {
    // 如果index不在length范围内，就返回false
    if(index < 0 || index > length - 1) return null
    // 初始化待删除节点cur_node, 待删除节点的前一个节点pre_node，待删除节点的后一个节点next_node
    var cur_node = null
    var pre_node = null
    var next_node = null

    // ---------- start: 确定pre_node, cur_node, next_node----------
    if (index === 0) {
      cur_node = head
    } else {
      pre_node = head
      while (index > 1) {
        pre_node = pre_node.next
        index--
      }
      cur_node = pre_node.next
    }

    if(cur_node) next_node = cur_node.next
    // ---------- end: 确定pre_node, cur_node, next_node----------

    // ------------ start: 连接上下游,连接pre_node和next_node -------------
    if(pre_node) pre_node.next = next_node
    // ------------ end: 连接上下游,连接pre_node和next_node -------------

    // --------- start: 处理边界情况下，head和tail的处理--------
    // pre_node不存在，说明是插入头节点,处理头节点
    if(pre_node === null) head = next_node
    // next_node不存在，说明是插入尾节点,处理尾节点
    if(next_node === null) tail = pre_node
    // --------- end: 处理边界情况下，head和tail的处理--------
    
    length--
    return cur_node ? cur_node.data : null
  }
}

var link_list = new LinkList()
link_list.append(1)
link_list.append(2)
link_list.append(3)
link_list.append(5)
link_list.insert(0,1)
link_list.insert(2,1)
link_list.insert(3,0)
link_list.remove(2)
link_list.remove(0)
const del_node = link_list.remove(4)
console.log(del_node, 'aaaaa')
link_list.print()