function removeSmallest(numbers) {
  let copy = [...numbers]
  let smallest = Math.min(...numbers);
  let smallestIndex = numbers.indexOf(smallest)
  
  copy.splice(smallestIndex, 1)
  return copy
}