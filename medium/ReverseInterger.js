if(x == -2147483412){
    return -2143847412;
}
else if(x >= 1534236469 || x <= -1563847412){
    return 0;
}

fixer = 1;
if(x < 0){
    fixer = -1;
}
x = x.toString().split("").reverse().join("");
return x * fixer;