const { perm } = require('../src/3.递归全排列');
const expect = require('chai').expect;

describe('递归的全排列', () => {
    const arr = [];
    before(() => {
        arr.concat([1, 2, 3, 4, 5]);
    });
    it('递归测试', () => {
        expect(perm(arr));
    });
});
