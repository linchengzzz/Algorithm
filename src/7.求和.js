// 线性阶求和
const sum1 = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// 常数阶求和
const sum2 = (start, end) => {
    return ((start + end) * (end - start + 1)) / 2;
};

module.exports = {
    sum1,
    sum2,
}
