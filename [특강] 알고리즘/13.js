// 5. 원하는 위치에 새로운 노드 추가하는 addNode 함수
// 링크드리스트 자료구조를 클래스로 정의하기
class Linkedlist {
  constructor(value) {
    this.head = new Node(value);
  }

  // linkedlist 가장 끝에 있는 노드에 새로운 노드 연결
  append(value) {
    let curr = this.head;
    while (curr !== null) {
      curr = curr.next;
    }
    curr.next = new Node(value);
  }

  // 원하는 위치의 노드 찾아내기
  getNode(index) {
    let node = this.node;
    for (i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  // 원하는 위치에 새로운 노드 추가
  addNode(index, value) {
    const newNode = new Node(value); // 새 노드 만들기
    if (index === 0) {
      // 0번째에 추가
      newNode.next = this.head; // 원래 head였던 노드를 새 노드의 next로
      this.head = newNode; // head를 새 노드로 바꾸기
      return;
    }

    const node = this.getNode(index - 1);
    const nextNode = node.next;
    node.next = newNode;
    newNode.next = nextNode;
  }
}
