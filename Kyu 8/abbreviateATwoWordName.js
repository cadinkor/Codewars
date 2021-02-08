function abbrevName(name){
  let arr = name.split(" ")
  let firstName = arr[0]
  let lastName = arr[1]
  return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase()
}