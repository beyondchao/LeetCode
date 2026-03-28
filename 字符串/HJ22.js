//连续字母长度
// 题目描述
// 给定一个字符串四Q，只包含大写字母，求在包含同一字母的子串中，长度第k长的子串的长度，相同字母只取最长的那个子串
// 输入描述
// 第一行有一个子串(1<长度<=100)，只包含大写字母。
// 第二行为k的值
// 输出描述
// 输出连续出现次数第k多的字母的次数。
// 示例1
// 输入
// AAAAHHHBBCDHHHH
// 3
// 输出
// 2
// 说明
// 同一字母连续出现的最多的是A和H，四次;
// 第二多的是H，3次，但是H已经存在4个连续的，故不考虑:下个最长子串是BB，所以最终答案应该输出2.

//39min33sec

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let isFirst = true;
    let obj = {};
    while(line = await readline()){
        if (isFirst) {
            isFirst = false;
            let str = line;
            for (let i=0; i<str.length; i++) {
                    let now = 2;
                    if (!obj[str[i]]) {
                        obj[str[i]] = 1;
                    }
                    while (str[i+1] && str[i] == str[i+1]) {
                        if (obj[str[i]] >= 2) {
                            
                            if (obj[str[i]] < now) {
                                obj[str[i]] = now;
                            }
                        } else {
                            obj[str[i]]++;

                        }
                        i++;
                        now++;
                    }
                    
            }
            
        } else {
            let arr = Object.values(obj).sort((a, b) => b-a)
            let num = arr[Number(line) - 1] || -1
            console.log(obj, num)
        }
       
    }
}()


