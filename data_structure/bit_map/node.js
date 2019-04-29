// 节点
var Node = function(data) {
  this.data = data
  this.next = null
}
var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(5)

node1.next = node2
node2.next = node3
console.log(node1.data)
console.log(node1.next.next.data)