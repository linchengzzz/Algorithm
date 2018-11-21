const shellSort = (arr) => {
    let j;
    for (let gap = arr.length / 2; gap > 0; gap = parseInt(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            const tmp = arr[i];
            for (j = i; j >= gap && arr[j - gap] > tmp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = tmp;
        }
    }
};
// test
module.exports = {
    shellSort,
};
