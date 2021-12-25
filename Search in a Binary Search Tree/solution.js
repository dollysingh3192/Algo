

//Simple preorder not taking help of BST
var searchBST = function(root, val) {
    const helper = (node) => {
        if(!node)
            return null;
        
        if(node.val === val)
            return node;
        
        return helper(node.left) || helper(node.right);
    }

    return helper(root);
}


//Recursive Time: O(H) Space: O(logN) in the average case, and O(N) in the worst case.
var searchBST = function(root, val) {
    const helper = (node) => {
        if(!node)
            return null;
        
        if(node.val === val) {
            return node;
        } else if(node.val > val) {
            return helper(node.left);
        } else {
            return helper(node.right);
        }
    }
    
    return helper(root);
}

//Time: O(H), where H is a tree height, and O(N) in the worst case.  Space: O(1)
var searchBST = function(root, val) {
    let node = root;
    
     while (node != null && val != node.val) {
         node = val < node.val ? node.left : node.right;
     }
    
     return node;
}