// 统计每个月兔子的总数
//22:59.73
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
       let month = Number(line);
       let arr = [];
       if (month == 1) {
            arr.push(0)
       } else if (month == 2) {
            arr.push(0)
            arr.push(0)
       } else if (month == 3) {
            arr.push(0)
            arr.push(0)
            arr.push(1)
       } else {
            arr.push(0)
            arr.push(0)
            arr.push(1)
            for (let i = 3; i < month; i++) {
              
                arr.push(arr[i-1] + arr[i-2])
            }
       }
       console.log(arr.reduce((a,b) => a+b, 0) + 1)
    }
}()
