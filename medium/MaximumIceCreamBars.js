var maxIceCream = function(costs, coins) {
    costs = costs.sort(function(a, b){return a -b});
    let bought = 0;
    let i = 0;
    while(coins >= costs[0]){
        bought++;
        coins -= costs[i];
        costs.shift();
    }
    return bought;
};