const leftChild = (i) => 2 * i + 1;
const percDown = (a, i, n) => {
    let child;
    let tmp;
    for (tmp = a[i]; leftChild(i) < n; i = child) {
        child = leftChild(i);
        if (child != n - 1 && a[child + 1] > a[child]) {
            child++;
        }
        if (a[child] > tmp) {
            a[i] = a[child];
        } else {
            break;
        }
    }
    a[i] = tmp;
};
const heapSort = (a) => {
    for (let i = parseInt(a.length / 2 - 1); i >= 0; i--) {
        percDown(a, i, a.length);
    }
    for (let i = a.length - 1; i > 0; i--) {
        [a[0], a[i]] = [a[i], a[0]];
        percDown(a, 0, i);
    }
};

module.exports = {
    heapSort,
};
