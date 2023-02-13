n = n.toString();
    n = n.split("");
    product = 1;
    sum = 0;
    for(let i = 0; i < n.length; i++){
        n[i] = parseInt(n[i]);
        product *= n[i];
        sum += n[i];
    }
    return product - sum;