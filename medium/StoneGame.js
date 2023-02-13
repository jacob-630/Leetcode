let p1 = 0;
    let p2 = 0;
    let turn = 1;
    for(let i = 0; i < piles.length; i++){
        if(piles[1] >= piles[piles.length-2]){
            if(turn = 1){
                p1+= piles[0];
                piles.shift;
            }
            else if(turn == -1){
                p2+= piles[0];
                piles.shift;
            }
        }
        else{
            if(turn = 1){
                p1+= piles[piles.length-1];
                piles.pop;
            }
            else if(turn == -1){
                p2+= piles[piles.length-1];
                piles.pop;
            }
        }
    }
    if(p1 > p2){
        return true;
    }
    else if(p2 > p1){
        return false;
    }