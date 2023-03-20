function solution(inputString) {
    nString = inputString.split("").reverse().join("");
    if(inputString == nString ){
        return true
    }
    return false;
}