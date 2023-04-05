var minOperations = function(nums) {
    let changes = 0;
    for(let i = 1; i < nums.length; i++){
        while(nums[i] <= nums[i-1]){
            nums[i]++;
            changes++;
        }
    }
    return changes;
};