const capitalizeFirstLetter = require('../tasks/task4');

describe('Check the first letter', () => {
  const string = 'hello';
  test('first test', () => {
    expect(capitalizeFirstLetter(string)).toBe('Hello');
  });
  test('second test', () => {
    expect(capitalizeFirstLetter(1)).toBeUndefined();
  });
});