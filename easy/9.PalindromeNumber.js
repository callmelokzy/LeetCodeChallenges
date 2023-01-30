// Problem
/* Given an integer x, return true if x is a palindrome
, and false otherwise */

// Solution
var isPalindrome = function (x) {
  if (String(x) == String(x).split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

let x = 121;
isPalindrome(x);

// Output
// true
