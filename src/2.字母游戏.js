// 定义字典模板
const arr = [
    ['t', 'h', 'i', 's'],
    ['w', 'a', 't', 's'],
    ['o', 'a', 'h', 'g'],
    ['f', 'g', 'd', 't']
];
// 定义单词
const strArr = ['this', 'two', 'fat', 'that'];

const searchString = (arr, strArr) => {
    const strs = [];
    strArr.forEach(item => {
        strs.push(item.split(''));
    });
    const result = (strs.map(item => {
        // console.log(item);
        return findString(arr, item);
    }))
    return result;
}
const findString = (arr,str) => {
    const w = arr[0].length;
    const h = arr.length;
    const bw = Math.sqrt(w * w + h * h);
    const sw = str.length;
    if(sw > bw) {
        return 'to lang';
    }
    for (let i = 0; i < w; i++) {
        for(let j = 0; j < h; j++) {
            debugger;
            // 右
            if(i + sw <= w) {
                for(var k = 0; k < sw; k++) {
                    if(str[k] === arr[i+k][j]) {
                        // console.log(str[k], arr[i+k][j]);
                        continue;
                    } else {
                        break;
                    }
                }
                if(k >= sw ) {
                    return `${i},${j}-${i + sw},${j}`;
                }
            }
            // 下
            if(j + sw <= h) {
                for(var k = 0; k < sw; k++) {
                    if(str[k] === arr[i][j+k]) {
                        console.log(str[k], arr[i][j + k]);
                        continue;
                    } else {
                        break;
                    }
                }
                if(k >= sw) {
                    return `${i},${j}-${i},${j + sw}`;
                }
            }
            // 左
            if(i - sw >= 0) {
                for(var k = 0; k < sw; k++) {
                    if(str[k] === arr[i-k][j]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if(k >= sw) {
                    return `${i},${j}-${i - sw},${j}`;
                }
            }
            // 上
            if(j - sw >= 0) {
                for(var k = 0; k < sw; k++) {
                    if(str[k] === arr[i][j-k]) {
                        continue;
                    } else {
                        break;
                    }
                }
                if(k >= sw) {
                    return `${i},${j}-${i},${j-sw}`;
                }
            }
            // 右下
            // 左下
            // 右上
            // 坐上
        }
    }
    return 'not find';
}

console.log(searchString(arr, strArr));
