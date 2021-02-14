function targetTerdekat(arr) {
  var total = 0, x = false, o = false
  for (var i = 0; i < arr.length; i++) {
    if (x && y) {
      return total
    } 
    if (arr[i] === 'x') {
      x = true
    } 
    if (arr[i] === 'o') {
      o = true
    } 
    if (x && arr[i] === 'x') total = 0
    if (o && arr[i] === 'o') total = 0
    if (x || y) total++
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2