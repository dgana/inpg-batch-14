function isArithmeticProgression (numbers) {
  for (var i = 0; i < numbers.length / 2; i++) {
    var firstResult = numbers[i + 1] - numbers[i]
    var lastResult = numbers[numbers.length - (i + 1)] - numbers[numbers.length - (i + 2)]
    if (firstResult !== lastResult) {
      return false
    }
  }
  return true
}

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false