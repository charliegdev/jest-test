const sum = require('./sum');

test('1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('adding positive numbers always results a positive number', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).toBeGreaterThan(0);
    }
  }
});
