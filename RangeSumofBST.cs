public class Solution {
    public int RangeSumBST(TreeNode root, int L, int R) {
        if(root == null)
        {
            return 0;
        }
        
        if(L <= root.val && root.val <= R)
        {
            return root.val + RangeSumBST(root.left, L, R)  + RangeSumBST(root.right, L, R);
        } else 
        {
            return 0 + RangeSumBST(root.left, L, R)  + RangeSumBST(root.right, L, R);
        }
    }
}

/*
Given the root node of a binary search tree, return the sum of 
values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.
*/