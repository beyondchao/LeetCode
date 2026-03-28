//求最小整数和

//字符串由a-z,A-Z,+,-,0-9组成，正整数：001，100，002，负整数：-009

// sff+232sdsd-w2324-23-sd-34-5-sd+23dsd235-002300
// 输入:bb1234aa
// 输出:10
// 输入:bb12-34aa
// 输出:31
// 说明:1+2-(34)=-31

//  22min
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let finalArr = [];
    while(line = await readline()){
        for (let i=0; i<line.length; i++) {
            if (line[i] == "-") {
                let numLen = 0;
                let start = i + 1;
                if (start >= line.length) return;
                i++;
                while (/[0-9]/g.test(line[i])) {
                    numLen++;
                    i++;
                }
                if (numLen > 0) {
                    finalArr.push(-Number(line.slice(start, start+numLen)))
                }
            } else if (/[1-9]/g.test(line[i])) {
                 finalArr.push(Number(line[i]))
            }
        }
        var add = finalArr.reduce((a,b) => a+b, 0);
        console.log(add);
    }
}()
