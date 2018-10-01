const insertSort = (arr) => {
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        const tmp = arr[i];
        for (j = i; j > 0 && arr[j - 1] > tmp; j--) {
            arr[j] = arr[j- 1];
        }
        arr[j] = tmp;
    }
};

module.exports =  {
    insertSort,
}