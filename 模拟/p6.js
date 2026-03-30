//数列描述

//36:26.35

// 有一个数列a[N](N=60)，从a[0]开始，每一项都是一个数字。数列中a[n+1]都是a[n]的描述。其中a[0]=1。规则如下:
// a[0]:1
// a[1]:11(含义:其前一项a[0]=1是1个1,即“11”。表示a[0]从左到右，连续出现了1次“1”)a[2]:21(含义:其前一项a[1]=11，从左到右:是由两个1组成，即"21°。表示a[1]从左到右，连续出现了两次"1")a[3]:1211(含义:其前一项a[2]=21，从左到右:是由一个2和一个1组成，即“1211”。表示a[2]从左到右，连续出现了1次“2”，然后又连续出现了1次“1")
// a[4]:111221(含义:其前一项a13]=1211,从左到右:是由一个1、一个2、两个1组成，即"111221°。表示a(31从左到右，连续出现了1次“1"，连续出现了1次“2”，连续出现了两次“1")请输出这个数列的第n项结果(a[n]，0≤n≤59)
// 输入描述
// 数列的第n项(0≤n≤59)
// 4
// 输出描述
// 数列的内容
// 111221
let fs = require("fs");
let text = fs.readFileSync(0, "utf8").trim();

if(!text) process.exit();

let lines = text.split(/\r?\n/);
let num = parseInt(lines[0]);
function readArr(n) {
    if (n == 0) {
        return 1
    } else if (n == 1) {
        return 11
    }else {
        let arr = readArr(n-1).toString().split("");
        let newArr = []
        
        for (let i=0; i<arr.length; i++) {
            newArr.push(arr[i])
            if (arr[i+1] && arr[i] !== arr[i+1] ) {
                newArr.push("|")
            }
        }
    
        return newArr.join("").split("|").reduce((acc, item) => acc + item.length + item[0], "")
        //return readArr()
    }
}
console.log(readArr(num))