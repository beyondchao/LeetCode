//考勤信息

// 题目描述
// 公司用一个字符串来表示员工的出勤信息。
// absent:缺勤
// late:迟到
// leaveearly:早退
// present:正常上班
// 现需根据员工出勤信息，判断本次是否能获得出勤奖，能获得出勤奖的条件如下:
// ，缺勤不超过一次
// 没有连续的迟到/早退，
// 任意连续7次考勤，缺勤/迟到/早退不超过3次
// 输入描述
// 用户的考勤数据字符串
// 记录条数>=1;
// 输入字符串长度<10000:
// 不存在非法输入;
// 如:
// present
// present absent present present leaveearly present absent
// 输出描述
// 根据考勤数据字符串，如果能得到考勤奖，输出”true”;否则输出”false”对于输入示例结果应为:
// true或者false

let fs = require("fs");
let text = fs.readFileSync(0, "utf8").trim();

if (!text) process.exit();
let lines = text.split(/\r?\n/)
lines.forEach(str => {
  
    let absent = 0;
    let window = [];
    let badCount = 0;

    

    let arr = str.split(" ");
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === "absent") {
            absent++;
            if (absent > 1) {
                console.log(false);
                return
            }
        } else if (arr[i] == "late" || arr[i] == "leaveearly") {
            if (arr[i+1]) {
                if (arr[i+1] == "late" || arr[i+1] == "leaveearly") {
                    console.log(false);
                    return
                }
            }
        }

        let bad = arr[i] == "late" || arr[i] == "leaveearly" || arr[i] == "absent"
        window.push(bad);
        if (bad) {
            badCount++;
        }
        if (window.length > 7) {
            let del = window.shift();
            if (del) badCount--;
        }
        if (badCount > 3) {
            console.log(false)
            return
        } 
  

    }
    console.log(true)
}) 