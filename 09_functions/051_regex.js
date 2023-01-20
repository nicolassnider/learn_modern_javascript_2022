/* regex */

// 4. Create a function that takes a string and returns the number (count) of vowels contained within it.
// 5. Create a function that takes a string and returns the number (count) of vowels contained within it.
// 6. Create a function that takes a string and returns the number (count) of vowels contained within it.
// 7. Create a function that takes a string and returns the number (count) of vowels contained within it.
// 8. Create a function that takes a string and returns the number (count) of vowels contained within it.
// 9. Create a function that takes a string and returns the number (count) of vowels contained within it.
// 10. Create a function that takes a string and returns the number (count) of vowels contained within it.

// 1. Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels1(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// 2. Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels2(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

// 3. Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels3(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowels.match(str[i])) {
            count++;
        }
    }
    return count;
}

// 4. Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels4(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
		if (vowels.search(str[i]) !== -1) {
			count++;
		}
	}
	return count;
}

