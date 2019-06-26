/**
 * SOAL 1
 * 
 * Hilangkan semua spasi yang ada di dalam input
 */

function removeSpaces (text) {
  // Code to remove spaces from text
  var result = ''
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      result += text[i]
    }
  }
  return result       
}

console.log(removeSpaces('lorem ipsum dollor'))
