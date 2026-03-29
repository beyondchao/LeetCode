// 查找输入整数二进制中1的个数

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        console.log(Number(line).toString(2).match(/1/g) ? Number(line).toString(2).match(/1/g).length : 0)
    }
}()
