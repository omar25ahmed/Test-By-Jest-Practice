const getStrLength = require('../tasks/task1');

test('getStrLength function', () => {
  expect(getStrLength('hello')).toBe(true);
  expect(getStrLength('')).toBe(false);
})