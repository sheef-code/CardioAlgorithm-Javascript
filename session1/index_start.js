/* 
USE FUNCTIONAL PROGRAMING CONCEPTS! 
*/

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revStr = str
    .split("")
    .reverse()
    .join("");

  if (revStr === str) {
    return true;
  } else {
    return false;
  }
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  return int
    .toString()
    .split("")
    .reverse()
    .join("");
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}

// Call Function
const output = capitalizeLetters("i love javascript");

console.log(output);
