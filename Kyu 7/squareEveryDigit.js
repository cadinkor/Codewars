function squareDigits(num){
  let str = num.toString().split('').map(x => x ** 2).join('')
  return Number(str)
}