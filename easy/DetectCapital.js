word = word.split("");
    for(let i = 0; i < word.length; i++){
        word[i] = word[i].charCodeAt(0);        
    }
    let checker = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] > 64 && word[i] < 92){
            checker--;
        }
        else if (word[i] > 96 && word[i] < 124){
            checker++;
        }
    }
    console.log(checker);
    if(word.length == Math.abs(checker)){
        return true;
    }
    else if(word.length == Math.abs(checker + 2) && word[0] > 64 && word[0] < 92){
        return true;
    }
    else{
        return false;
    }