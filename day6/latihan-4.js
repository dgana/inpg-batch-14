/*

SOAL 4

Buat looping angka 0 - 30 dengan incremental +3

Jika angka habis dibagi 15 tampilkan HACKFOX
Jika angka habis dibagi 6 tampilkan HACK
Jika angka habis dibagi 3 tampilkan FOX

Gunakan while atau for loop!

*/

for (var i = 0; i <= 30; i += 3) {
  if (i === 0) {
    
  } else if (i % 15 === 0) {
    console.log("HACKFOX = " + i);
  } else if (i % 6 === 0) {
    console.log("HACK = " + i);
  } else if (i % 3 === 0) {
    console.log("FOX = " + i);
  }
}

