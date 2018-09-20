// 利用递归实现数组的全排列
const perm = (arr, start, end) => {
    start ? start : (start = 0);
    end ? end : (end = arr.length - 1);
    if (start === end) {
        console.log(arr);
    } else {
        for (let i = start; i <= end; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            perm(arr, start + 1, end);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
};
module.exports = {
    perm,
};
