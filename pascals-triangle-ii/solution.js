//Various approaches here:

//TC: O(n) SC: O(1)

var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1,1];
    
    let tempArray = [1,1];
    for(let i = 2; i <= rowIndex; i++){
        let newArray = [1];
        for(let j = 1; j < i; j++){
            newArray.push(tempArray[j-1] + tempArray[j]);
        }
        newArray.push(1);
        tempArray = newArray;
    }
    
    return tempArray;
};