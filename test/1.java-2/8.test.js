const { search1, search2 } = require('../../src/1.java-2/8.折半查找');
const expect = require('chai').expect;

/**
 * Test Result:
 *   maxNum: 70000000
 *   ✓ 顺序查找算法 线性算法 => O(N)时间复杂度 Time: 43ms
 *   ✓ 顺序查找算法 折半算法 => O(logN)时间复杂度 Time: 0ms
 * 
 *   2 passing (2s)
 */

describe('顺序查找算法', () => {
    let maxNum = 0;
    let x = 0;
    let arr = [];
    let result = 0;
    before(() => {
        maxNum = 70000000;
        // 生成连续的数字
        for (let i = 0; i < maxNum; i++) {
            arr.push(i);
        }
        // 产生随机位置
        x = arr[Math.round(Math.random() * maxNum)];
        result = arr[x];
    });
    it('线性算法 => O(N)时间复杂度 Time', () => {
        expect(search1(result, arr)).to.be.equal(x);
    })
    it('折半算法 => O(logN)时间复杂度 Time', () => {
        expect(search2(result, arr)).to.be.equal(x);
    })
});