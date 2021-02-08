function digitize(n) {
  let watermelon = String(n)
  return watermelon.split("").map(Number).reverse()
}