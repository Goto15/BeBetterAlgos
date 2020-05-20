reverseParseNums = (head) => {
  let sum = 0;
  let place = 1;
  let node = head;

  while (node.next) {
    sum += node.data * place;
    place *= 10;
    node = node.next;
  }

  return sum;
};

forwardParseNums = (head) => {
  let sum = 0;
  let node = head;

  while (node.next) {
    sum += node.data;
    node = node.next;
    sum *= 10;
  }

  return sum;
};

// for array of linked lists
sumLists = (lls) => {
  let sum = 0;

  lls.forEach((list) => {
    sum += reverseParseNums(list);
  });

  return sum;
};

// for linked list of linked lists
sumLists = (head) => {
  let sum = 0;
  let node = head;

  while (node.next) {
    sum += reverseParseNums(node.data);
    node = node.next;
  }

  return sum;
};
