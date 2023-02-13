let odds = (high+1-low)/2
    if(odds % 1 != 0 && low % 2 != 0){
        odds++;
    }
    odds = Math.floor(odds);
    return odds;