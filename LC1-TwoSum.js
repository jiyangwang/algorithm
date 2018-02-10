/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!nums || nums.length === 0) {
        throw new Error('invalid input!');
    }
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(target - nums[i])) {
            return [map[target - nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};

var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums, target)); // [0, 1]