/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let n1 = {}
    let n2 = {}
    let ret = [];

    nums1.map((item) => {
        if (n1[item]) {
            n1[item] = n1[item] + 1
        } else {
            n1[item] = 1;
        }
    });

    nums2.map((item) => {
        if (n2[item]) {
            n2[item] = n2[item] + 1
        } else {
            n2[item] = 1;
        }
    });

    for (var key in n1) {
        if (n2[key]) {
            n = n1[key] < n2[key] ? n1[key] : n2[key];
            ret.push(...new Array(n).fill(Number(key)));
        }
    }

    return ret;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
