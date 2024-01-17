// 3. 링크드리스트 끝에 새로운 노드 추가하는 append 함수
class LinkedList {
  constructor(value) {
    this.head = new Node(value); // head 에 시작하는 Node 를 연결합니다.
  }

  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      // curr의 다음이 끝에 갈 때까지 이동
      curr = curr.next;
    }

    console.log("curr.next: ", curr.next);
    const newNode = new Node(value);
    curr.next = newNode;
  }
}
