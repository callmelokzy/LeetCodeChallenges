// Problem
/*  Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

// Solution
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1){
        if (/^[a-zA-Z]+$/.test(strs[0])){
            return strs[0];
        }else return "";

    }


    let prefix = "";
    for (let i=0;i<strs[0].length;i++){
        for (let j=1;j<strs.length;j++){
            if (strs[j][i] !== strs[0][i]){
                if (prefix.length==0){
                    return ""
                }else{
                    return prefix
                }
            }
        }
        prefix += strs[0][i];
    }
    
};