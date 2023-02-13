nums = nums.sort(function(a, b){return a - b});
    while(nums[0] < 1){
        nums.shift();
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i-1]){
            nums.splice(i, 1)
            i--;
        }
    }
    for(let i = 1; i <= nums.length; i++){
        if(nums[i-1] != i){
            return i;
        }
    }
    return nums.length+1;