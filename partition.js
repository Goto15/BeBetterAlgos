partition = (ll, val) => {
  let nodeArr = [];
  let node = ll.head;

  while (node.next) {
    if (node.data >= val) {
      nodeArr.push(node);
    } else {
      nodeArr.unshift(node);
    }
  }

  for (let i = 0; i < nodeArr.length - 1; i += 1) {
    nodeArr[i].next = nodeArr[i + 1];
  }
};

llPartition = (node, val) => {
  let head = node;
  let tail = node;

  while (node.next) {
    let next = node.next
    if (node.value >= val) {
      node.next = tail;
      tail = node;
    } else {
      node.next = head;
      head = node;
    }
    node = next;
  }

  tail.next = null;
};

recurPartition = (ll, val) => {
  if (ll.head === ll.tail) {
    return ll;
  }

  if (ll.head.data >= head) {
    // This causes an infinite loop with any value above val
    recurPartition(ll.head.next, val).next = ll.head;
  } else {
    ll.head.next = recurPartition(ll.head.next, val);
  }
};
