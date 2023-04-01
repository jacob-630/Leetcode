var rearrangeArray = function(nums) {
    let evens = [];
    let odds = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i]>=0){
            evens.push(nums[i])
        }
        else{
            odds.push(nums[i]);
        }
    }
    let final = [];
    for(let i = 0; i < evens.length; i++){
        final.push(evens[i]);
        final.push(odds[i]);
    }
    console.log(final);
    return final;
};