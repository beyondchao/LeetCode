// 按单词下标区间翻转文章内容
/*
    题目描述:
    输入一个英文文章片段，翻转指定区间的单词顺序，标点符号和普通字母一样处理。
    例如输入字符串“I ama developer.”，区间[0,3]则输出“developer.a aml”.
    输入描述:
    使用换行隔开三个参数
    第一个参数为英文文章内容即英文字符串
    第二个参数为反转起始单词下标，下标从0开始第三个参数为结束单词下标，
    输出描述:
    反转后的英文文章片段，所有单词之间以一个半角空格分割进行输出
    示例1
    输入:
    I am a developer.
    1
    2
    输出:
    I a am developer.
*/
let fs = require("fs");
let text = fs.readFileSync(0, "utf8").trim();

if (!text) process.exit();
let lines = text.split(/\r?\n/)

lines = lines.filter(item => item.length > 0);

let str = lines[0];
let start = parseInt(lines[1])
let end = parseInt(lines[2])
let arr = str.split(" ");
let middleArr = arr.slice(start, end+1).reverse()
// console.log(start, end+1)
let finalArr = [];
if (end >= arr.length) {
    finalArr = arr.slice(0, start).concat(middleArr)
} else {
      //  console.log(middleArr)
    finalArr = arr.slice(0, start).concat(middleArr).concat(arr.slice(end + 1))
}
console.log(finalArr.join(" "))
