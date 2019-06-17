/*

Add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
For the test cases, the parameter num will be any number from 1 to 1000. 

var max = 4;

1 + 2 + 3 + 4

var max1 = 6

1 + 2 + 3 + 4 + 5 + 6

*/

var max = 4, total = 0

for(var i = 1; i <= max; i++) {
  total += i
}

console.log(total)