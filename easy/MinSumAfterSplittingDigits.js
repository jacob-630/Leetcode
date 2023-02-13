num = num.toString();
num = num.split("");
for(let i = 0; i < num.length; i++){
    num[i] = parseInt(num[i]);
}
num = num.sort(function(a, b){return a - b});
console.log(num)

let new1 = num[0]*10 + num[3];
let new2 = num[1]*10 + num[2];

console.log();
return new1 + new2;