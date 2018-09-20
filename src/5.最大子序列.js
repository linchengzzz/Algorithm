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
console.log(maxSubSum([-2, 11, -4, 13, -5, -2]));
