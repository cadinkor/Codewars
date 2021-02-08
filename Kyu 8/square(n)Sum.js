function squareSum(numbers){
  let sum = numbers.map(x => x **2).reduce((a,b) => a + b, 0)
  return sum 
}
