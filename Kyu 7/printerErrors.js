function printerError(s) {
  let count = 0;
  for(let i = 0; i < s.length; i++) {
      if (s[i] > "m") {
      count++
    }
  }
  return count + '/' + s.length
}

//or

function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

//ran into problems with null here though ^