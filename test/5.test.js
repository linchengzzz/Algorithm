const { maxSubSum, maxSubSum2 } =require('../src/5.最大子序列');
const expect = require('chai').expect;

/**
 * Test Result:
 *   num: 2000
 *   ✓ 最大子序列和 n3 算法: 1646ms
 *   ✓ 最大子序列和 n2 算法: 6ms
 *   2 passing (2s)
 */
describe('最大子序列和', ()=> {
    const maxNum = 2000;
    const arr = [];
    before(() => {
        //  产生 maxNum 个 随机数 正数 > 负数
        for (let i = 0; i < maxNum; i++) {
            arr.push(Math.round(7000 - Math.random()*10000));
        }
    });
    it('n3 算法',()=> {
        expect(maxSubSum(arr)).to.be.an('number');
    });
    it('n2 算法',()=> {
        expect(maxSubSum2(arr)).to.be.an('number');
    })
})