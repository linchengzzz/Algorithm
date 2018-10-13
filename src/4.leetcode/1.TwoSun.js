/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum1 = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const a = target - nums[i];
        if (map.has(a)) {
            console.log([map.get(a), i, a, nums[i], nums[i] + a]);
            return [map.get(a), i];
        }
        map.set(nums[i], i);
    }
    return 'no two sum';
};

const twoSum2 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                console.log([i, j, nums[i], nums[j], nums[i] + nums[j]]);
                return [i, j];
            }
        }
    }
    return 'no two sum';
};
module.exports = {
    twoSum1,
    twoSum2,
};
