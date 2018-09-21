const { maxSubSum, maxSubSum2, maxSubSum3, maxSubSum4 } = require('../src/5.最大子序列');
const expect = require('chai').expect;

/**
 * Test1 Result:
 *   maxNum: 2000
 *   ✓ 最大子序列和 穷举算法 => n3时间复杂度 Time: 1646ms
 *   ✓ 最大子序列和 穷举算法 => n3时间复杂度 Time: 6ms
 * 
 *   2 passing (2s)
 */

/**
 * Test2 Result:
 *   maxNum: 100000
 *   - 最大子序列和 穷举算法 => n3时间复杂度 Time: NA
 *   ✓ 最大子序列和 优化穷举算法 => n2时间复杂度 Time: 8855ms
 *   ✓ 最大子序列和 分治递归算法 => nlogn时间复杂度 Time: 18ms
 * 
 *   2 passing (9s)
 *   1 pending
 */

/**
 * Test3 Result:
 *   maxNum: 10000000
 *   - 最大子序列和 穷举算法 => O(n3)时间复杂度 Time: NA
 *   - 最大子序列和 优化穷举算法 => O(n2)时间复杂度 Time: NA
 *   ✓ 最大子序列和 分治递归算法 => O(nlogn)时间复杂度 Time: 1759ms
 *   ✓ 最大子序列和 线性算法 => O(n)时间复杂度 Time: 73ms
 * 
 *   2 passing (2s)
 *   2 pending
 */
describe('最大子序列和', () => {
    const maxNum = 10000000;
    const arr = [];
    before(() => {
        //  产生 maxNum 个 随机数 正数 > 负数
        for (let i = 0; i < maxNum; i++) {
            arr.push(Math.round(7000 - Math.random() * 10000));
        }
    });
    it.skip('穷举算法 => O(n3)时间复杂度 Time', () => {
        expect(maxSubSum(arr)).to.be.an('number');
    });
    it.skip('优化穷举算法 => O(n2)时间复杂度 Time', () => {
        expect(maxSubSum2(arr)).to.be.an('number');
    });
    it('分治递归算法 => O(nlogn)时间复杂度 Time', () => {
        expect(maxSubSum3(arr)).to.be.an('number');
    });
    it('线性算法 => O(n)时间复杂度 Time', () => {
        expect(maxSubSum4(arr)).to.be.an('number');
    });
});
