const calculator = require('./calculator');
// sum
describe('calculator test', () => {
  test('1 + 2 must be equal to 3', () => {
    // arrange
    const a = 1;
    const b = 2;

    // act
    const sum = calculator.sum(a, b);

    // assert
    expect(sum).toBe(3);
  });
  test('1.1 + 2.2 must be near to 3.3', () => {
    // arrange
    const a = 1.1;
    const b = 2.2;

    // act
    const sum = calculator.sum(a, b);

    // assert
    expect(sum).toBeGreaterThanOrEqual(3.3);
  });
  test('0.1 + 0.2 must be near to 0.3', () => {
    // arrange
    const a = 0.1;
    const b = 0.2;

    // act
    const sum = calculator.sum(a, b);

    // assert
    expect(sum).toBeCloseTo(0.3);
  });
});

// sub
describe('calculator test', () => {
  test('2 - 1 must be equal to 1', () => {
    // arrange
    const a = 2;
    const b = 1;

    // act
    const sub = calculator.sub(a, b);

    // assert
    expect(sub).toBe(1);
  });
  test('2.2 - 1.1 must be near to 1.1', () => {
    // arrange
    const b = 1.1;
    const a = 2.2;

    // act
    const sub = calculator.sub(a, b);

    // assert
    expect(sub).toBeCloseTo(1.1);
  });
  test('0.2 - 0.1 must be near to 0.1', () => {
    // arrange
    const a = 0.2;
    const b = 0.1;

    // act
    const sub = calculator.sub(a, b);

    // assert
    expect(sub).toBeCloseTo(0.1);
  });
});

// mul

describe('calculator test', () => {
  test('2 * 1 must be equal to 1', () => {
    // arrange
    const a = 2;
    const b = 1;

    // act
    const mul = calculator.mul(a, b);

    // assert
    expect(mul).toBe(2);
  });
  test('2.2 * 1.1 must be near to 2.42', () => {
    // arrange
    const b = 1.1;
    const a = 2.2;

    // act
    const mul = calculator.mul(a, b);

    // assert
    expect(mul).toBeCloseTo(2.42);
  });
  test('0.2 - 0.1 must be near to 0.02', () => {
    // arrange
    const a = 0.2;
    const b = 0.1;

    // act
    const mul = calculator.mul(a, b);

    // assert
    expect(mul).toBeCloseTo(0.02);
  });
});

// div

describe('calculator test', () => {
  test('2 / 1 must be equal to 2', () => {
    // arrange
    const a = 2;
    const b = 1;

    // act
    const div = calculator.div(a, b);

    // assert
    expect(div).toBe(2);
  });
  test('2.2 / 1.1 must be near to 2', () => {
    // arrange
    const b = 1.1;
    const a = 2.2;

    // act
    const div = calculator.div(a, b);

    // assert
    expect(div).toBeCloseTo(2);
  });
  test('0.2 / 0 must be error', () => {
    // arrange
    const a = 0.2;
    const b = 0;
    const error = 'dividing by 0 is not allowed!';

    // act
    const div = calculator.div(a, b);

    // assert
    expect(div).toMatch(error);
  });
});
