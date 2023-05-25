// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("encryptedString", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"

it("takes in a string and returns a string with a coded message.", () => {
    expect(encryptedString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(encryptedString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(encryptedString(secretCodeWord3)).toEqual("3cc3ntr1c")
})
})
/* 
FAIL  ./code-challenges.test.js
encryptedString
✕ takes in a string and returns a string with a coded message. (1 ms)
 ● encryptedString › takes in a string and returns a string with a coded message.
ReferenceError: encryptedString is not defined 
*/

// b) Create the function that makes the test pass.
/* Pseudocode:
-   input: string
-   output: string and returns a string with a coded message.
*/
const encryptedString = (string) => { //function that passes each string
    return string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0") /* Using 
    /pattern/modifiers syntax, g global match and i case-insensitive modifiers to replace all chosen characters. */
}
/* 
PASS  ./code-challenges.test.js
 encryptedString
✓ takes in a string and returns a string with a coded message.
*/

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("searchArrays", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const filterLetterA = "a"
    const filterLetterE = "e"

it("function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
    expect(searchArrays(fruitArray, filterLetterA)).toEqual(expect.arrayContaining(["Mango", "Apricot", "Peach"]))
    expect(searchArrays(fruitArray, filterLetterE)).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))
})
})
/* 
FAIL  ./code-challenges.test.js
  encryptedString
    ✓ takes in a string and returns a string with a coded message. (4 ms)
  searchArrays
    ✕ function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

  ● searchArrays › function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

    ReferenceError: searchArrays is not defined
*/

// b) Create the function that makes the test pass.
/* Pseudocode
-   input: Array of strings
-   output: strings containing the single letter
*/
const searchArrays = (array, letter) => {
    return array.filter(word => word.toLowerCase().includes(letter))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    const hand4 = [7, 2, 7, 2, 7]

it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
})
})
/* 
FAIL  ./code-challenges.test.js
fullHouse
✕ takes in an array of 5 numbers and determines whether or not the array is a full house. (2 ms)
● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house.
*/

// b) Create the function that makes the test pass. 
const fullHouse = (arr) => {
  const counts = {}
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1
  }
  return Object.values(counts).includes(2) && Object.values(counts).includes(3)
}
  
