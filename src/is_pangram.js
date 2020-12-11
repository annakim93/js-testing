// const isPangram = function(text) {
//   if (text.length < 26) {
//     return false;
//   }

//   const lowercaseText = text.toLowerCase();
  
//   const alphaChars = {};
//   for (let i = 0; i < lowercaseText.length; i++) {
//     if (lowercaseText.charCodeAt(i) > 96 && lowercaseText.charCodeAt(i) < 123) {
//       if (!alphaChars[lowercaseText[i]]) {
//         alphaChars[lowercaseText[i]] = 1;
//       }
//     }
//   }

//   if (Object.keys(alphaChars).length == 26) {
//     return true;
//   }

//   return false;
// };

// module.exports = isPangram;

////////////////////////////////////////////

// ALTERNATIVE SOLN:

const isPangram = function(text) {
  if (text.length < 26) {
    return false;
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let score = 0;

  const alphaChars = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphaChars[alphabet[i]] = 0;
  }

  for (let i = 0; i < text.length; i++) {
    if (alphaChars[text[i]] === 0) {
      score++;
      alphaChars[text[i]] = 1;
    }
  }

  if (score === 26) {
    return true;
  }

  return false;
};

module.exports = isPangram;