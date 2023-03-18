var thirdMax = function(nums) {
    nums = nums.sort((a, b) => b -a);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1]){
            nums.splice(i-1, 1)
            i--;
        }
    }
    if(nums.length < 3){
        return nums[0]
    }
    else{
        return nums[2];
    }
};