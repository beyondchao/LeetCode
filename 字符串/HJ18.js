//判断是不是子字符串

// 给定两个字符串s和t，判断s是否为t的子序列。
// 你可以认为s和t中仅包含英文小写字母。字符串t可能会很长(长度n~=500.000)而s是个短字符串(长度<=100)
// 字符串的一个子序列是原始字符串删除一些(也可以不删除)字符而不改变剩余字符相对位置形成的新字符串。(例如，"ace”是"abcde"的一个子序列，而”aec"不是)
// 进阶:时间复杂度O(n)，空间复杂度O(n)

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let first = true;
    let t = ""; //父串
    let s = ""; //子串
    let indexS = 0;
    let arr = [];
    while(line = await readline()){
        
        if (first) {
            s = line;
            first = false;
           
        } else {
            t = line;
            arr = t.split("");
      
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == s[indexS]) {
                    indexS++;
                }
                if (indexS >= (s.length - 1)) {
                    console.log("sasas", indexS)
                    break;
                }
                console.log(i)
            }
            console.log(indexS, s.length)
            if (indexS >= (s.length - 1)) {
                console.log(true)
            } else {
                console.log(false)
            }
        }
    }
}()
