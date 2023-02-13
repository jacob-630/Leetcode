let ans = []
    nums = nums.sort(function(a, b){return a - b});
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i+1] && nums[i] != nums[i-1]){
            ans.push(nums[i]);
            if(ans.length == 2){
                return ans;
            }
        }
    }