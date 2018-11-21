/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = parseInt(str) || 0;
    // num = num < -2147483648 ? -2147483648 : num;
    // num = num > 2147483647 ? 2147483647 : num;
    return num < -2147483648 ? -2147483648: (num > 2147483647 ? 2147483647 : num);
};
console.log(myAtoi('4193 with words'));
