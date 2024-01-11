// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let finalValue = 0;
    for(i = 0; i < operations.length; i++) {
        if(operations[i] === '++X' || operations[i] === 'X++') {
            finalValue++;
        } else {
            finalValue--;
        }
    }

    return finalValue;
};