var intersection = function(nums1, nums2) {
    let ans = [];
    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i]) && !ans.includes(nums1[i])){
            ans.push(nums1[i]);
        }
    }
    return ans;
};