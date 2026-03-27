// 描述
// 规定这样一种密码的加密方法:
// ·对于密码中的英文字母，按照字母表顺序，向后移动一位，同时改变大小写，即Z转换为a，A转换为b，B转换为c，...，Y转换为z，乙转换为a。
// 对于密码中的数字，增加1，9转换为0。
// 字符串的解密方法即为加密方法的逆过程。
// 现在，对于给定的明文字符串8，将其加密;对于给定的密文字符串t，将其解密。输入描述:
// 第一行输入一个长度为1≤length(s)≤103的字符串s，代表给定的明文字符串;第二行输入一个长度为1≤length(t)≤10的字符串t，代表给定的密文字符串。
// 除此之外，保证字符串s和t中仅包含英文字母和数字。
// 输出描述:
// 第一行输出一个字符串，代表加密后的s。
// 第二行输出一个字符串，代表解密后的t。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    var isFirst = true
    let newArr1 = []
    let newArr2 = []
    while(line = await readline()){
        let arr= line.split("")
        
        if (isFirst) {
            arr.forEach((item) => {
                if (isNaN(Number(item))) {
                    newArr1.push(classifyWordChar(item))
                } else {
                    newArr1.push(classifyNumberChar(item))
                }
            })
            arr.push('\n');
            isFirst = false
        } else {
            arr.forEach((item) => {
                if (isNaN(Number(item))) {
                    newArr2.push(passChar(item))
                } else {
                    newArr2.push(passNumber(item))
                }
            })
            console.log(newArr1.join(""))
            console.log(newArr2.join(""))
        }
    }
}()

function classifyWordChar (char) {
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
        "z"
    ]
    if (arr.indexOf(char) !== -1) {
        return arr[(arr.indexOf(char) + 1) % 26].toUpperCase()
    } else {
        return arr[(arr.indexOf(char.toLowerCase()) + 1) % 26]
    }
}
function classifyNumberChar (num) {
    if (num < 9) {
        return Number(num) + 1
    } else {
        return 0
    } 
}
function passChar(char) {
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
        "z"
    ]
    if (arr.indexOf(char) !== -1) {
        return arr[(arr.indexOf(char) + 25) % 26].toUpperCase()
    } else {
        return arr[(arr.indexOf(char.toLowerCase()) + 25) % 26]
    }
}
function passNumber(num) {
    if (num > 0) {
        return Number(num) - 1
    } else {
        return 9
    } 
}
