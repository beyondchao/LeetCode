// 非严格递增连续数字序列

// 题目描述:
// 输入一个字符串仅包含大小写字母和数字，求字符串中包含的最长的非严格递增连续数字序列的长度(比如12234属于非严格递增连续数字序列)
// 输入描述:
// 输入一个字符串仅包含大小写字母和数字，输入的字符串最大不超过255个字符。
// 输出描述:
// 最长的非严格递增连续数字序列的长度。
// 示例1:
// 输入
// abc2234019A334bc
// 输出
// 4
// 说明:
// 2234为最长的非严格递增连续数字序列，所以长度为4

let fs = require("fs");
let text = fs.readFileSync(0, "utf8").trim();

if (!text) process.exit();
let lines = text.split(/\s+/);
let line = lines[0].split("");
line.map(item => isNaN(Number(item)) ? item : Number(item));
let max = 0;
let start = 0;
for (let i=0; i<line.length; i++) {
    let current = 0;
    let j = i+1;
    if (/[0-9]/.test(line[i])) {
        current++;
        
        while (!isNaN((line[j])) && (line[j]) >= line[i]) {
            j++;
            current++;
            i++;
        }
    }
    if (current >= max) {
        start = i - current + 1;
        // i = j;
        max = current;
    }
}
console.log(max);