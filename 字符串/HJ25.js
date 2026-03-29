// 查找两个字符串中的最长公共子串

//1:39:19.61
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let isFirst = true;
    let str1,str2;
    let arr = [];
    while(line = await readline()){
        if (isFirst) {
            str1 = line;
            isFirst = false
        } else {
            str2 = line;
            let str3 = str1.length > str2.length ? str1 : str2; //长
            let str4 = str1.length > str2.length ? str2 : str1; //短
            
            let maxLen = 1;
            let start = 0;
            for (let i=0; i<str4.length; i++) {
                
                let currentLen = 1;
                
                while (new RegExp(`${str4.slice(i, i + currentLen)}`, "g" ).test(str3) &&  (currentLen) < str4.length) {
                
                  
                    currentLen++;
                   
                }
                if (currentLen >= maxLen) {
                    maxLen = currentLen;
                    //  console.log(start, start+maxLen)
                    arr.push(str4.slice(i, i+maxLen -1))
                    
                }   
                // start = i;
                // console.log(start)awaabb

            }
            
           // console.log(arr)
            arr = arr.sort((a,b) => b.length - a.length)
            //console.log(arr)
            console.log(arr[0])
        }
    }
}()
