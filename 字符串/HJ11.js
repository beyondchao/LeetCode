//统计大写字母个数
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let count = 0;
        for (let char of line) {
            if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
                count++
            }
        }
        console.log(count)
    }
}()
