let ans = [];
    let fixer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums.length == ans.length){
            return ans;
        }
        if(fixer == 0){
            ans.push(nums[i]);
            fixer = 1;
            i--;
        }
        else if(fixer == 1){
            ans.push(nums[i + n]);
            fixer = 0;
        }
    }