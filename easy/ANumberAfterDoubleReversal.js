num = num.toString();
    numArray = num.split("");
    if(numArray.length == 1){
        return true;
    }
    while(numArray[0] == 0 || numArray[numArray.length - 1] == 0){
        if(numArray[0] == 0){
            numArray.shift();
        }
        if(numArray[numArray.length - 1] == 0){
            numArray.pop();
        }
    }
    ogArray = num.split("");
    for(let i = 0; i < ogArray.length; i++){
        if(numArray[i] != ogArray[i]){
            return false;
        }
    }
    return true;