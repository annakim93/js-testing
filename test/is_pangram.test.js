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
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBe(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = '';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(false);
  });

  test('pangram with underscores instead of spaces works', () => {
    const text = 'the_quick brown_fox jumps over the lazy dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toBe(true);
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'a4bc6de8fghi4jk2l3mnop8q2rstu8vw9xyz';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(true);
  });

  test('pangram no letters', ()=> {
    const text = '9823904((*#$(!';

    const answer = isPangram(text);

    expect(answer).toBe(false);
  });
});
