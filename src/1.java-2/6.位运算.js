const swap = (x, y) => {
    y = x ^ y;
    x = x ^ y;
    y = x ^ y;
};

const arr_swap = (arr) => {
    // console.log(arr);
    for (let a = 0, b = arr.length - 1; a < b; a++, b--) {
        arr[b] = arr[a] ^ arr[b];
        arr[a] = arr[a] ^ arr[b];
        arr[b] = arr[a] ^ arr[b];
    }
    // console.log(arr);
};

module.exports = {
    arr_swap,
}