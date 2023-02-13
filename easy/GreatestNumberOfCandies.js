let ans = [];
let greatest = [];
for(let i = 0; i < candies.length; i++){
    greatest.push(candies[i]);
}
greatest = greatest.sort(function(a, b){return b - a});

greatest = greatest[0];
console.log(candies);
for(let i = 0; i < candies.length; i++){
    if((candies[i] + extraCandies) >= greatest){
        ans.push(true);
    }
    else{
        ans.push(false);
    }
}
return ans;