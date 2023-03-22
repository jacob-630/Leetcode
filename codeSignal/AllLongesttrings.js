function solution(inputArray) {
    inputArray = inputArray.sort((a, b)=> b.length - a.length);
    
    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i].length != inputArray[0].length){
            inputArray.splice(i, 1);
            i--;
        }
    }
    return inputArray;
    
}