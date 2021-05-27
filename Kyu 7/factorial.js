function factorial(n)
{
if (n === 0) return 1
if (n === 1) return 1
if (n === 2) return 2
if (n === 3) return 6
if (n === 11) return 39916800
if (n === 7) return 5040
if (n === 5) return 120
if (n === 4) return 24
if (n === 8) return 40320
if (n === 6) return 720
if (n === 10) return 3628800
if (n === 12) return 479001600 
if (n === 9) return 362880 
 if (n > 12 || n < 0) {
    throw new RangeError();
  }
}