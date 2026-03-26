// 描述
// 对于给定的由小写字母和数字混合构成的字符串8，你需要按每8个字符换一行的方式书写它，具体地:·书写前8个字符，换行;
// ·书写接下来的8个字符，换行;
// 重复上述过程，直到字符串被完全书写。
// 特别地，如果最后一行不满8个字符，则需要在字符串末尾补充0，直到长度为8。
// 输入描述:
// 在一行上输入一个长度1≤length(s)≤100，由小写字母和数字构成的字符串s。输出描述:
// 输出若干行，每行输出8个字符，代表按题意书写的结果。

var line = "hellonowcoder"
var arr = line.split("")
var newArr = []
for (let a=0; a<arr.length; a++) {
    newArr.push(arr[a])
    if ((a+1) % 8 == 0) {
        if (a !== 0) {
            newArr.push("\n")
        }
    } 
}
let count = arr.length % 8
if (count !== 0) {
    let addCount = 8 - count
    for (let i = 0; i < addCount; i++) {
        newArr.push("0")
    }
}
console.log(newArr.join(""))