var obj = {
    english: [],
    num: [],
    space: [32]
}
var objForCount = {
    english: 0,
    space: 0,
    num: 0,
    other: 0
}
for (let i = 97; i<123; i++) {
    obj.english.push(i)
}
for (let i=48; i<= 57; i++) {
    obj.num.push(i)
}
var str = "1qazxsw23 edcvfr45tgbn hy67uj m,ki89ol.\\/;p0-=\\]["
str =  String.raw`${str}`
console.log(str)
var arr = str.split("")
for (let i in arr) {
    if (obj.english.indexOf(arr[i].charCodeAt()) !== -1) {
        objForCount.english++
    } else if (obj.num.indexOf(arr[i].charCodeAt()) !== -1) {
        objForCount.num++
    } else if (obj.space.indexOf(arr[i].charCodeAt()) !== -1) {
        objForCount.space++
    } else {
        objForCount.other++
    }
}
for (let val in objForCount) {
    console.log(objForCount[val])
}
// console.log(str.length)