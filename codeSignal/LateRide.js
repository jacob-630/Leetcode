function solution(n) {
    let timeS;
    
    timeS = (Math.floor(n/60))+""+(n%60);
    let time = timeS.split("");
    let ans = 0;
    for(let i = 0; i < time.length; i++){
        time[i] = parseInt(time[i]);
        ans+= time[i];
    }
    
   return ans;
}