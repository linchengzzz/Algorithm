
const searchString = (arr, strArr) => {
    const strs = [];
    strArr.forEach((item) => {
        strs.push(item.split(''));
    });
    const result = strs.map((item) => {
        // console.log(item);
        return findString(arr, item);
    });
    return result;
};
const findString = (arr, str) => {
    const w = arr[0].length;
    const h = arr.length;
    const bw = Math.sqrt(w * w + h * h);
    const sw = str.length;
    if (sw > bw) {
        return 'to lang';
    }
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            // 右
            if (i + sw <= w) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i + k][j]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x + (sw - 1)},${y})`;
                }
            }
            // 下
            if (j + sw <= h) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i][j + k]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x},${y + (sw - 1)}})`;
                }
            }
            // 左
            if (i - sw >= -1) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i - k][j]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x - (sw - 1)},${y}})`;
                }
            }
            // 上
            if (j - sw >= -1) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i][j - k]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x},${y - (sw - 1)}})`;
                }
            }
            // 右下
            if (i + sw <= w && j + sw <= w) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i + k][j + k]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x + (sw - 1)},${y + (sw - 1)}})`;
                }
            }
            // 左下
            if (i - sw >= -1 && j + sw <= w) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i - k][j + k]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x - (sw - 1)},${y + (sw - 1)}})`;
                }
            }
            // 右上
            if (i + sw <= w && j - sw >= -1) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i + k][j - k]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x + (sw - 1)},${y - (sw - 1)}})`;
                }
            }
            // 左上
            if (i - sw >= -1 && j - sw >= -1) {
                for (var k = 0; k < sw; k++) {
                    if (str[k] === arr[i - k][j - k]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if (k >= sw) {
                    const x = i + 1;
                    const y = j + 1;
                    return `x1y1: (${x},${y}) - x2y2: (${x - (sw - 1)},${y - (sw - 1)}})`;
                }
            }
        }
    }
    return 'not find';
};

module.exports = {
    searchString,
}