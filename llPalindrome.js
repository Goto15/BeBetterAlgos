//Brute force using different data structures
bfPalindrome = (ll) => {
  let charArr = [];
  let node = ll.head;

  while (node.next) {
    charArr.push(node.val);
    node = node.next;
  }

  let length = charArr.length;
  for (let i = 0; i <= length / 2; i += 1) {
    if (charArr[i] != charArr[length - i]) return false;
  }

  return true;
};

//Using Linked Lists
Palindrome = (ll) => {
  let reversed = ll.head;
  let node = ll.head;

  while (node.next) {
    reversed = node.next;
    reversed.next = node;
    node = node.next;
  }

  //At the end reverse should == the head of its new list.
  node = ll.head;
  while (reverse.next) {
    if (reverse.val !== node.val) {
      return false;
    }

    node = node.next;
    reversed = reversed.next;
  }

  return true;
};

//Working Leetcode solution O(n) time and space
var isPalindrome = function(head) {
  let hare = head;
  let tortoise = head;
  let stackArr = []
  
  while(hare && hare.next){
      stackArr.push(tortoise.val)
      tortoise = tortoise.next;
      hare = hare.next.next;
  }
  
  if(hare) tortoise = tortoise.next;
  
  while(tortoise){
      if(tortoise.val != stackArr.pop()) return false;
      tortoise = tortoise.next;
  }
  
  return true;
};