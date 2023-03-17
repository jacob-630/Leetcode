var toGoatLatin = function(sentence) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    sentence = sentence.split(" ");
    for(let i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i].split("");
    }
    for(let i = 0; i < sentence.length; i++){
        if(VOWELS.includes(sentence[i][0])){
            sentence[i].push("ma")
        }
        else{
            sentence[i].push(sentence[i][0]);
            sentence[i].push("ma");
            sentence[i].shift();
            
        }
        for(let j = 0; j <= i; j++){
            sentence[i].push("a");
        }
      
    }
    for(let i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i].join("");
    }
    return sentence.join(" ")
};