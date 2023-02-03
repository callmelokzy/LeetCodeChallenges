// Problem
/*  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid. 

An input string is valid if:-
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/

// Solution
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    // Initialize an empty stack to store opening brackets
    let stack = [];

    // Create a mapping of opening and closing brackets
    let mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Iterate over the string `s`
    for (let i = 0; i < s.length; i++) {
        // If the current character is an opening bracket
        if (s[i] in mapping) {
            // Push it to the stack
            stack.push(s[i]);
        } else {
            // If the current character is a closing bracket
            // Check if the stack is empty or if the last opening bracket doesn't match the current closing bracket
            if (stack.length == 0 || mapping[stack.pop()] !== s[i]) {
                // If either of the above conditions is true, return false as the input string is not valid
                return false;
            }
        }
    }

    // If the stack is empty at the end, return true as the input string is valid
    return stack.length == 0;
};
