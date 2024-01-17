// 4. 원하는 위치의 노드를 찾아내는 getNode 함수
// 10개가 있을 때 6번째 인덱스에 있는 노드 가져오기
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.nodeCount = 1;
  }

  // linkedlist 가장 끝에 있는 노드에 새로운 노드 연결

  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(value);
    this.nodeCount++;
  }

  // 10개가 있을 때 index번째 인덱스에 있는 노드 가져오기
  getNode(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
}
