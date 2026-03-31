//乱序整数序列两数之和绝对值最小

// 28:20.16

// 题目描述
// 给定一个随机的整数(可能存在正整数和负整数)数组nums，请你在该数组中找出两个数，其和的绝对值(nums[x]+nums[y])为最小值，并返回这个两个数(按从小到大返回)以及
// 绝对值。
// 每种输入只会对应一个答案
// 但是，数组中同一个元素不能使用两遍。
// 输入描述
// 个通过空格分割的有序整数席列字符串，最多1000个整数，目整数数值范围是
// [-65535,65535].
// 输出描述
// 两数之和绝对值最小值
// 用例
// 输入
// -1 -3 7 5 11 15
// 输出
// -3 5 2

let fs = require("fs")
let text = fs.readFileSync(0, "utf8").trim();

if (!text) process.exit();
let lines = text.split(/\r?\n/)
let arr = lines[0].trim().split(/\s+/);
arr = arr.map(item => Number(item));

let min = Number.MAX_VALUE;
let num1 = 0, num2 = 0;

//方法一：双重循环暴力破解

// if (arr.length == 2) {
//     const first = arr[0] > arr[1] ? arr[1] : arr[0]
//     const second = arr[0] > arr[1] ? arr[0] : arr[1]
//     console.log(first + " " + second + " " + Math.abs(arr[0] + arr[1]))
// } else {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i+1; j < arr.length;j++ ) {
//             //min = Math.min(Math.abs(arr[i] + arr[j]), min);
         
//             if (Math.abs(arr[i] + arr[j]) < min) {
//                 num1 = arr[i] > arr[j] ? arr[j] : arr[i]
//                 num2 = arr[i] > arr[j] ? arr[i] : arr[j]
//                 min = Math.abs(arr[i] + arr[j])
//             }
          
//         }
//     }
//     console.log(num1 + " " + num2 + " " + min);
// }

// 方法二：排序后双指针
arr.sort((a, b) => a - b)

let i = 0, j = arr.length - 1

while (i < j) {
  const sum = arr[i] + arr[j]
  if (Math.abs(sum) < min) {
    min = Math.abs(sum)
    num1 = arr[i]
    num2 = arr[j]
  }
  if (sum === 0) break
  else if (sum > 0) j--
  else i++
}

console.log(num1 + " " + num2 + " " + min)

