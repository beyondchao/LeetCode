// 找出字符串中第一个只出现一次的字符
//
var str = "asdfasdfo"
let arr = str.split("")
let obj = {}
var hasOne = false
for (let i=0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
        obj[arr[i]] = 1
    } else {
        obj[arr[i]]++
    }
}
for (let val in obj) {
    if (obj[val] == 1) {
        console.log(val)
        hasOne = true
        return
    }
}
if (!hasOne) {
    console.log(-1)
}