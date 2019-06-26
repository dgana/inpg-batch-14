/**
 * SOAL 2
 * 
 * Reverse input
 */

 function reverseText(text) {
   var result = ''
   for (var i = text.length - 1; i >= 0; i--) {
     result += text[i]
   }
   return result
 }

 console.log(reverseText('lorem ipsum dollor'))