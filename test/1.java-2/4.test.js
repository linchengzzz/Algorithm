const { fib1, fib2 } = require('../../src/1.java-2/4.递归测试');
const expect = require('chai').expect;

describe('递归测试', () => {
    it('fib1', () => {
        expect(fib1(40)).to.be.an('number');
    });
    it('fib2', () => {
        expect(fib2(40)).to.be.an('number');
    });
})