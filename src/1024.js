/**
 * 遍历路线方法
 * n*n大小的矩阵
 * 绕开点P找到一条线的路径链接其他点
 * @Atuh: linchengzzz
 * @Time: 2018.10.24
 *
 */

// 输入 n * n 的矩阵 点P的位置
const n = 5;
const p = [4, 2];

// 初始化矩阵数组
const matrix = [];
const useMatrix = [];
for (var i = 0; i < n; i++) {
    matrix[i] = [];
    for (var j = 0; j < n; j++) {
        matrix[i][j] = [i + 1, j + 1];
    }
}

function initUseMatrix() {
    for (var i = 0; i < n; i++) {
        useMatrix[i] = [];
        for (var j = 0; j < n; j++) {
            useMatrix[i][j] = 0;
        }
    }
}
// 取出矩阵的边缘点
const slides = [];
for (var i = 1; i <= n; i++) {
    slides.push([1, i]);
    slides.push([n, i]);
}
for (var i = 2; i < n; i++) {
    slides.push([i, 1]);
    slides.push([i, n]);
}

// 是否可执行下一步
function nextStep(x, y) {
    x = x - 1;
    y = y - 1;
    // 存在 [x, y] 并且 [x, y]尚未走过
    if (matrix[x] && matrix[x][y] && useMatrix[x][y] !== 1) {
        // 当前是否为点P
        if (matrix[x][y][0] !== p[0] || matrix[x][y][1] !== p[1]) {
            return true;
        }
    }
    return false;
}

// 执行递归进行下一步
let steps = [];

function next(x, y) {
    // 当前点是否可以行走
    // 右
    if (nextStep(x, y + 1)) {
        y = y + 1;
        useMatrix[x - 1][y - 1] = 1;
        steps.push([x, y]);
        next(x, y);
        steps.pop();
        useMatrix[x - 1][y - 1] = 0;
        y = y - 1;
    }
    // 下
    if (nextStep(x + 1, y)) {
        x = x + 1;
        useMatrix[x - 1][y - 1] = 1;
        steps.push([x, y]);
        next(x, y);
        steps.pop();
        useMatrix[x - 1][y - 1] = 0;
        x = x - 1;
    }
    // 左
    if (nextStep(x, y - 1)) {
        y = y - 1;
        useMatrix[x - 1][y - 1] = 1;
        steps.push([x, y]);
        next(x, y);
        steps.pop();
        useMatrix[x - 1][y - 1] = 0;
        y = y + 1;
    }
    // 上
    if (nextStep(x - 1, y)) {
        x = x - 1;
        useMatrix[x - 1][y - 1] = 1;
        steps.push([x, y]);
        next(x, y);
        steps.pop();
        useMatrix[x - 1][y - 1] = 0;
        x = x + 1;
    }
    // 一条路径尝试完毕
    let result = `(${steps[0][0]}, ${steps[0][1]})`;
    let step = 1;
    for (var i = 1; i < steps.length; i++) {
        step++;
        result += ` -> (${steps[i][0]}, ${steps[i][1]})`;
    }

    if (step < n * n - 1) {
        result = '第' + count + '条路径：' + '并未找到！已走步数:' + steps.length + ' 当前路径：' + result;
    } else {
        count++;
        start = false;
        result =
            '第' + count + '条路径：' + '哈哈哈哈哈哈昂，找到啦！已走步数:' + steps.length + ' 当前路径：' + result;
        console.log(result);
        console.log('\n');
    }
}
let count = 0;
let start = false;
// 游戏开始
function _main() {
    console.log(`--- 您输入的矩阵大小为 ${n} * ${n}, 点P坐标为(${p[0]}, ${p[1]}) ---`);
    console.log('\n');
    console.log('--- 开始寻找 ---');
    console.log('\n');
    start = true;
    for (var i = 0; i < slides.length; i++) {
        const x = slides[i][0];
        const y = slides[i][1];
        if (x === p[0] && y === p[1]) continue;
        initUseMatrix();
        useMatrix[x - 1][y - 1] = 1;
        steps.push([x, y]);
        next(x, y);
        steps = [];
    }
    if (start) {
        console.log('--- 暂未找到 ---');
    } else {
        console.log(`--- 共找到 ${count} 条路径 ---`);
    }
}

_main();
