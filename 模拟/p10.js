//栈运算

// 最大括号深度
// 题目描述
// 现有一字符串仅由"(”，")"，"("""，"["，"]"六种括号组成。若字符串满足以下条件之一，则为无效字符串:任一类型的左右括号数量不相等
// 存在未按正确顺序(先左后右)闭合的括号输出括号的最大嵌套深度，若字符串无效则输出0。
// 0<=字符串长度<=100000
// 输入描述
// 一个只包括(，‘)，‘{'，"""，[，"]"的字符串
// 输出描述
// 整数，最大的括号深度

//测试 "(((){{()[]}}))" //输出5

let fs = require("fs");
let text = fs.readFileSync(0, "utf8").trim();

if (!text) process.exit();
let lines = text.split(/\r?\n/);

let arr = lines[0].split("");
let stack = [];
let maxCount = 0;
let obj = {
    ")": "(",
    "}": "{",
    "]": "["
}
arr.forEach(item => {

    if (!obj[item] ) {
        stack.push(item);
        //console.log(stack)
    } else {
        maxCount = stack.length > maxCount ? stack.length : maxCount;
        let del = stack.pop()
        if (obj[item] !== del) {
          //  console.log(del, obj[item]);
            maxCount = 0;
            return
        }
    }
})
if (stack.length > 0) {
    console.log(0)
} else {
    console.log(maxCount)
}