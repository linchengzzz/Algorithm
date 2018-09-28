const { arr_swap } = require('../../src/1.java-2/6.位运算');
const expect = require('chai').expect;

/**
 * Test Result:
 *   num: 10000000
 *   ✓ 位运算测试 字符串反转 Time: 27ms
 * 
 *   1 passing (531ms)
 */

describe('位运算测试', () => {
    let arr = [];
    let num = 10000000;
    before(() => {
        for (let i = 0; i < num; i++) {
            arr.push(Math.round(Math.random() * num));
        }
    });
    it('字符串反转 Time', () => {
        expect(arr_swap(arr));
    });
});