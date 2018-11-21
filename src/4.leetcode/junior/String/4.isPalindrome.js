/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s === '') return true;
    s = s.toLocaleLowerCase();
    let s1 = '';
    let s2 = '';
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (/\w/.test(s[i])) {
            s1 += s[i];
        }
        if (/\w/.test(s[len - 1 - i])) {
            s2 += s[len - 1 - i];
        }
    }
    return s1 === s2;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
