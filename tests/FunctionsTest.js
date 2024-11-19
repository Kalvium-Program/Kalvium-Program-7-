describe('Higher-order function tests', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const words = ['apple', 'banana', 'cat', 'dog'];
  const letters = ['a', 'b', 'c', 'd'];

  it('should square each element in the numbers array', () => {
    const result = squareArray(numbers);
    expect(result).toEqual([1, 4, 9, 16, 25, 36]);
  });

  it('should convert all words to uppercase', () => {
    const result = uppercaseArray(words);
    expect(result).toEqual(['APPLE', 'BANANA', 'CAT', 'DOG']);
  });

  it('should filter even numbers from the numbers array', () => {
    const result = filterEvenNumbers(numbers);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should create formatted strings from the letters array', () => {
    const result = formatElements(letters);
    expect(result).toEqual([
      'Element 0: a',
      'Element 1: b',
      'Element 2: c',
      'Element 3: d'
    ]);
  });

  it('should filter words longer than 4 characters', () => {
    const result = filterLongWords(words);
    expect(result).toEqual(['apple', 'banana']);
  });

  it('should sum all elements in the numbers array', () => {
    const result = sumArray(numbers);
    expect(result).toBe(21);
  });
});
