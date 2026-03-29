// 描述
// 我们定义一个无限大的二维网格上有一个小人，小人初始位置为(0,0)点，小人可以读取指令上下左右移动。一个合法的指令由三至四个符号组成第一个符号为”A/D/W/S”中的一个，代表小人移动的方向;分别代表向左、向右、向上、向下移动;记某个时刻小人的坐标为(2,3)，向左移动一情即抵达(一1,3)、向右移动一情即抵达(2十1,y)、向上移动一格即抵达(a,y十1)、向下移动一格即抵达(a,y一1)。
// 最后一个符号为‘;，代表指令的结束，该符号固定存在;中间为一个大于0且小于100的数字，代表小人移动的距离。特别地，如果这个数字小于10，那么它可能包含一个前导零，此时也视为合法。
// 如果你遇到了一个不台法的指令，则直接忽略:例放，指令“A100;”是不合法的，因为100超出了规走的数字范围;“Y10;”也是不台法的，因为Y不是”A/D/W/S”中的一个。
// 输出小人最终的坐标。
// 输入描述:
// 在一行上输入一个长度1≤ length()≤10#，由大写字母、数字和分号(1;2)构成的字符事8，代表输入的指令序列。保证字符串中至少存在一个;’，且末尾一定为;”.
// 输出描述:
// 在一行上输出一个两个整数，代表小人最终位置的横纵坐标，使用逗号间隔。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split(";");
        let x = 0, y = 0;
        arr.forEach(item => {
      
            let reg1 = /^[ADWS][0-9]*[0-9]$/g
            // console.log((item.length == 2 || item.length == 3) && reg1.test(item))
            if ((item.length == 2 || item.length == 3) && reg1.test(item)) {
                let direction = item[0];
                console.log(item.slice(1))
                let number = Number(item.slice(1));
                
                switch (direction) {
                    case "A":
                        x -= number;
                        break;
                    case "D":
                        x += number;
                        break;
                    case "W":
                        y += number;
                        break;
                    case "S":
                        y -= number;
                    default:

                }
            }
        });
        console.log(x + "," +y)
    }
}()
