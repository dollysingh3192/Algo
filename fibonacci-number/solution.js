//Various approaches here:

//TC: O(n) SC: O(n)

var fib = function (n) {
    if (n === 0 || n === 1)
        return n;

    const map = new Map();
    map.set(0, 0);
    map.set(1, 1);

    for (let i = 2; i <= n; i++) {
        let temp = map.get(i - 1) + map.get(i - 2);
        map.set(i, temp);
    }

    return map.get(n);
}

//TC: O(n) SC: O(1)


var fib = function (n) {
    if(n === 0 || n === 1)
        return n;
    
    let prev1 = 0;
    let prev2 = 1;
    let sum = 0;
    
    for(let i = 2; i <= n; i++) {
        sum = prev1 + prev2;
        
        prev1 = prev2;
        prev2 = sum;
    }
    
    return sum;
}