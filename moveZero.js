/*
Given an array nums, write a function to move all
0's to the end of it while maintaining the relative 
order of the non-zero elements.
For example, given nums = [0, 1, 0, 3, 12], after 
calling your function, nums should be [1, 3, 12, 0, 0].
*/

function moveZero(nums) {
  if (!nums || nums.length === 0) {
    return nums;
  }
  var slow = 0;
  for (var fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      swap(nums, slow, fast);
      slow++;
    }
  }
  return nums;
}

function swap(nums, slow, fast) {
  var tmp = nums[slow];
  nums[slow] = nums[fast];
  nums[fast] = tmp;
}

var nums = [0,0,0,0,0,2,2,4,0,0,2];
console.log(moveZero(nums));