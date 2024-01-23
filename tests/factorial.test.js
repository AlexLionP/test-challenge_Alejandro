const factorial = require('../factorial.js');

test('Recives a number and gives its factorial', () => {
    expect(factorial(5)).toBe(120);
})

test('Recives a number and gives its factorial', () => {
    expect(factorial(1)).toBe(1);
})

test('Recives a number and gives its factorial', () => {
    expect(factorial(0)).toBe(1);
})