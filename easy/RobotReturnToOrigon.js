let up = 0;
    let down = 0;
    let left = 0;
    let right = 0;
    moves = moves.split("");
    for(let i = 0; i < moves.length; i++){
        if(moves[i] == 'U'){
            up++;
        }
        else if(moves[i] == 'L'){
            left++;
        }
        else if(moves[i] == 'R'){
            right++
        }
        else{
            down++;
        }
    }
    if(up == down && right == left){
        return true;
    }
    return false;