var checkIfPangram = function(sentence) {
    alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',  'z']
    sentence = sentence.split("");

    if(alpha.every(i => sentence.includes(i))){
        return true;
    }
    else{
        return false;
    }
};