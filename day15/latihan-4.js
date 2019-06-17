for (var i = 2; i <= 100; i++) {
  var isPrime = true;

  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  if (isPrime === true) {
    console.log(i);
  }
}

