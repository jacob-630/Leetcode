function solution(inputArray) {
    let largest = -9999999999999;
    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i] * inputArray[i-1] > largest){
            largest = inputArray[i] * inputArray[i-1];
        }
    }
    return largest;
}