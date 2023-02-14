let errors = 1;
    while(errors != 0){
        for(let i = 0; i < nums.length; i++){
        if(nums[i] == 2){
            nums.splice(i, 1);
            nums.push(2);
        }
        else if(nums[i] == 0){
            nums.splice(i, 1);
            nums.unshift(0);
        }
        }
        errors = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > nums[i+1]){
                errors++;
            }
        }
    }
    console.log({nums})
    return nums;