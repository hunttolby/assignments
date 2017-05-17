function camelCase(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " " || str[i] === "-" ||str[i] === "_" || str[i] === "+" || str[i] === ";") {
            console.log(str);
            str = str.slice(i, i)
            var nextChar = str[i++]
            console.log(str);
            i++
        }
        
    }
    
}


camelCase("hello-world+i like;pizza")