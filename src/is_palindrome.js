// Assuming only alphabet characters are valid
// input: 'racecar'
// output: true
// can also reverse the word and see if equal (although trickier with punctuation and whitespaces)

const isPalindrome = function (text) {
  if (text <= 1) {
    return true;
  }
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphaChars = new Set();
  for (const char of alphabet) {
    alphaChars.add(char);
  }

  const testText = text.toLowerCase();

  let left = 0;
  let right = testText.length - 1;
  while (left < right) {
    while (!alphaChars.has(testText[left])) {
      left++;
      if (left === right) {
        return false;
      }
    }

    while (!alphaChars.has(testText[right])) {
      right--;
    }

    if (testText[left] !== testText[right]) {
      return false;
    }
    
    left++;
    right--;
  }
  
  return true;
};

module.exports = isPalindrome;

// console.log(isPalindrome('789'));