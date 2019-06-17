/*

SOAL 3

sama seperti soal 2 namun tampilkan angka
ganjil atau genap di sebelah angkanya

Gunakan while atau loop!

Contoh : 

1 - Angka Ganjil
2 - Angka Genap
3 - Angka Ganjil
4 = Angka Genap
...
50 = Angka Genap

*/

for (var i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log("Angka Genap " + i);
  } else {
    console.log("Angka Ganjil " + i);
  }
}

