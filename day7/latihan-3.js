/*

var num1 = 2
var num2 = 8

4 + 7 + 12 + 15 + 20 + 23 + 28 + 31

var num3 = 4
var num4 = 3

8 + 15 + 24

var num5 = 3
var num6 = 6

6 + 11 + 18 + 23 + 30 + 35

*/

var num1 = 3;
var num2 = 6;
var total = 0;

for(var i = 0; i < num2; i++) {
  if(i % 2 === 0) {
    total += num1 * 2 * (i + 1)
  } else {
    total += (num1 * 2 * (i + 1)) - 1
  }
}

console.log(total)
