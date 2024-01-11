// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for(i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        const wordsInSentence = sentence.split(" ").length
        maxWords = Math.max(maxWords, wordsInSentence)
    }
    
    return maxWords
};