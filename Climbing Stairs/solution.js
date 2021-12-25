//Various approaches here:

//TC: O(n) SC: O(n)

var climbStairs = function(n) {
    let map = {};
    
    const helper = (current) => {
        if(current > n) {
            return 0;
        }
        
        if(current === n) {
            return 1;
        }
        
        if(map[current])
            return map[current];

        map[current] = helper(current + 1) + helper(current + 2);
        
        return map[current];
    }
    
    return helper(0);
}

//TC: O(n) SC: O(1)

var climbStairs = function(n) {
    if(n <= 3)
        return n;
    
    let prev2 = 2, prev3 = 3;
    let current = 0;
    
    for(let i = 3;i < n; i++) {
        current = prev2 + prev3;
        
        prev2 = prev3;
        prev3 = current;
    }
    
    return current;
}