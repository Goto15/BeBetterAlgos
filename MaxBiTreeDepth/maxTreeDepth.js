function maxTreeDepth(root) {
  if (root === null) {
    return 0;
  } else {
    return 1 + Math.max(maxTreeDepth(root.left), maxTreeDepth(root.left));
  }
}
module.exports = maxTreeDepth;
