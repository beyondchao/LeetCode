// 识别有效的IP地址和掩码并进行分类统计

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

const ipReg = /^\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}$/;
function isPrivateIP(ip) {
  let flag = false;
  const arr = ip.split('.');
  const first = parseInt(arr[0]);
  const second = parseInt(arr[1]);
  if ((first === 10) || (first === 172 && (second >= 16 && second <= 31)) || (first === 192 && second === 168)) {
      flag = true;
  }
  return flag;
}
 
function checkSubnetMask(mask) {
  let isValid = true;
  const ipArr = mask.split('.');
  // check if ip contains '01';
  let binaryStr = '';
  ipArr.forEach((subnet) => {
      binaryStr += (parseInt(subnet) + 256).toString(2).substring(1); // 补零
  });
  if (binaryStr.indexOf('01') > -1) {
      isValid = false;
  } else if (binaryStr.indexOf('1') < 0 || binaryStr.indexOf('0') < 0) { // 全1，全零
      isValid = false;
  }
  return isValid;
}
 
const data = [];
let line = readline();
while(line) {
    const ipMask = line.split('~');
    data.push({
        ip: ipMask[0],
        mask: ipMask[1],
    });
    line = readline();
}
 
function ipTest() {
  const counter = { ipA: 0, ipB: 0, ipC: 0, ipD: 0, ipE: 0, ipMaskErr: 0, privateIp: 0 };
  data.forEach((item) => {
    const first = parseInt(item.ip.split('.')[0]);
      // 0.x.x.x || 127.x.x.x does not countable;
    if(first === 0 || first === 127) {
        // continue;
    } else if(!checkSubnetMask(item.mask)) {
        counter.ipMaskErr++;
    } else if (!ipReg.test(item.ip)) {
        counter.ipMaskErr++;
    } else {
        if (isPrivateIP(item.ip)) {
            counter.privateIp++;
        }
 
        if (first > 0 && first < 127) {
            counter.ipA++;
        } else if (first > 127 && first < 192) {
            counter.ipB++;
        } else if (first > 191 && first < 224) {
            counter.ipC++;
        } else if (first > 223 && first < 240) {
            counter.ipD++;
        } else if (first > 239 && first < 256) {
            counter.ipE++;
        }
    }
  });
  console.log(counter.ipA+" "+counter.ipB+" "+counter.ipC+" "+counter.ipD+" "+counter.ipE+" "+counter.ipMaskErr+" "+counter.privateIp);
}
 
ipTest();