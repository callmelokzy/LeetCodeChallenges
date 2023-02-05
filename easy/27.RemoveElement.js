// Problem
/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.  */


//Solution

var removeElement = function(nums, val) {
    let i = 0;                               // initialize index variable i
    let n = nums.length;                     // get the length of the input array
    while (i < n) {                         // loop through the array until index i is less than the length of the array
        if (nums[i] === val) {              // check if the current value is equal to the target value
            nums[i] = nums[n - 1];           // if the current value is equal to the target value, replace it with the last value in the array
            n--;                             // decrement the length of the array
        } else {                             // if the current value is not equal to the target value
            i++;                             // increment the index variable i
        }
    }
    console.log(n);                                // return the updated length of the array
};

let nums = [3,2,2,3];
let val = 3;

removeElement(nums,val); //