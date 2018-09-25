// 线性查找
const search1 = (x, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            return i;
        }
    }
    return -1;
};

// 折半查找
const search2 = (x, arr) => {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        const mid = parseInt((low + high) / 2);
        if (x > arr[mid]) low = mid + 1;
        else if (x < arr[mid]) high = mid - 1;
        else return mid;
    }
    return -1;
};

module.exports = {
    search1,
    search2,
};
