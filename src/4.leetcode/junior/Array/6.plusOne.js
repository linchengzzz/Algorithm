/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1] += 1;
        return digits;
    }
    let len = digits.length - 1;
    while (len >= 0 && digits[len] === 9) {
        digits[len] = 0;
        len--;
    }
    len >= 0 ? (digits[len] += 1) : digits.unshift(1);
    return digits;
};

console.log(plusOne([1, 9, 9]));
