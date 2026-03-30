//投资最大收益
// 团团过年收获了很多压岁钱，妈妈帮他开了账户去投资。现在给出 
// n
// n 天内投资收益情况，选出划中连续多少天的收益总和量大，这个收益是多少。

// 输入描述
// 第一行是一个整数n，表示天数，n的范围为[0,1000]
// 第二行是n整数组成的一个数组，表示每天的收益，有正数也有负数，范围为-10000,100000]
// 输出描述
// 输出一个整数，表示选取的连续天数的收益。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let first = true;
    while(line = await readline()){
       if (first) {
            first = false;
       } else {
            let max = -1000;
            let arr = line.split(" ")
            for (let i=0;i < arr.length; i++) {
                
                let current = parseFloat(arr[i]);
               // console.log(current)
                let j = i + 1;
            
                while (parseFloat(arr[j]) + parseFloat(arr[j - 1]) >= 0) {
                    
                    current += parseFloat(arr[j])
                    j++;
                    // console.log(current,parseFloat(arr[j]), "current")
                }
                if (current >= max) {
                    max = current;
                }
             
            }
            console.log(max)
       }
    }
 
}()
