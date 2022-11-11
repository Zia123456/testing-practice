function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    const error = 'not allowed';
    return error;
  }
  return str.length;
}

module.exports = stringLength;
