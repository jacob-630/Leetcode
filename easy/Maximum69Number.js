num = num.toString().split("").map(x => parseInt(x));
    changes = 0;
    for(let i = 0; i < num.length; i++){
        if(changes == 0 && num[i] == 6){
            num[i] = 9;
            return parseInt(num.join(""))
        }
    }
    return parseInt(num.join(""));