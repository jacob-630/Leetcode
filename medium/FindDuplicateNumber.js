let newNums = nums.sort(function(a, b){return a - b})
    for(let i = 0; i < newNums.length; i++){
        if(newNums[i] == newNums[i-1] || newNums[i] == newNums[i-1]){
            return newNums[i];
        }
    }