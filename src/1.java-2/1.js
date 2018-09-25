// 算法时间
// 100000个数中第50000个应该为50080
// ✓ V8 sort 排序 (53ms)
// ✓ 冒泡排序 (22132ms)
// ✓ 推入K (10788ms)

// 找出随机数组中第K个大的值
const findKMaxSort = (arr, k) => arr.sort((a, b) => b - a)[k - 1];
// 冒泡排序
const findKMaxM = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const c = arr[i];
                arr[i] = arr[j];
                arr[j] = arr[i];
            }
        }
    }
    return arr[k - 1];
};
// 推入k查找
const findKMaxK = (arr, k) => {
    const curArr = [];
    // 找出前K个值
    for (let i = 0; i < k; i++) {
        curArr[i] = arr[i];
    }
    // 对前K个进行排序
    for (let i = 0; i < curArr.length; i++) {
        for (let j = i; j < curArr.length; j++) {
            if (curArr[i] < curArr[j]) {
                const c = curArr[i];
                curArr[i] = curArr[j];
                curArr[j] = curArr[i];
            }
        }
    }
    // 剩余的与K比较 小的跳过 大的插入
    for (let i = k; i < arr.length; i++) {
        for (let j = 0; j < k; j++) {
            if (arr[i] > curArr[j]) {
                const a = j;
                while (j < k) {
                    curArr[j + 1] = curArr[j];
                    j++;
                }
                curArr[a] = arr[i]
            } else {
                continue;
            }
        }
    }
    return arr[k - 1];
};
module.exports = {
    findKMaxSort,
    findKMaxM,
    findKMaxK
};
