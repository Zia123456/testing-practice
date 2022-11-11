const reverseString = require('./reverseString');

test('reverse of hello must be olleh', () => {
  // arrange
  const hello = 'hello';
  const reverseHello = 'olleh';
  // act
  // assert
  expect(reverseString(hello)).toMatch(reverseHello);
});
