//TC: O(n) SC: O(n)


var buildTree = function(preorder, inorder) {
    const map = new Map();
    
    for(let i = 0; i< inorder.length ; i++) {
        map.set(inorder[i], i);
    }
    
    const helper = (is, ie, ps, pe) => {
        if(ie < is || pe < ps)
            return null;
        
        const root = preorder[ps];
        const node = new TreeNode(root);
        
        const leftTreeSize = map.get(root) - is;
        
        node.left = helper(is, map.get(root) - 1, ps + 1, ps + leftTreeSize );
        node.right = helper(map.get(root) + 1, ie, ps + leftTreeSize + 1, pe);
        
        return node;
    }
    
    return helper(0, inorder.length - 1 , 0 , preorder.length - 1);
};