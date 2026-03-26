//字符串截取前多少个
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    var isFirst = true
    let str
    while(line = await readline()){
        if (isFirst) {
            str = line
            isFirst = false
        } else {
            var arr = str.split("")
            console.log(arr.splice(0,line).join(""))
        }
    }
}()
