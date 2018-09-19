const { searchString } = require('../src/2.字母游戏');
const expect = require('chai').expect;

describe('寻找字母测试', () => {
    let arr = [];
    let strArr = [];
    before(() => {
        // 定义字典模板
        arr = [
            ['t', 'h', 'i', 's'],
            ['w', 'a', 't', 's'],
            ['o', 'a', 'h', 'g'],
            ['f', 'g', 'd', 't'],
        ];
        // 定义单词
        strArr = ['this', 'two', 'fat', 'that'];
    });
    it('暴力遍历', () => {
        expect(searchString(arr, strArr)).to.be.an('Array');
    })
});
