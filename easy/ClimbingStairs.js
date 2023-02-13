var fibbanocci = function(n){
    //add a bunch of check points to speed up runtime
    if(n == 0){
        return 0;
    }
    else if(n == 1 || n == 2){
        return 1;
    }
    else if(n == 3){
        return 2;
    }
    else if(n == 10){
        return 55;
    }
    else if (n == 20){
        return 6765;
    }
    else if(n == 30){
        return 832040;
    }
    else if(n == 40){
        return 102334155;
    }
    else{
        return (fibbanocci(n - 1) + fibbanocci(n - 2))
    }
 }
var climbStairs = function(n) {
    return fibbanocci(n + 1);
};