const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  test('isPalindrome() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a palindrome with only lower case', () => {
    // Arrange
    const text = 'racecar';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBe(true);
  });

  test('works with palindrome sentence with spaces', () => {
    // Arrange
    const text = 'racecar racecar';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toEqual(true);
  });

  test('correctly returns false if not a palindrome', () => {
    // Arrange
    const text = 'rac';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBe(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = '';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toEqual(true);
  });

  test('Palindrome with underscores instead of spaces works', () => {
    const text = 'racecar_racecar';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toBe(true);
  });

  test('Palindrome with numbers', () => {
    // Arrange
    const text = '908809';

    // Act
    const answer = isPalindrome(text);

    // Assert
    expect(answer).toEqual(true);
  });

  test('Palindrome mixed case', ()=> {
    const text = 'Too hot to hoot';

    const answer = isPalindrome(text);

    expect(answer).toBe(true);
  });
});
