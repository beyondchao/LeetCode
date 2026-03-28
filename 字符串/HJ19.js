// 华为机试–字符串ASC码+偏移量实现字符串加密的JS实现
// 题目描述：给出原文字符串str，通过对字符串的每个字母进行改变来实现加密，加密方式是在每一个字母str[i]偏移特定数组元素a[i]的量。数组a的前三位已经赋值：a[0]=1,a[1]=2,a[2]=4,当i>=3时，数组元素a[i]=a[i-1]+a[i-2]+a[i-3]。例如：原文abcde加密后bdgkr，其中偏移量分别是1，2，4，7，13。
// 输入描述：第一行是整数n，表示n组测试数据。每组数据包含一行，原文str(只含有小写字母，长度大于0小于50)。
// 输出描述：每组测试数据输出一行，表示密文。

// console.log("a".charCodeAt(), "z".charCodeAt())
const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin
})

let inputTimes = 0;
let currentTime = 0;
let isFirst = true;
let arr = [];
rl.on("line", function(str) {
   if (isFirst) {
        inputTimes = Number(str);
        isFirst = false;
   } else {
        if (currentTime < inputTimes) {
            currentTime++;
            arr.push(str)
        }
   }
   if (!isFirst && currentTime >= inputTimes) {
        arr.forEach(item => {
            let newStr = "";
            for (let i = 0; i<item.length; i++) {
               
                newStr += String.fromCharCode((caculateI(i) + (item[i].charCodeAt() - 97)) % 26 + 97  )
            }
            console.log(newStr)
        })
   }
})
function caculateI (i) {
    if (i == 0) {
        return 1
    } else if (i == 1) {
        return 2
    } else if (i == 2) {
        return 4
    } else {
        return caculateI(i - 1) + caculateI(i - 2) + caculateI(i - 3)
    }
}

//'erskaadaaz' //自测数据
 
 