const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let input = 0;
    let arr = [];
    while(line = await readline()){
         console.log("ddddddddddd", input)
       // console.log(input, line)
        if (input == 1) {
            arr = line.split(' ').reverse()
        } else if (input == 2) {
           
            console.log(arr[Number(line) - 1])
        }
        if (input >= 2) {
            input = 0
        } else {
            input++;
        }

    }
}()
