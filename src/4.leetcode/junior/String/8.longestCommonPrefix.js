/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let str = '';
    for (let i = 0;i<strs[0].length;i++) {
        for (let j =0;j<strs.length;j++) {
            if (strs[j][i] !== strs[0][i]) return str;
        }
        str += strs[0][i];
    }
    return str;
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
