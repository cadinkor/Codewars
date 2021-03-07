function validatePIN (pin) {
  if(pin.length == 4 || pin.length === 6){
    if(/^[0-9]+$/.test(pin))  {
      return true;
      }else{
        return false;
      }
   }else{
     return false
   }
}

//or

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

//or

function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}