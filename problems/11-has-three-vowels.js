/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    let strArr = string.split('');
    let vowels = 'aeiou';
    let numOfVowels = strArr.reduce((total, letter) => {
        if (vowels.includes(letter.toLowerCase())) {
            total += 1;
            let vowelIndex = vowels.indexOf(letter.toLowerCase());
            vowels = vowels.slice(0, vowelIndex) + vowels.slice(vowelIndex + 1);
        }
        return total;
    }, 0);
    return numOfVowels >= 3;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
