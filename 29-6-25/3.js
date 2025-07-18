//3. Check Prime Number: Write a function that takes a number as input and returns true if it's a prime number, and false otherwise.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3));