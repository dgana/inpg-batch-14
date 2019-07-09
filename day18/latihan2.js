function countLetters (word, letter, flag = 0) {
  if (!word) return flag
  if (word[0] === letter) flag++
  return countLetters(word.slice(1), letter, flag)
}

// TEST CASES
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3