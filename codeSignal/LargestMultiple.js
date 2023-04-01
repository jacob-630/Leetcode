function solution(divisor, bound) {
    let i = bound;
    while(i%divisor!=0){
        i--;
    }
    return i;
}