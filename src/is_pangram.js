const isPangram = function(text) {
  if (text.length < 26) {
    return false;
  }

  const lowercaseText = text.toLowerCase();
  
  let alphaChars = {};
  for (let i = 0; i < lowercaseText.length; i++) {
    if (lowercaseText.charCodeAt(i) > 96 && lowercaseText.charCodeAt(i) < 123) {
      if (!alphaChars[lowercaseText[i]]) {
        alphaChars[lowercaseText[i]] = 1;
      }
    }
  }

  if (Object.keys(alphaChars).length == 26) {
    return true;
  }

  return false;
};

module.exports = isPangram;
