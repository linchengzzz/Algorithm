const { insertSort } = require('../../src/3.java-7.排序/1.插入排序');
const { shellSort } = require('../../src/3.java-7.排序/2.希尔排序');
const { heapSort } = require('../../src/3.java-7.排序/3.堆排序');
const { mergeStart } = require('../../src/3.java-7.排序/4.归并排序');
const expect = require('chai').expect;

/**
 * Test Result:
 *   N: 100000
 *   ✓ 排序算法测试 插入排序算法 => O(N2)时间复杂度 Time: 3097ms
 *   ✓ 排序算法测试 希尔排序算法 => O(N2)时间复杂度 Time: 11ms
 *
 *   2 passing (4s)
 *
 */

describe('排序算法测试', () => {
    const N = 100000;
    const arr = [];
    before(() => {
        for (let i = 0; i < N; i++) {
            arr.push(Math.round(Math.random() * N));
        }
    });
    it('插入排序算法 => O(N2)时间复杂度 Time', () => {
        expect(insertSort(arr));
    });
    it('希尔排序算法 => O(N2)时间复杂度 Time', () => {
        expect(shellSort(arr));
    });
    it('堆排序算法 => O(N2)时间复杂度 Time', () => {
        expect(heapSort(arr));
    });
    it('归并排序算法 => O(NlogN)时间复杂度 Time', () => {
        expect(mergeStart(arr));
    });
});
