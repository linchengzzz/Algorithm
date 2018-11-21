/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let temp = {};
    for (let i = 0; i < s.length; i++) {
        if (temp[s[i]]) {
            temp[s[i]] = 2;
        } else {
            temp[s[i]] = 1;
        }
    }
    for (let key in temp) {
        if (temp[key] === 1) {
            return s.indexOf(key);
        }
    }
    return -1;
};
console.log(firstUniqChar("aadadaad"));
