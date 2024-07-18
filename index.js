function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;
  
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

/* 
  Pseudocode:
  1. Define a function `isPalindrome` that takes one parameter `word`.
  2. Initialize two pointers: `left` starting at `0` and `right` at `word.length - 1`.
  3. Use a while loop to iterate while `left` is less than `right`.
     - If `word[left]` is not equal to `word[right]`, return `false`.
     - Increment `left` and decrement `right`.
  4. If the loop completes, return `true`.
*/

/* 
  Explanation:
  - `isPalindrome` function checks if a given `word` reads the same forwards and backwards.
  - It compares characters from both ends towards the center of the string.
  - Returns `true` if all characters match (palindrome), otherwise `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
