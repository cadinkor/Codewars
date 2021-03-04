const countSheeps = (arrayOfSheep) => 
  arrayOfSheep.filter(Boolean).length;

//or

function countSheeps(arrayOfSheep) {
  let truthCounter = []
  for(let i = 0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true){
      truthCounter++ 
    }
  }
  return truthCounter;
}

//or

function countSheeps(arrayOfSheep) {
  const result = arrayOfSheep.filter(x => x === true)
  return result.length
}
 