function reverseString(str) {
  const splitString = str.split('');
  const reversArray = splitString.reverse();
  const joinArray = reversArray.join('');
  return joinArray;
}

module.exports = reverseString;
