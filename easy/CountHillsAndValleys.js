let hillsOrValleys = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i, 1);
            i--;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
            hillsOrValleys++;
        }
        else if(nums[i] < nums[i-1] && nums[i] < nums[i+1]){
            hillsOrValleys++
        }
    }
    return hillsOrValleys;