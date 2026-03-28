const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let reg = await readline();
    let s = await readline();

    s = s.toLowerCase();
    reg = reg.replace(/\?/g, '[0-9a-z]').replace(/\*/g, '[0-9a-z]{0,}').toLowerCase();

    const r = new RegExp(`${reg}`);

    // const res = s.match(r);

    const res = s.match(r);

    if (res === null) {
        console.log(false);
        return;
    }
    if (res[0] === s) {
        console.log(true);
        return;
    }
    console.log(false);
})();
