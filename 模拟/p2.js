// 统计射击比赛成绩
// 给定一个射击比赛成绩单，包含多个选手若干次射击的成绩分数，请对每个选手按其最高3个分数之和进行降序排名，输出降序排名后的选手ID序列。
// 输入
// 13
// 3,3,7,4,4,4,4,7,7,3,5,5,5
// 53,80,68,24,39,76,66,16,100,55,53,80,55
// 输出
// 5,3,7,4

const fs = require("fs");
const text = fs.readFileSync(0, "utf8").trim();

if (!text) process.exit(0);

const lines = text.split(/\r?\n/);
let ids = lines[1].split(",")
let grades = lines[2].split(",")
let recodes = {}
let arr = [];
let finalArr = [];
for (let i=0; i<ids.length; i++) {
    if (!recodes[Number(ids[i])]) {
        recodes[Number(ids[i])] = [parseInt(grades[i])]
    } else {
        recodes[(ids[i])].push(parseInt(grades[i]))
    }
}

for (let key in recodes) {
    recodes[key].sort((a,b) => b-a)

    arr.push(recodes[key][0] + recodes[key][1] + recodes[key][2] + key / 100)
}

arr.sort((a, b) => b - a)
console.log(arr)
finalArr = arr.map(item => {
    return Math.round((item - parseInt(item)) * 100)
})
console.log(finalArr.toString().replaceAll(",", " "))

 13
 3,3,7,4,4,4,4,7,7,3,5,5,5
 53,80,68,24,39,76,66,16,100,55,53,80,55