const swap = (x, y) => {
    y = x ^ y;
    x = x ^ y;
    y = x ^ y;
};

const arr_swap = (arr) => {
    for (let first = 0, last = arr.length - 1; first < last; first++, last--) {
        arr[last] = arr[first] ^ arr[last];
        arr[first] = arr[first] ^ arr[last];
        arr[last] = arr[first] ^ arr[last];
    }
};

const arr = [1,2,3,4,5];
arr_swap(arr);
console.log(arr);