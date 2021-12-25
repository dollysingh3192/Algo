//TC: O(n) SC: O(n)

var buildTree = function(inorder, postorder) {
    const map = new Map();
    
    for(let i = 0; i< inorder.length ; i++) {
        map.set(inorder[i], i);
    }
    
    const helper = (is, ie, ps, pe) => {
        if(ie < is || pe < ps)
            return null;
        
        const root = postorder[pe];
        const node = new TreeNode(root);
        
        const leftTreeSize = map.get(root) - is;
        
        node.left = helper(is, map.get(root) - 1, ps, ps + leftTreeSize - 1 );
        node.right = helper(map.get(root) + 1, ie, ps + leftTreeSize , pe - 1);
        
        return node;
    }
    
    return helper(0, inorder.length - 1 , 0 , postorder.length - 1);
};

//TC: O(n) SC: O(n)

var buildTree = function(inorder, postorder) {
    const map = new Map();
    
    for(let i = 0; i< inorder.length ; i++) {
        map.set(inorder[i], i);
    }
    
    let head = new TreeNode(0);
    
    let parent = [[0, inorder.length - 1 , 0 , postorder.length - 1, head, "left"]];
    
    while(parent.length) {
        let [is, ie, ps, pe, prev, text] = parent.pop();
        
        if(ie < is || pe < ps)
            continue;
        
        const root = postorder[pe];
        const node = new TreeNode(root); 
        
        if(text === "right")
            prev.right = node;
        
        if(text === "left")
            prev.left = node;
        
        const leftTreeSize = map.get(root) - is;
        
        parent.push([map.get(root) + 1, ie, ps + leftTreeSize , pe - 1, node, "right"]);
        parent.push([is, map.get(root) - 1, ps, ps + leftTreeSize - 1, node, "left"]);
    }
    
    return head.left;
};