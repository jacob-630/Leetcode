sArr = s.split("");
    tArr = t.split("");

    for(let i = 0; i < sArr.length; i++){
        sArr[i] = sArr[i].charCodeAt(0);
    }
    for(let i = 0; i < tArr.length; i++){
        tArr[i] = tArr[i].charCodeAt(0);
    }


    sArr = sArr.sort(function(a, b){return a - b});
    tArr = tArr.sort(function(a, b){return a - b});
    

    sArr = sArr.join("");
    tArr = tArr.join("");
    
    if(sArr == tArr){
        return true;
    }
    return false;