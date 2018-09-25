const { gcd } = require('../../src/1.java-2/9.最大公因数');
const expect = require('chai').expect;

/**
 * Test Result:
 *   随机数字为: 6056628472, 4041137842
 *   最大公因数为: 2
 *   ✓ 最大公因数 欧几里得算法 => O(logN)时间复杂度 Time: 1ms
 * 
 *   2 passing (2s)
 */

describe('最大公因数', () => {
    let maxNum = 0,
        result = 0,
        num1 = 0,
        num2 = 0;
    before(() => {
        maxNum = 10000000000;
        // 生成随机的数字
        num1 = Math.round(Math.random() * maxNum);
        num2 = Math.round(Math.random() * maxNum);
        result = gcd(num1, num2);
        console.log(`随机数字为: ${num1}, ${num2}`);
        console.log(`最大公因数为: ${result}`);
    });
    it('欧几里得算法 => O(logN)时间复杂度 Time', () => {
        expect(gcd(num1, num2)).to.be.equal(result);
    })
});