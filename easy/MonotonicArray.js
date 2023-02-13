if(nums[0] > nums[nums.length-1]){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < nums[i+1]){
            return false;
        }
    }
    return true;
}
else if(nums[0] < nums[nums.length-1]){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i+1]){
            return false;
        }
    }
    return true;
}
else{
    if(nums[0] == nums[nums.length-2] && nums[nums.length-1] == nums[Math.floor(nums.length/1.5)] ){
    return true;
    }
    else if(nums.length == 1){
        return true;
    }
    return false;
}