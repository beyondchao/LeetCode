//简单密码

// 描述
// 规定这样一种密码的变换方法:
// ·对于密码中的小写字母，参考九键手机健盘，将它们映射为对应的数字，具体地，abc对应数字2、def对应数字3、ghi对应数字4、jl对应数字5、mo对应数字6、PqrS对应数字7、tuv对应数字8、wxyz对应数字9;·对于密码中的大写字母，先将其转换为小写，然后向后移动一位，即Z转换为a，A转换为b，B转换为c，...,Y转换为z，Z转换为a。·对于密码中的数字，保持不变。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let output = "";
    while ((line = await readline())) {
        for (var char of line) {
            if (/[a-z]/g.test(char)) {
                switch (char) {
                    case "a":
                    case "b":
                    case "c":
                        output += 2;
                        break;
                    case "d":
                    case "e":
                    case "f":
                        output += 3;
                        break;
                    case "g":
                    case "h":
                    case "i":
                        output += 4;
                        break;
                    case "j":
                    case "k":
                    case "l":
                        output += 5;
                        break;
                    case "m":
                    case "n":
                    case "o":
                        output += 6;
                        break;
                    case "p":
                    case "q":
                    case "r":
                    case "s":
                        output += 7;
                        break;
                    case "t":
                    case "u":
                    case "v":
                        output += 8;
                        break;
                    case "w":
                    case "x":
                    case "y":
                    case "z":
                        output += 9;
                        break;
                    default:
                }
            } else if (/[A-Z]/g.test(char)) {
                let low = char.toLowerCase()
                output += String.fromCharCode((low.charCodeAt() - 97 + 1) % 26 + 97)
            } else {
                output += char;
            }
        }
        console.log(output)
    }
})();
