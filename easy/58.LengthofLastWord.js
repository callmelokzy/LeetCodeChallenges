//problem
/* Given a string s consisting of words and spaces, return the length of the last word in the string. */

//solution

const lengthOfLastWord = s => {
    let words = s.trim().split(' ');           
    // split the string into words using the space character as a separator, and use `trim` method to remove any leading or trailing spaces
    return words[words.length - 1].length;     
    // return the length of the last word in the array
};
