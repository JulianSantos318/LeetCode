
 // Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

function sortedArrayToBST(nums: number[]): TreeNode | null {
    //We'll use a two pointer algorithm to find the middle of the array, so we need to initialize the pointers at the start and end 
    //of the array
    let start = 0;
    let end = nums.length - 1;

    //We'll use a recursive function to create the BST, we'll pass the start and end of the array
    function createBST(start : number, end : number) : TreeNode | null {
        if (start > end) return null;  //If the start is greater than the end, we've reached the end of the array
        
        let mid = Math.floor((start + end) / 2); //We use Math.floor to round down so we can sure 'mid' is an integer. We find the middle of the array, w
        
        let treeNode: TreeNode = new TreeNode(nums[mid]); //We create a new TreeNode with the middle value, which will be the root of the tree
        
        //We recursively call the function with the left and right side of the array, and assign the result to the left and right of the root
        treeNode.left = createBST(start, mid - 1);
        treeNode.right = createBST(mid + 1, end);
        
        //We return the root of the tree
        return treeNode;
    }

    //We call the recursive function with the start and end of the array
    let resultNode = createBST(start, end);

    return resultNode;
};