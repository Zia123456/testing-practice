const stringLength = require('./stringLength');

test('string length at least must be 1', () => {
  // arrange
  const error = 'not allowed';
  // act

  // assert
  expect(stringLength('')).toMatch(error);
});

test('string length must be leas than 10', () => {
  // arrange
  const error = 'not allowed';
  // act

  // assert
  expect(stringLength('helooooohiiiddjjd')).toMatch(error);
});
