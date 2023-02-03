// Problem
/*  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid. 

An input string is valid if:-
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    // If the nums array is null or has a length of 0, return 0
    if (!nums || nums.length === 0) return 0;

    // Initialize the `i` pointer to 0
    let i = 0;
    // Loop through the nums array from index 1 to the end
    for (let j = 1; j < nums.length; j++) {
        // If the current element is different than the previous one
        if (nums[j] !== nums[i]) {
            // Increment the `i` pointer and replace the value at `i` with the current value
            i++;
            nums[i] = nums[j];
        }
    }
    // Return `i + 1` which is the length of the unique values in the nums array
    return i + 1;
};
