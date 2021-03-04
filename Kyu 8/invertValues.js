function invert(array) {
  return array.map(x=>x*-1)
}

//or

function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}

//or

function invert(array) {
  for(let i = 0; i < array.length; i++){
   array[i] = (array[i] * -1) 
   }
  return array;
}