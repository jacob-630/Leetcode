let zeros = 0;
    let ones  = 0;
    let twos  = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            zeros++;
        }
        else if(nums[i] == 2){
            twos++;
        }
        else{
            ones++;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(zeros > 0){
            nums[i] = 0;
            zeros--;
        }
        else if(ones > 0){
            nums[i] = 1;
            ones--;
        }
        else if(twos > 0){
            nums[i] = 2;
            twos--;
        }
    }

    console.log({nums})
    return nums;