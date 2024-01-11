// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let firstPalindrome = ''
    for(i = 0; i < words.length && !firstPalindrome; i++) {
        const currentWord = words[i];
        let L = 0, R = currentWord.length - 1;
        let isPalindrome = true;
        while(L < R) {
            if(currentWord[L] !== currentWord[R]) {
                isPalindrome = false
                break
            }
            L++, R--;
        }
        if (isPalindrome) {
            firstPalindrome = currentWord;
        }
    }   
    
    return firstPalindrome

};