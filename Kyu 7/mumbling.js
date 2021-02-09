function accum(s) {
  console.log(s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))))
}