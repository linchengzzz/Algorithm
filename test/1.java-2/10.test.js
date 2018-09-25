const { for1, for2, for3, for4, for5, for6 } = require('../../src/1.java-2/10.for');
const expect = require('chai').expect;

/**
 * Test1 Result:
 *   num: 150
 *   ✓ for 循环测试 for1: 时间复杂度 Time: 1ms
 *   ✓ for 循环测试 for2: 时间复杂度 Time: 1ms
 *   ✓ for 循环测试 for3: 时间复杂度 Time: 7ms
 *   ✓ for 循环测试 for4: 时间复杂度 Time: 0ms
 *   ✓ for 循环测试 for5: 时间复杂度 Time: 8295ms
 *   ✓ for 循环测试 for6: 时间复杂度 Time: 71ms
 * 
 *   6 passing (920ms)
 */

/**
 * Test2 Result:
 *   num: 500
 *   ✓ for 循环测试 for1: 时间复杂度 Time: 1ms
 *   ✓ for 循环测试 for2: 时间复杂度 Time: 2ms
 *   ✓ for 循环测试 for3: 时间复杂度 Time: 121ms
 *   ✓ for 循环测试 for4: 时间复杂度 Time: 1ms
 *   - for 循环测试 for5: 时间复杂度 Time: NA
 *   ✓ for 循环测试 for6: 时间复杂度 Time: 9023ms
 * 
 *   5 passing (9s)
 *   1 pending
 */

/**
 * Test3 Result:
 *   num: 1000
 *   ✓ for 循环测试 for1: 时间复杂度 Time: 2ms
 *   ✓ for 循环测试 for2: 时间复杂度 Time: 3ms
 *   ✓ for 循环测试 for3: 时间复杂度 Time: 958ms
 *   ✓ for 循环测试 for4: 时间复杂度 Time: 2ms
 *   - for 循环测试 for5: 时间复杂度 Time: NA
 *   - for 循环测试 for6: 时间复杂度 Time: NA
 * 
 *   4 passing (971ms)
 *   2 pending
 */

/**
 * Test4 Result:
 *   num: 50000
 *   ✓ for 循环测试 for1: 时间复杂度 Time: 1ms
 *   ✓ for 循环测试 for2: 时间复杂度 Time: 2480ms
 *   - for 循环测试 for3: 时间复杂度 Time: NA
 *   ✓ for 循环测试 for4: 时间复杂度 Time: 1482ms
 *   - for 循环测试 for5: 时间复杂度 Time: NA
 *   - for 循环测试 for6: 时间复杂度 Time: NA
 * 
 *   3 passing (4s)
 *   3 pending
 */
/**
 * Test4 Result:
 *   num: 1000000
 *   ✓ for 循环测试 for1: 时间复杂度 Time: 3ms
 *   - for 循环测试 for2: 时间复杂度 Time: NA
 *   - for 循环测试 for3: 时间复杂度 Time: NA
 *   - for 循环测试 for4: 时间复杂度 Time: NA
 *   - for 循环测试 for5: 时间复杂度 Time: NA
 *   - for 循环测试 for6: 时间复杂度 Time: NA
 * 
 *   1 passing (8ms)
 *   5 pending
 */
describe('for 循环测试', () => {
    let num = 0;
    before(() => {
        num = 1000000;
    });
    it('for1: 时间复杂度 Time', () => {
        expect(for1(num)).to.be.an('number');
    });
    it.skip('for2: 时间复杂度 Time', () => {
        expect(for2(num)).to.be.an('number');
    });
    it.skip('for3: 时间复杂度 Time', () => {
        expect(for3(num)).to.be.an('number');
    });
    it.skip('for4: 时间复杂度 Time', () => {
        expect(for4(num)).to.be.an('number');
    });
    it.skip('for5: 时间复杂度 Time', () => {
        expect(for5(num)).to.be.an('number');
    });
    it.skip('for6: 时间复杂度 Time', () => {
        expect(for6(num)).to.be.an('number');
    });
});
