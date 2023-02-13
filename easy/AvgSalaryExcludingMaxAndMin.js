let answer = 0;
    let sum = 0;
    for(let i = 0; i < salary.length; i++){
        sum += salary[i]
    }
    salary.sort(function(a,b){return a - b})
    sum -= salary[0] + salary[salary.length-1];
    answer = sum/(salary.length-2);
    return answer;