// stack

// 링크드리스트 기반으로 스택의 peek 함수 push 함수 pop 함수 구현하기

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }

  push(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    let deleteHead = this.head;
    this.head = this.head.next;
    return deleteHead;
  }
}

let stack = new Stack();

console.log(stack.peek()); // null, 스택이 비어 있음

stack.push(1);
console.log(stack.peek()); // 1

stack.push(2);
console.log(stack.peek()); // 2, 스택의 top이 2로 변경됨

console.log(stack.pop()); // 2, pop()으로 인해 2를 제거하고 반환
console.log(stack.peek()); // 1, 스택의 top이 1로 변경됨

console.log(stack.pop()); // 1, pop()으로 인해 1을 제거하고 반환
console.log(stack.peek()); // null, 스택이 비어 있음

console.log(stack.pop()); // null, 스택이 비어 있으므로 null 반환
