// 描述
// 对于给定的由大小写字母、数字和空格混合构成的字符串8，给定字符c，按要求统计:·若c为大写或者小写字母，统计其大小写形态出现的次数和;
// 若c为数字，统计其出现的次数。
// 保证字符c要么为字母、要么为数字。
// 输入描述:
// 第一行输入一个长度1≤length(s)≤103，由大小写字母、数字和空格构成的字符串8。保证首尾不为空格。
// 第二行输入一个字符c，保证c为大小写字母或数字。
// 输出描述:
// 在一行上输出一个整数，代表统计结果。


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let isFirst = true;

void async function () {
    let line
    let str;
    // Write your code here
    while(line = await readline()){
        console.log(isFirst,'isFirst')
        if (isFirst) {
            str = line;
            isFirst = false;
        } else {
            if (!isNaN(Number(line))) {
                //数字
                let count = 0;
                for(let char of str) {
                    if (char == line) {
                        count++
                    }
                }
                console.log(count)
            } else {
                //非数字
                let count = 0
                let tempStr = str.toUpperCase()
                let temChar = line.toUpperCase()
                for (let char of tempStr) {
                    if (char == temChar) {
                      //  console.log(char)
                        count++
                    }
                }
                console.log(count)
            }
        }
    }
    // rl.close();
}()
