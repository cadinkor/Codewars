function findNextSquare(n) {
  if (n < 0 || Math.sqrt(n) % 1 !== 0){
    return -1
  } else {
    let nextN = Math.floor(Math.sqrt(n) + 1);
     return nextN * nextN;
  }
}

//or

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1? -1 : Math.pow(Math.sqrt(sq) +1 ,2);
}