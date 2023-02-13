let answr = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 ==0){
            answr[i] = "FizzBuzz";
        }
        else if(i % 3 == 0){
            answr[i] = "Fizz";
        }
        else if(i % 5 == 0){
            answr[i] = "Buzz"
        }
        else{
            answr[i] = `${i}`
        }
    }
    answr.splice(0, 1);
    return answr;