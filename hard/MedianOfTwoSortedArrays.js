for(let i = 0; i < nums2.length; i++){
    nums1.push(nums2[i])
}
nums1.sort(function(a,b){return a - b})
console.log(nums1)
if(nums1.length % 2 != 0){
    return(nums1[Math.floor(nums1.length/2)])
}
else{
    return ((nums1[Math.floor(nums1.length/2)] + nums1[Math.floor(nums1.length/2) - 1]) / 2)
}