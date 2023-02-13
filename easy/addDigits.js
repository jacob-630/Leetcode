while(num > 9)
    {num = num.toString().split("").map(x => parseInt(x)).reduce(
  (accumulator, currentValue) => accumulator + currentValue);
  console.log(num);}
  return num;