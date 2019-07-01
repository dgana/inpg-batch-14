function sortByCharacter (text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var str = ''
  for (var i = 0; i < alphabet.length; i++) {
    for (var y = 0; y < text.length; y++) {
      if (alphabet[i] === text[y]) {
        while (alphabet[i] === text[y]) {
          str += text[y]
          text = text.replace(text[y], '')
        }
      }
      if (text.length === 0) {
        return str
      }
    }
  }
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'