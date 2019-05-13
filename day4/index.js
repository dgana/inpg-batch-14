/*

SOAL 1

Grade A = > 85
Grade B = > 75 & < 85
GRADE C = > 65 & < 75
GRADE D = < 65

Tampilkan Grade Siswa sesuai nilai yang didapat

Buatlah PSEUDOCODE

*/

var score = prompt("nilai anda")
var skor = Number(score)

var grade;

if (skor >= 85) {
  grade = "A"
} else if (skor >= 75 && skor < 85) {
  grade = "B"
} else if (skor >= 65 && skor < 75) {
  grade = "C"
} else {
  grade = "D"
}

console.log(grade)

/*

SOAL 2

Sebuah restoran hanya dapat menampung 50 orang
setiap meja hanya dapat menampung 3 orang

Tugas:
Hitung sisa orang yang tidak duduk dan 
berapa meja yang terpakai!

Buatlah PSEUDOCODE
*/

/*

Simpan orang dengan value 3
Simpan sisaOrang dengan tanpa value
Simpan mejaTerpakai dengan value 0

WHILE orang < 50
  CALCULATE orang + 3
  CALCULATE mejaTerpakai + 1
  
CALCULATE sisaOrang 50 mod 3

DISPLAY mejaTerpakai dan sisaOrang

*/

var orang = 3;
var sisaOrang;
var mejaTerpakai = 0

while(orang < 50) {
  mejaTerpakai++
  orang += 3
}

sisaOrang = 50 % 3

console.log(mejaTerpakai)
console.log(sisaOrang)

/*
SOAL 3
STORE "kecepatan" to 20
STORE "penumpang" to 0
IF "penumpang" > 2
  MIN "kecepatan" by 5
ELSE IF "penumpang" = 4
  MIN "kecepatan" by 7
ELSE
  MIN "kecepatan" by 2
  
DISPLAY "kecepatan"
*/