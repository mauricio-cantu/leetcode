// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
function strStr(haystack: string, needle: string): number {
    let auxIndex = 0, firstOccurrenceIndex = -1;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[auxIndex]) {
            console.log({auxIndex, 'needle[auxIndex]': needle[auxIndex],  i, 'haystack[i]': haystack[i]});
            auxIndex++;
            if (firstOccurrenceIndex === -1) {
                firstOccurrenceIndex = i;
            }
            
            
            if (auxIndex === needle.length) return firstOccurrenceIndex
        } else {
            auxIndex = 0;
            firstOccurrenceIndex = -1;
        }
    }


    return -1;
};


console.log(strStr('mississippi', 'issip'));
