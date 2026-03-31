//手写防抖和节流

//防抖debouns
function debnouns (callback, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this,args)
        },delay)
    }
}
//节流throllle
function throlle (callback, delay) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}