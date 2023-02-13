longest = 0;
    for(let i = 0; i < sentences.length; i++){
        sentences[i] = sentences[i].split(" ");
        if(sentences[i].length > longest){
            longest = sentences[i].length;
        }
    }
    return longest;
    