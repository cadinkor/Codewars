function XO(str) {
  return str.toUpperCase().split('X').length === str.toUpperCase().split('O').length
}