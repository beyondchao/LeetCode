// 描述 最长回文字符串
// 对于给定的由小写字母构成的字符串8，求出其最长回文子串的长度。
// 子串为从原字符串中，连续的选择一段字符(可以全选、可以不选)得到的新字符串。
// 一个字符串被称作回文串，当且仅当这个字符串从左往右读和从右往左读是相同的。
// 输入描述:
// 在一行上输入一个长度为1≤len(s)≤350、仅由小写字母构成的字符串S。输出描述:
// 输出一个整数，表示字符串s的最长回文子串的长度。

//abccb
//bccba
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        //方法一，双重循环通过翻转数组对比是否为回文子串
        // let str = line;
        // let arr = str.split("");
        // var max = 0;
        // for (let i = 0; i<arr.length; i++) {
        //     for(let j = i + 1; j <= arr.length; j++) {
        //         let substr = arr.slice(i, j)
        //         let str1 = substr.join("");
        //         let str2 = str1.split("").reverse().join("")
        //         if (str1 == str2) {
        //             console.log(str2)
        //             max = Math.max(max, str2.length) 
        //         }
        //     }
        // }
        // console.log(max)
        //方法二，通过双指针
        let arr = line.split("");
        let max = 0;
        let start = 0;
        for (let i=0; i < arr.length; i++) {
            
            let l = i-1;
            let now = 1;
            while (arr[i] == arr[i+1] && arr[i+1] !== undefined) {
                now++;
                i++;
            }
            let r = i+1;
            while (arr[l] === arr[r] && arr[l] !== undefined) {
                r++;
                l--;
                now += 2;
            }
            if (max < now) {
                max = now;
                start = l + 1;
            }
        }
        console.log(max)
    }
}()
