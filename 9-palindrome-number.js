/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    const numberString = String(x);
    let L = 0, R = numberString.length - 1;

    while(L < R) {
        if(numberString[L] !== numberString[R]) {
            return false;
        }
        L++, R--;
    }

    return true;

}; 