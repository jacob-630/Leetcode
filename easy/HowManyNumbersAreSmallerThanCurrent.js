ans = [];
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                sum++;
            }
        }
        ans.push(sum)
    }
    return ans;