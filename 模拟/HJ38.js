//从单向链表中删除指定值的节点
//1:27:48.53

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split(" ");
        let newArr = new Array();
        for (let i = 0; i < arr.length; i++) {
            if (i == 1) {
                newArr.push(arr[i])
               // console.log(newArr)
            } else {
    
                if (newArr.includes(arr[i + 1])) {
                   
                    newArr.splice(newArr.indexOf(arr[i + 1]) + 1, 0, arr[i])
                //  console.log(newArr)
                   // console.log(newArr.indexOf(arr[i + 1]),arr[i + 1], newArr)
                       i++;
                }
            }
        }
        //    console.log(arr.at(-1))
        newArr.splice(newArr.indexOf(arr.at(-1)), 1)
            console.log(newArr.toString().replaceAll(",", " "))
    }
}()
