nums.sort(function(a, b){return a - b});
    for(let i = 0; i < nums.length; i++){
        let apperances = 0;
        while(nums[i] == nums[i+1]){
            apperances++;
            i++;
        }
        if(apperances + 1 > nums.length/2){
            return nums[i];
        }
        console.log(apperances+1);
    }