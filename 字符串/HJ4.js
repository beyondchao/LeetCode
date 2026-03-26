var line = "[@A8aA].0"
let count= 0;
        var obj = {}
        for(let char of line) {
            if (char.charCodeAt() <= 127) {
                if (!obj[char]) {
                    count++
                    obj[char] = char
                } 
            }
        }
        console.log(count)