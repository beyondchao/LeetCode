//检查是否存在满足条件的数字组合
// 给定一个正整数数组检查数组中是否存在满足规则的数组组合
// 规则:A=B+2C
// 输入描述
// 第一行输出数组的元素个数接下来一行输出所有数组元素，用空格隔开输出描述如果存在满足要求的数在同一行里依次输出规则里ABIC的取值用空格隔开如果不存在输出0
// 示例1:输入42730输出732说明:7=3+2*2

let fs = require("fs");
let text = fs.readFileSync(0, "utf8").trim();

if (!text) process.exit();

let lines = text.split(/\r?\n/);
let arr = lines[0].split(" ");
arr = arr.sort((a,b) => b - a);
arr = arr.map(item => Number(item));
for (let i=0; i < arr.length - 2; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr.slice(i).includes((arr[i] - arr[j])/2)  && (arr.findLastIndex(num => num == (arr[i] - arr[j])/2) !== arr.indexOf(arr[j]))) {
            console.log(arr[i] + " " + arr[j] + " "+ (arr[i] - arr[j])/2)
            return
        }
    }
}
console.log(0)
