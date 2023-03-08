var productExceptSelf = function(nums) {
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        let counter = 1;
        for(let j = 0; j < nums.length; j++){
            if(j == i){
                continue;
            }
            else{
                counter*= nums[j];
            }
            
        }
        answer.push(counter);
    }
    return answer;
}