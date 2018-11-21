/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // return haystack.indexOf(needle);
    if (needle === '') return 0;
    if (haystack === '' && needle) return -1;
    let H = haystack.length;
    let N = needle.length;
    let h = 0;
    let n = 0;
    while (h < H && n < N) {
        if (haystack[h] === needle[n]) {
            h++;
            n++;
        } else {
            h++;
            h -= n;
            n = 0;
        }
    }
    if (n === N) {
        return h - n;
    } else {
        return -1;
    }
};

console.log(strStr('mississippi', 'issip'));
