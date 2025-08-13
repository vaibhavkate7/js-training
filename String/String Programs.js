// Write a program to find the length of a given string.
function findLengthOfString(str) {
  return str.length;
}
console.log(findLengthOfString("javscript"));

// Write a program to print the first and last character of a string.
function returnFirstLetterOnScreen(str) {
  return str[0];
}
function returnLastLetterOnScreen(str) {
  for (let i = 0; i < str.length; i++) {
    return str[str.length - 1];
  }
}
console.log(returnFirstLetterOnScreen("javascript"));
console.log(returnLastLetterOnScreen("javascript"));

// Write a program to print each character of a string on a new line using a loop.
function stringCharacterInNewLine(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
let str = "Hello World";
(stringCharacterInNewLine(str));

// Convert a string to uppercase. / lowercase.
function convertStringUpperCase(str) {
  return str.toUpperCase();
}
function convertStringLowerCase(str) {
  return str.toLowerCase();
}
console.log(convertStringUpperCase("JavaScript"));
console.log(convertStringLowerCase("JavaScript"));

// Swap case: if a character is uppercase, make it lowercase, and vice versa.
function swapCase(str) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char == char.toUpperCase()) {
      newstr += char.toLowerCase();
    } else {
      newstr += char.toUpperCase();
    }
  }
  console.log(newstr);
}
swapCase("Vaibhav Kate");

// Find the index of the word "JavaScript" in "I love JavaScript / string starts with / string ends with ".
function findIndexOfWord(str, word) {
  return str.toLowerCase().indexOf(word);
}
function isStringStartWith(str, word) {
  return str.toLowerCase().startsWith(word)
}
function isStringEndsWith(str, word) {
  return str.toLowerCase().endsWith(word);
}
function isStringContainsTheWord(str, word) {
  return str.toLowerCase().includes(word);
}
console.log(findIndexOfWord("This is my test string", "test"));
console.log(isStringStartWith("This is my test string", "this"));
console.log(isStringEndsWith("This is my test string", "string"));
console.log(isStringContainsTheWord("This is my test string", "code"));

