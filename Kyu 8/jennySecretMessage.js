jfunction greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
  }else{
    return "Hello, " + name + "!";
  }
  return greet(name);
}

//or

function greet(name){
  return name === "Johnny" ? `Hello, my love!` : `Hello, ${name}!`
}

//or

function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}