console.log(isPrime(15))

function isPrime(num) {
    if (num > 1000) {
        return "Данные неверны";
    }
    if (num <= 1) {
      return `Число ${num} не простое`;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return `Число ${num} не простое`;
      }
    }
    return `Число ${num} простое`;
  }
