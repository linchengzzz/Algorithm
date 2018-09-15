const { findKMaxSort, findKMaxM, findKMaxK } = require('../src/1')
const expect = require('chai').expect;


 // N:10000 K:5000 result 4984
describe('基础算法测试', () => {
    const N = 30000000;
    const K = N/2;
    const arr = [];
    let result;
    before(() => {
        for (let i = 0; i < N; i++) {
            arr.push(Math.round(Math.random() * N));
        }
        result = arr.sort((a, b) => b - a)[K - 1];
        console.log(`${N}个数中第${K}个应该为${result}`);
    });
    it.only('V8 sort 排序', () =>{
        expect(findKMaxSort(arr, K)).to.be.equal(result);
    });
    it('冒泡排序', () => {
        expect(findKMaxM(arr, K)).to.be.equal(result);
    });
    it('推入K', () => {
        expect(findKMaxK(arr, K)).to.be.equal(result);
    })
})