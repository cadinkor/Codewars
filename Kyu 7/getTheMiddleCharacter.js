function getMiddle(str){
  return str.substr(Math.ceil(str.length/2-1), str.length % 2 === 0 ? 2 : 1) 
}