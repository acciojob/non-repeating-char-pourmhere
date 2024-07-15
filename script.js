function firstNonRepeatedChar(str) {
 // Write your code here
	    const charFrequency = {};

    // Count the frequency of each character
    for (const char of str) {
        if (charFrequency[char]) {
            charFrequency[char]++;
        } else {
            charFrequency[char] = 1;
        }
    }

    // Find the first non-repeating character
    for (const char of str) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
