title = title.split(" ");
for(let i = 0; i < title.length; i++){
    title[i] = title[i].toLowerCase();
    if(title[i].length > 2){
        array = title[i].split("");
        array[0] = array[0].toUpperCase();
        title[i] = array.join("");
    }
}
return title.join(" ");
