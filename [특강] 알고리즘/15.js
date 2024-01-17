// Queue

// // 링크드리스트 기반으로 큐의 enqueue 함수 dequeue 함수 구현하기

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    const deleteHead = this.head;
    this.head = this.head.next;

    return deleteHead.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // null
