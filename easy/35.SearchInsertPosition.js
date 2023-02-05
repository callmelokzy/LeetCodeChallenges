//Problem
/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. */


//solution

var searchInsert = function(nums, target) {
    let left = 0;                                 // initialize left pointer
    let right = nums.length - 1;                  // initialize right pointer
    while (left <= right) {                      // loop through the array until left pointer is less than or equal to the right pointer
        let mid = left + Math.floor((right - left) / 2);  // calculate the midpoint index
        if (nums[mid] === target) {             // check if the midpoint value is equal to the target value
            return mid;                         // return the index if the target value is found
        } else if (nums[mid] < target) {        // if the midpoint value is less than the target value
            left = mid + 1;                     // move the left pointer to the right of the midpoint
        } else {                                 // if the midpoint value is greater than the target value
            right = mid - 1;                    // move the right pointer to the left of the midpoint
        }
    }
    return left;                                // return the left pointer if the target value is not found in the array
};
