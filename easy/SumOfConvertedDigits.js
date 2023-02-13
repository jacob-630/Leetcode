s = s.split("").map(x => x.charCodeAt(0)-96).join("");
    s = BigInt(s);
    console.log(s);
    for(let i = 0; i < k; i++){
        s = s.toString().split("").map(x => parseInt(x)).reduce((accumulator, current) => accumulator + current);
        console.log(s);
    }
    return s;