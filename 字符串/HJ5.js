// 描述
// 对于给定的仅由小写字母构成的字符串，删除字符串中出现次数最少的字符。输出删除后的字符串，字符串中其它字符保持原来的顺序。
// 特别地，若有多个字符出现的次数都最少，则把这些字符都删除。
// 输入描述:
// 在一行上输入一个长度为1≤length(s)≤20，仅由小写字母构成的字符串8，代表待处理的字符串。输出描述:
// 在一行上输出一个字符串，代表删除后的答案。保证这个字符串至少包含一个字符。
// 示例1
// 输入:aabcddd
// 输出:aaddd
// 说明:在这个样例中，出现次数最少的字符为‘b’和‘c’，因此需要同时删除这两个字符。

var str = "aabcddd"
var obj = {}
for (var char of str) {
    if (obj[char]) {
        obj[char]++
    } else {
        obj[char] = 1
    }
}
var arr1 = []
var arr2 = []
for (var key in obj) {
    arr1.push(obj[key])
}

for (var key in obj) {
    if (obj[key] == Math.min(...arr1)) {
        arr2.push(key)
    }
}
var tempArr = str
var regStr = new RegExp(`[${arr2.join("")}]`, "g")
var reStr = str.replace(regStr, '')
console.log(reStr)