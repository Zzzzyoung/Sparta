function countCharacters(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

console.log(countCharacters('spartan'));