const merge = (a, tmpArray, leftPos, rightPos, rightEnd) => {
    let leftEnd = rightPos - 1;
    let tmpPos = leftPos;
    let numElements = rightEnd - leftEnd + 1;
    while (leftPos <= leftEnd && rightPos <= rightEnd) {
        if (a[rightPos] >= a[leftPos]) {
            tmpArray[tmpPos++] = a[leftPos++];
        } else {
            tmpArray[tmpPos++] = a[rightPos++];
        }
    }
    while (leftPos <= leftEnd) {
        tmpArray[tmpPos++] = a[leftPos++];
    }
    while (rightPos <= rightEnd) {
        tmpArray[tmpPos++] = a[rightPos++];
    }
    for (let i = 0; i < numElements; i++, rightEnd--) {
        a[rightEnd] = tmpArray[rightEnd];
    }
};
const mergeSort = (a, tmpArray, left, right) => {
    if (left < right) {
        const center = parseInt((left + right) / 2);
        mergeSort(a, tmpArray, left, center);
        mergeSort(a, tmpArray, center + 1, right);
        merge(a, tmpArray, left, center + 1, right);
    }
};
const mergeStart = (a) => {
    mergeSort(a, [], 0, a.length - 1);
};

module.exports = {
    mergeStart,
};
