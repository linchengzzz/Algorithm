// Reverse Integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x = 0) {
    const arr = x.toString().split('')
    let a = ''
    if (arr.length && arr[0] === '-') {
        a = arr.shift()
    }
    arr.reverse()
    let n = parseInt(a + arr.join(''))
    if (n >= Math.pow(2,31) - 1 || n <= Math.pow(-2,31)) return 0
    return n
}