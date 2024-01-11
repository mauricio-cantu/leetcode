const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

function halvesAreAlike(s: string): boolean {
    let firstHalfVowels = 0, secondHalfVowels = 0;
    for (let index = 0; index < s.length; index++) {
        if(vowels.has(s[index].toLowerCase())) {
            firstHalfVowels += index < (s.length / 2) ? 1 : 0;
            secondHalfVowels += index < (s.length / 2) ? 0 : 1;
        } 
    }

    return firstHalfVowels === secondHalfVowels;
};

// alternaive version, without lowercasing the characters
// const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
// function halvesAreAlike(s: string): boolean {
//     let firstHalfVowels = 0, secondHalfVowels = 0;
//     for (let index = 0; index < s.length; index++) {
//         if(vowels.has(s[index])) {
//             firstHalfVowels += index < (s.length / 2) ? 1 : 0;
//             secondHalfVowels += index < (s.length / 2) ? 0 : 1;
//         } 
//     }

//     return firstHalfVowels === secondHalfVowels;
// };