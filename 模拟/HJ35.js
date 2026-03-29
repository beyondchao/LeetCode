//整数与IP地址间的转换

// 44:44.03

// 描述原理:ip地址的每段可以看成是一个0-255的整数，把每段拆分成一个二进制形式组合起来，然后把这个二进制数转变成
// 一个长整数。
// 举例:一个ip地址为10.0.3.193
// 每段数字相对应的二进制数
// 00001010
// 10
// 00000000
// 0
// 00000011
// 19311000001
// 组合起来即为:00001010 00000000 0000001111000001.转换为10进制数就是:167773121，即该IP地址转换后的数字就是它了。
// 数据范围:保证输入的是合法的IP序列
// 输入描述:
// 输入
// 1输入IP地址
// 2输入10进制型的IP地址
// 输出描还:
// 输出
// 1输出转换成10进制的IP地址
// 2输出转换后的IP地址

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        if (/\./g.test(line)) {
            let arr = line.split(".");
            let num2 = "";
            arr.forEach(item => {
              
                num2 += Number(item).toString(2).padStart(8, "0")
            });
                console.log(parseInt(num2, 2))
        } else {
            let num2 = Number(line).toString(2).padStart(32, "0");
           // console.log(num2, num2.length)
            let arr = [];
            for (let i = 0; i < num2.length; i+=8) {
                arr.push(parseInt(num2.substring(i, i + 8), 2))
                //console.log(num2.substring(i, i + 8))
            }
            console.log(arr.join("."))
        }
    }
}()
