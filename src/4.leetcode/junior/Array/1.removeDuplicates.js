const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    var j = 1;
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            nums[i + 1] = nums[j];
            i++;
            j++;
        }
    }
    return i + 1;
};

console.log(removeDuplicates(nums));
