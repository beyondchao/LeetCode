//记负均正
// 描述
// 对于给定的n个整数a1,a2,...,an，统计并计算:负整数的个数;
// 正整数的平均值。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let isFirst = true;
    // Write your code here
    let minusCount = 0;
    let plusCount = 0;
    let plusTotal = 0;
    while(line = await readline()){
        if (isFirst) {
            isFirst = false;
            continue
        };
        if (line.toString().length > 1) {
            let arr = line.split(" ");
            arr.forEach(item => {
                if (parseFloat(item) < 0) {
                    minusCount++
                } else if (parseFloat(item) > 0) {
                    plusCount++;
                    plusTotal += parseFloat(item)
                }
            })
        }
        if (plusCount == 0) {
            console.log(minusCount + " " + 0)
        } else {
            console.log(minusCount + " " + plusTotal/plusCount)
        }
        
    }
}()
