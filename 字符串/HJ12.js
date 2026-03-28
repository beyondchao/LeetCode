// 在字符串中找出连续最长的数字串
//1hour
var str = "ass" + "abcd12345ed125ss123058789"
var arr = str.split("");
var arr2 = []
var j = 0;
for (let i = 0; i< arr.length; i++) {
    if (!isNaN(Number(arr[i])) ) {
        if (isNaN(Number(arr[i - 1]))) {
            arr2.push([i, 1])
            j++
        } else {
            arr2[j - 1][1]++
        }
    } 
}
let arr3 = arr2.reduce((acc, item) => {
    
    acc.push(item[1])
    return acc
}, [])
let max = Math.max(...arr3)
let outStr = []
arr2.forEach((item) => {
    if (item[1] == max) {
        for (let i = 0; i < max; i++) {
            outStr.push(arr[item[0] + i])
        }
    }
})
console.log(outStr.join("") + "," + max)

// 方法2 使用正则匹配
let reg = new RegExp(/[a-z]/, "g")
let str = line.replace(reg, " ");
let arr = str.split(" ");
let maxLenStr = ""
let maxLen = 0
arr.forEach((item) => {
    if (item.length > maxLen) {
        maxLenStr = item;
        maxLen = item.length
    } else if (item.length == maxLen) {
        maxLenStr += item
    }
})
console.log(maxLenStr+ "," + maxLen)