function getDivisorsCnt(n) {
  let div = 0;
  
  for(let i = 1; i <= n; i++) 
    if (n % i == 0) div++;

    return div;
}