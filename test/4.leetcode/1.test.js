const { twoSum1, twoSum2 } = require('../../src/4.leetcode/1.TwoSun')
const expect = require('chai').expect;


// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

describe('两数之和', () => {
    let num = 10000000;
    const nums = [];
    const target = Math.round(Math.random() * num);
    before(() => {
        for (let i = 0; i < num; i++) {
            nums.push(Math.round(Math.random() * num));
        }
    });
    it('map 算法', () => {
        expect(twoSum1(nums, target)).to.be.an('array');
    })
    it('穷举 算法', () => {
        expect(twoSum1(nums, target)).to.be.an('array');
    })
})
