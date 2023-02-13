for(let i = 0; i < nums2.length; i++){
    nums1[m+i] = nums2[i]
}
nums1.sort(function(a,b){return a - b})
console.log(nums1);