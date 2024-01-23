const fizzBuzz = require('../fizzBuzz.js');

test('Recives a number n to return FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test('Recives a number n to return Buzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('Recives a number n to return Fizz', () => {
    expect(fizzBuzz(18)).toBe("Fizz");
})

test('Recives a number n to return n', () => {
    expect(fizzBuzz(17)).toBe('n');
})