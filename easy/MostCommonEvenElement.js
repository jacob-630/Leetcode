for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 != 0){
        nums.splice(i, 1);
        i--;
    }
}
if(nums.length == 0){
    return -1;
}
nums = nums.sort(function(a, b){return a - b});
let timesApp = [];
for(let i = 0; i < nums.length; i++){
    let apperances = 0;
    while(nums[i] == nums[i+1]){
        apperances++;
        i++;
    }
    timesApp.push(apperances+1);
}
for(let i = 0; i < nums.length; i++){
    if(nums[i] == nums[i+1]){
        nums.splice(i, 1);
        i--;
    }
}
let greatest = 0;
for(let i = 0; i < timesApp.length; i++){
    if(timesApp[i] > timesApp[greatest]){
        greatest = i;
    }
}
return nums[greatest];