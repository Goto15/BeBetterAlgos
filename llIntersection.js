reverse = (head) => {
  let next = head;
  let current = head;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return current;
};

intersection = (ll1, ll2) => {
  let one = reverse(ll1);
  let two = reverse(ll2);
  let returnNode = null;

  while (one === two) {
    if (one != two) {
      return returnNode;
    } else {
      returnNode = one;
      one = one.next;
      two = two.next;
    }
  }

  return returnNode;
};
