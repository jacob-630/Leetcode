text = text.toLowerCase();
    text = text.split(" ");
    text.sort(function(a, b){return a.length - b.length});
    text[0] = text[0].split("");
    text[0][0] = text[0][0].toUpperCase();
    text[0] = text[0].join("");
    return text.join(" ");