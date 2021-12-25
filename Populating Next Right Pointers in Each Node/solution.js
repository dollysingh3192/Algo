//TC: O(n) SC: O(n)

var connect = function (root) {
    if (!root)
        return root;

    let parent = [[root]];

    let tmp, children;

    while (parent.length) {
        tmp = parent.pop();
        children = [];

        for (let i = 0; i < tmp.length; i++) {
            tmp[i].next = tmp[i + 1] || null;
            if (tmp[i].left)
                children.push(tmp[i].left);
            if (tmp[i].right)
                children.push(tmp[i].right);
        }

        if (children.length)
            parent = [children];
    }

    return root;
}

//TC: O(n) SC: O(1)
var connect = function (root) {
    if (!root)
        return root;

    let head = root;
    let dummy = new Node();

    while (head != null) {
        let temp = dummy;

        //Build the LinkedList
        while (head != null) {
            if (head.left != null) {
                temp.next = head.left;
                temp = temp.next;
            }
            if (head.right != null) {
                temp.next = head.right;
                temp = temp.next;
            }
            head = head.next;
        }

        //Start from next level
        head = dummy.next;
        dummy.next = null;
    }
    return root;
}