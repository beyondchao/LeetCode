const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let isFirst = true;
    while(line = await readline()){
        
        let s = ""; //子串
        let t = "";
        let bool = true;
        if (isFirst) {
            s = line;
            isFirst = false;
        } else {
            console.log(bool)
            t = line;
            for (let char of s) {
                if (!t.includes(char)) {
                    bool = false
                }
            }
            //console.log(bool)
        }
    }
}()