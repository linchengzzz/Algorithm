/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('')
};
console.log(reverseString('A man, a plan, a canal: Panama'));
