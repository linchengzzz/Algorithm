// 穷举法求最大子序列和 n3算法
const maxSubSum = (arr) => {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let curSum = 0;
            for (let k = i; k <= j; k++) {
                curSum += arr[k];
            }
            if (curSum > maxSum) {
                maxSum = curSum;
            }
        }
    }
    return maxSum;
};

// 优化后的迭代求最大子序列和--n2算法
const maxSubSum2 = (arr) => {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let curSum = 0;
        for (let j = i; j < arr.length; j++) {
            curSum += arr[j];
            if (curSum > maxSum) {
                maxSum = curSum;
            }
        }
    }
    return maxSum;
};

// 分治法求最大子序列和--NlogN算法
const maxSubSum3 = (arr, left, right) => {
    // 初始化递归变量
    left === undefined ? (left = 0) : left;
    right === undefined ? (right = arr.length - 1) : right;
    if (left >= right) {
        return arr[left] > 0 ? arr[left] : 0;
    }
    // 分治递归
    const center = parseInt((left + right) / 2);
    const leftMaxSum = maxSubSum3(arr, left, center);
    const rightMaxSum = maxSubSum3(arr, center + 1, right);

    // 求左序列最大值
    let leftBorderSum = 0;
    let leftBorderMaxSum = 0;
    for (let i = center; i >= left; i--) {
        leftBorderSum += arr[i];
        if (leftBorderSum > leftBorderMaxSum) {
            leftBorderMaxSum = leftBorderSum;
        }
    }
    // 求右序列最大值
    let rightBorderSum = 0;
    let rightBorderMaxSum = 0;
    for (let i = center + 1; i <= right; i++) {
        rightBorderSum += arr[i];
        if (rightBorderSum > rightBorderMaxSum) {
            rightBorderMaxSum = rightBorderSum;
        }
    }
    // 返回左序列 或 右序列 或 连续序列 的 最大值
    return Math.max(leftMaxSum, rightMaxSum, leftBorderMaxSum + rightBorderMaxSum);
};
const maxSubSum4 = (arr) => {
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > maxSum) {
            maxSum = sum;
        } else if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};

module.exports = {
    maxSubSum,
    maxSubSum2,
    maxSubSum3,
    maxSubSum4,
};
