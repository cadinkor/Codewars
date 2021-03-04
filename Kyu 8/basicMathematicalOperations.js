function basicOp(operation, value1, value2){
  if (operation === '+'){
    return (value1 + value2);
  }else if (operation === '-'){
    return (value1 - value2);
  }else if(operation === '*'){
    return (value1 * value2);
  }else if(operation === '/'){
    return (value1 / value2);
  }
}

//or

function basicOp(o, v1, v2){
  return eval(v1 + o + v2)
}