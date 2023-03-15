var guessNumber = function(n) {
    let l = 1;
    let r = n;
    let pick = Math.floor((r+l)/2);
    let g = guess(pick);
    while(l <= r) {
        if(g > 0) {
            l = pick+1;
            pick = Math.floor((r+l)/2);
            g = guess(pick);
        }
        else if(g < 0) {
            r = pick-1;
            pick = Math.floor((r+l)/2);
            g = guess(pick);
        }
        else {
            return pick;
        }
    }
};