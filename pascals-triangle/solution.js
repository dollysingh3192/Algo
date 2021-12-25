//Various approaches here:

//TC: O(n^2) SC: O(1)  //Not counting output

var generate = function(numRows) {
    if(numRows === 1) return [[1]];
    
    const output = [[1], [1,1]];
    
    for(let r = 2; r < numRows; r++) {
        
        let arr = [];
        
        for(let i = r; i <= r; i++) {
            arr.push(1);
            for(let j = 1; j < i; j++) {
                    let temp = output[i - 1][j-1] + output[i - 1][j];
                    arr.push(temp);
            }
            arr.push(1);
        }
        
        output.push(arr); 
    }
    
    return output;
};

//TC: O(n^2) SC: O(1)   //Not counting output

var generate = function(numRows) {
    const output = [];
    
    for(let r = 0; r < numRows; r++) {
        
        let arr = [];
        
        for(let i = r; i <= r; i++) {
            for(let j = 0; j <= i; j++) {
                if(i === j || j === 0) {
                    arr.push(1);
                } else {
                    let temp = output[i - 1][j-1] + output[i - 1][j];
                    arr.push(temp);
                }
            }
        }
        
        output.push(arr); 
    }
    
    return output;
};