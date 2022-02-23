const Calculator = require('../tasks/task3');

const calculator = new Calculator();
describe('Test All Calculator Methods', () => {
// Adding:
  describe('Adding Methods', () => {
    test('Adding 1', () => {
      expect(calculator.add(1, 2)).toBe(3)
    });
    test('Adding 2', () => {
      expect(calculator.add(-1, -22)).toBe(-23)
    });
    test('Adding 3', () => {
      expect(calculator.add('Hello', 'world')).toBeUndefined()
    });
  });

// Subtracting:
  describe('Subtracting Methods', () => {
    test('Subtracting 1', () => {
      expect(calculator.subtract(10, 2)).toBe(8)
    });
    test('Subtracting 2', () => {
      expect(calculator.subtract(-10, -5)).toBe(-5)
    });
    test('Subtracting 3', () => {
      expect(calculator.subtract('Hello', 'world')).toBeUndefined()
    });
  });

// Multiplying
  describe('Multiplying Methods', () => {
    test('Multiplying 1', () => {
      expect(calculator.multiply(10, 2)).toBe(20)
    });
    test('Multiplying 2', () => {
      expect(calculator.multiply(-3, -3)).toBe(9)
    });
    test('Multiplying 3', () => {
      expect(calculator.multiply('Hello', 'world')).toBeUndefined()
    });
  });

// Dividing
  describe('Dividing Methods', () => {
    test('Dividing ', () => {
      expect(calculator.divide(10, 2)).toBe(5)
    });
    test('Dividing ', () => {
      expect(calculator.divide(-5, -4)).toBe(1.25)
    });
    test('Dividing ', () => {
      expect(calculator.divide('Hello', 'world')).toBeUndefined()
    });
  });
});
