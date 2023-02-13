ans = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            ans.push(i);
            break
        }
    }
    if(ans[0] == undefined){
        return [-1, -1]
    }
    for(let i = nums.length-1; i >= 0; i--){
        if(nums[i] == target){
            ans.push(i);
            break
        }
    }
    return ans;