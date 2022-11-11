const capitalize = require('./capitalize');

test('hello must be converted to Hello', () => {
  // arrange
  const hello = 'hello';
  const Hello = 'Hello';

  // act
  const converter = capitalize(hello);

  // asert
  expect(converter).toMatch(Hello);
});
