function noSpace(x){
  return x.split(" ").join("")
}

//or

function noSpace(x){
  return x.replace(/\s/g, '');
}
