ans = [];
    nums = nums.sort(function(a, b){return a - b});
    console.log(nums);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            ans.push(i);
        }
    }
    return ans;