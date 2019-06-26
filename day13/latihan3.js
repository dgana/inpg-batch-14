/**
 * SOAL 3
 * 
 * Ganti huruf vokal menjadi satu huruf setelahnya (A menjadi B, I menjadi J dan seterusnya)
 */

function updateVowels(text) {
  var result = ''

  for (var i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
      result += 'b'
    } else if (text[i] === 'i') {
      result += 'j'
    } else if (text[i] === 'u') {
      result += 'v'
    } else if (text[i] === 'e') {
      result += 'f'
    } else if (text[i] === 'o') {
      result += 'p'
    } else {
      result += text[i]
    }
  }
  return result
}

console.log(updateVowels('lorem ipsum dollor'))