let ans = []
    if(dividend < 0 && divisor > 0){
        ans[0] = '-';
        
    }
    else if(dividend > 0 && divisor < 0){
        ans[0] = '-';
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor);
    let quotient = 0;
    while(dividend >= divisor * 100){
        dividend -= divisor * 100;
        quotient += 100;
    }
    while(dividend >= divisor * 10){
        dividend -= divisor * 10;
        quotient += 10;
    }
    while(dividend >= divisor){
        dividend -= divisor;
        quotient++;
    }
    ans.push(quotient)
    
    ans = ans.join('');
    ans = BigInt(ans);
    if(ans >= 2147483648){
        return 2147483647;
    }
    return ans;