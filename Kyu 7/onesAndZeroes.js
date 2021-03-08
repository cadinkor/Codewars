function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => a << 1 | b );
}