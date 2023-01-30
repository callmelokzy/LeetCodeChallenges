// Problem
/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target. */

// Solution

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      if (nums[i] + nums[j] == target) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
};



let nums = [2,7,11,15];
let target = 9;
twoSum(nums, target);

// Output
// [0,1]
