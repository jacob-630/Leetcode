zeros = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            zeros++;
            nums.splice(i, 1);
            i--;
        }
    }
    for(let i = 0; i < zeros; i++){
        nums.push(0);
    }
    return nums;