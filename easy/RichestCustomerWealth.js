let richest = 0;
    for(let i = 0; i < accounts.length; i++){
        let sum = 0
        for(let j = 0; j < accounts[i].length; j++){
            sum+= accounts[i][j];
        }
        if(sum > richest){
            richest = sum;
        }
    }
    return richest;