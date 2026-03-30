//5键键盘的输出
// [5键键盘的输出]有一个特殊的5键键盘,上面有a,ctrl-c,ctrl-x,ctrl-v,ctrl-a五个键。a键在屏幕上输出一个字母a;
// ctrl-c将当前选择的字母复制到剪贴板
// ctrl-x将当前选择的字母复制到剪贴板，并清空选择的字母;
// ctril-v将当前剪贴板里的字母输出到屏幕
// ctrl-a选择当前屏幕上所有字母。
// 注意
// 1、剪贴板初始为空，新的内容被复制到剪贴板时会覆盖原来的内容
// 2、当屏幕上没有字母时，ctrl-a无效
// 3、当没有选择字母时,ctrl-c和ctrl-x无效
// 4、当有字母被选择时，a和ctrl-v这两个有输出功能的键会先清空选择的字母，再进行输出给定一系列键盘输入，输出最终屏幕上字母的数量。
// 输入描述:
// 输入为一行，为简化解析，用数字12345代表a,ctrl-c,ctrl-x,ctrl-v,ctrl-a五个键的输入，数字用空格分隔
// 输出描述
// 输出一个数字，为最终屏目上字母的数量。
// 示例:
// 输入
// 111
// 输出
// 3
let fs = require("fs")
let text = fs.readFileSync(0,"utf8").trim();

if (!text) process.exit();
const lines = text.split(/\r?\n/);
let input = lines[0];
let selected = "";
let copy = "";
let output = ""
for (let char of input) {
    switch (char) {
        case "1":
            if (selected) {
                output = ""
            }
            output += "a";
            selected = "";
            break;
        case "2": //ctrl c
            if (selected) {
                copy = selected;
            }
            break;
        case "3": //ctrl x
            if (selected) {
                copy = selected;
                output = "";
            }
            break;
        case "4": //ctrl v
            if (selected) {
                output = ""
            }
            output += copy;
            selected = "";
            break; 
        case "5": // ctrl a
            selected = output;
            break;
        default:

    }
}
console.log(output.length)

