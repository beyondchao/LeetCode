// 对于给定的由大小写字母混合构成的n个单词，输出按字典序从小到大排序后的结果。
// (名词解释】
// 从字符事的第一个字符开始逐个比较，直至发现第一个不同的位置，比较这个位置字符的ASClI码，ASCi码较小(A2<‘B]...<‘22<“a2<...<‘2)的字符串字典序也较小
// 输入描述:
// 第一行输入一个整数n(1≤n≤10)代表给定的单词个数。
// 此后n行，每行输入一个长度1≤length(s)≤100，由大小写字母构成的字符串s，代表一个单词。
// 输出描述:
// 一共n行，每行输出一个字符串，代表排序后的结果。第一行输出字典序最小的单词。

//2hours

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let inputCount = 0;
    let wordCount = 0;
    let words = [];
    while(line = await readline()){
       if (inputCount == 0) {
            if (isNaN(line)) return;
            wordCount = Number(line);
            inputCount++;
       } else {
         
            if (inputCount <= wordCount) {
                words.push(line)
               // console.log(words, inputCount, wordCount)
                if (inputCount == wordCount) {
                    
                    wordSort(words)
                } 
            }
            inputCount++;
       }
       
    }
}()
function wordSort(arr) {
    // arr.shift()
    
    arr.sort((a, b) => {
       return a.localeCompare(b, undefined, { sensitivity: "base" })
    })

    arr.forEach((item) => {
       console.log(item )
    })
}
