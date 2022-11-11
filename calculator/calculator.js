const calculator = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      const error = 'dividing by 0 is not allowed!';
      return error;
    }
  },
};

module.exports = calculator;
