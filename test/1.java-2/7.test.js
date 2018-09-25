const { sum1, sum2 } = require('../../src/1.java-2/7.求和');
const expect = require('chai').expect;

/**
 * Test Result:
 *   start: 1
 *   end: 100000000
 *   ✓ 求和算法 线性算法 => O(n)时间复杂度 Time: 121ms
 *   ✓ 求和算法 常数算法 => O(1)时间复杂度 Time: 1ms
 * 
 *   2 passing (127ms)
 */

describe('求和算法', () => {
    let start = 0;
    let end = 0;
    let result = 0;
    before(() => {
        start = 1;
        end = 100000000;
        result = sum2(start, end);
    });
    it('线性算法 => O(n)时间复杂度 Time', () => {
        expect(sum1(start, end)).to.be.equal(result);
    });
    it('常数算法 => O(1)时间复杂度 Time', () => {
        expect(sum2(start, end)).to.be.equal(result);
    })
});
