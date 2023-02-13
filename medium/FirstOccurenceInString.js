haystack = Array.from(haystack);

needle = Array.from(needle);
for(let i = 0; i < haystack.length; i++){
    if(haystack[i] == needle[0]){
        let correct = 0;
        for(let j = 0; j < needle.length; j++){
            if(haystack[i+j] == needle[j]){
                
                correct++
            }
            if(correct == needle.length){
                console.log("in one")
                return i;

                
            }
        }
    }

}
return -1;