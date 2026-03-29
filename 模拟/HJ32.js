//37:13.18
// 描述
// 你需要书写一个程序验证给定的密码是否合格。
// 合格的密码要求:
// 长度不少于8位
// 必须包含大写字母、小写字母、数字、特殊字符中的至少三种
// ·不能分割出两个独立的、长度大于2的连续子里，使得这两个子串完全相同;更具体地，如果存在两个长度大于2的独立子串81,89，使得81二82，那么密码不合法.
// 子串为从原字符串中，连续的选择一段字符(可以全选、可以不选)得到的新字符串。
const fs = require("fs");

const data = fs.readFileSync(0, "utf8");
if (!data) process.exit(0);

const lines = data.split(/\r?\n/);

for (const line of lines) {
    if (line === "") continue; // 牛客一般可跳过空行
    console.log(solve(line));
}

function solve(s) {
    // TODO: 在这里写 HJ32 逻辑，返回结果（数字）

    return s.length >= 8 && condition1(s) && condition2(s) ? "OK" : "NG";
}
function condition1 (str) {
    //条件2：必须包含大写字母、小写字母、数字、特殊字符中的至少三种
    let count = 0;
    if (/[0-9]/g.test(str)) {
        count++
    }
    if (/[a-z]/g.test(str)) {
        count++;
    }
    if (/[A_Z]/g.test(str)) {
        count++;
    }
    if (/[^0-9a-zA-Z]/g.test(str)) {
         count++;
    }
    if (count >= 3) {
        return true
    } else {
        return false
    }
}

function condition2(str) {
    //条件3：不能分割出两个独立的、长度大于 的连续子串，使得这两个子串完全相同
  
    for (let i=0; i<str.length - 2; i++) {
        for (let j = i+2; j < i+5 / 2; j++) {
            if (str.slice(j).includes(str.slice(i, j+1))) {
                return false;
            }
        }
    }
    return true;
}