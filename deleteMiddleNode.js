class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  push = (value) => {
    const node = Node(value);
    const iterNode = this.head;
    // The list is empty
    while (iterNode.next) {
      iterNode = iterNode.next;
    }
    iterNode.next = node;
  };
}

const deleteMiddleNode = (ll) => {
  let prev = ll.head;
  let tortoise = ll.head;
  let nextNode = ll.head;
  let hare = ll.head;

  // I can’t remember if if(hare.next() && hare.next()) behaves in the way I want it to.
  while (hare.next != null && hare.next.next != null) {
    /*
    Not sure if this works. Could also do 
      hare = hare.next;
      hare = hare.next;
    */
    hare = hare.next.next;
    prev = tortoise;
    tortoise = tortoise.next;
    nextNode = tortoise.next;
  }

  if (tortoise != ll.head) {
    prev.next = nextNode;
  }
};
