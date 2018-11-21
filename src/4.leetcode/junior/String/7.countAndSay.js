/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';
    if (n === 2) return '11';
    let pre = '11';
    let ret = '';
    for (let i = 3; i <= n; i++) {
        let count = 1;
        ret = '';
        for (let j = 0; j < pre.length; j++) {
            if (pre[j] === pre[j + 1]) {
                count ++;
            } else {
                ret += count;
                ret += pre[j];
                count = 1;
            }
        }
        pre = ret;
    }
    return ret
};

console.log(countAndSay(30));
