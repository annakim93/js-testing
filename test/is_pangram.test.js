const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange

    // Act

    // Assert

  });

  test("missing character 'x'", () => {
    // Arrange

    // Act

    // Assert

  });

  test('empty sentence', () => {
    // Arrange

    // Act

    // Assert

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange

    // Act

    // Assert

  });

  test('pangram with numbers', () => {
    // Arrange

    // Act

    // Assert

  });

  // Write your own test case
});
