// 描述
// 对于给定的若干个单词组成的句子，每个单词均由大小写字母混合构成，单词间使用单个空格分隔。输出最后一个单词的长度。
// 输入描述：
// 在一行上输入若干个字符串，每个字符串代表一个单词，组成给定的句子。
// 除此之外，保证每个单词非空，由大小写字母混合构成，且总字符长度不超过 1000。
// 输出描述：
// 在一行上输出一个整数，代表最后一个单词的长度。

// HelloNowcoder 13
// A B C D 1

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin
})

rl.on("line", function(str) {
    if (str.length > 1000) return
    let arr = str.split(" ");
    let len = arr[arr.length - 1].length
    console.log(len) 
})