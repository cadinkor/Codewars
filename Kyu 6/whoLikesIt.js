function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}

//or

function likes(names) {
  if (names.length === 0){
    return 'no one likes this'
  } else if (names.length === 1){
    return `${names} likes this`
  } else if (names.length === 2) {
    let [friend1, friend2] = names
    return `${friend1} and ${friend2} like this`
  } else if (names.length === 3) {
    let [friend1, friend2, friend3] = names
    return `${friend1}, ${friend2} and ${friend3} like this`
  } else {
    let [friend1, friend2, friend3] = names
    return `${friend1}, ${friend2} and ${names.length - 2} others like this`
  }
}