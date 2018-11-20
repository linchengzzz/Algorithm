/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    if (s === t) return true;
    let ret = {};
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (ret[c]) {
            ret[c] += 1;
        } else {
            ret[c] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        let c = t[i];
        if (ret[c] !== undefined) {
            ret[c] -= 1;
        } else {
            return false;
        }
    }
    for (var k in ret) {
        if (ret[k] !== 0) return false;
    }
    return true;
    // return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram('anagram', 'nagaram'));
