var constructMaximumBinaryTree = function(nums) {
  if(nums.length === 0) return null;
  
  let val = Math.max(...nums);
  let leftBranch = nums.slice(0, nums.indexOf(val));
  let rightBranch = nums.slice(nums.indexOf(val) + 1, nums.length);
  
  return new TreeNode(val, constructMaximumBinaryTree(leftBranch), constructMaximumBinaryTree(rightBranch));
};

/*
 Given an integer array with no duplicates. A maximum tree building on this 
 array is defined as follow:

  1  The root is the maximum number in the array.
  2  The left subtree is the maximum tree constructed from left part 
      subarray divided by the maximum number.
  3  The right subtree is the maximum tree constructed from right part 
      subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of 
this tree. 
*/