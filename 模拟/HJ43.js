//组成最大数字

// 题目描述小组中每位都有一张卡片，卡片上是6位内的正整数，将卡片连起来可以组成多种数字，计算四组成的最大数字。输入描述
// “，”号分割的多个正整数字符串四，不需要考虑非数字异常情况，小组最多25个人。
// 输出描述最大的数字字符串
// 用例

// 4589,101,41425,9999
// 9999458941425101

// 22,221
// 22221
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let newArr = []; 
    while(line = await readline()){
        let arr = line.split(",")
        arr.sort((a,b) => {
            return Number(b + a) - Number(a + b) 
        })
        console.log(Number(arr.join("")))
    }
}()
