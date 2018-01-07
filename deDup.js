/*

Given nums = [1,1,2],

Your function should return length = 2, 
with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the new length.

*/

function deDup(nums) {
  if (!nums && nums.length <= 1) {
    return nums;
  }
  var slow = 0;
  for (var fast = 0; fast < nums.length; fast++) {
    if (nums[slow] != nums[fast])
      nums[++slow] = nums[fast];
  }
  return nums.slice(0, slow + 1);
}

var nums = [1,1,2,2,2,3,3];
console.log(deDup(nums));