/**
 *
 * @param {Number} nilai
 */
function getGrade(nilai) {
  var grade;
  if (nilai > 80) {
    grade = "A";
  } else if (nilai > 60 && nilai < 80) {
    grade = "B";
  }
  return grade;
}

console.log(getGrade(70));

/*

SOAL 1

Kalkulasi Grade A, B, C, D, E tergantung nilai murid

Jika Nilai 100 - 85 grade A
            84 - 75 grade B
            74 - 65 grade C
            64 - 55 grade D
            54 - 0 grade E
*/

/*

SOAL 2

Sebuah becak ketika dikayuh oleh pemiliknya yang tidak 
membawa penumpang memiliki kecepatan 20 km/jam. 
Jumlah penumpang yang bisa dibawa oleh becak tersebut 
bervariasi (maksimal 4 orang) dan kecepatan ketika 
becak itu dikayuh mengalami penurunun:

Lebih dari 2 orang kecepatan becak berkurang 5 km/jam

Maksimal penumpang kecepatan becak berkurang 7 km/jam

Selain itu kecepatan becak hanya berkurang 2 km/jam

Tampilkan kecepatan becak sekarang jika membawa x penumpang

Note: x bisa di isi nilai berapa saja (maksimal 4)
*/

/*

SOAL 3

Buat variable nama dengan value andre, password dengan value 123,
dan isLogin dengan value false. User diminta untuk masukkan nama, 
password, dan role (gunakan prompt).

Jika nama dan password sesuai maka ubah isLogin menjadi true,
keluarkan pesan (boleh dengan console.log atau alert) bahwa user berhasil login
jika gagal keluarkan pesan anda gagal login.

Jika berhasil login maka User kembali diminta rolenya sebagai apa.
Jika role adalah admin atau superadmin maka tampilkan pesan 
"You have all access as {role}" jika selain admin dan superadmin
maka tampilkan pesan "You have restricted access as {role}"


*/

// const nama = "andre"
// const password = '123'
// let isLogin = false

// let n = prompt("nama")
// let p = prompt("password")
// let r = prompt("role")

// if(n === nama && p === password) {
//   isLogin = true
// }

// if(isLogin) {
//   alert("successful Login")
//   if(r === "superadmin" || r === "admin") {
//     alert("you have all access as " + r)
//   } else {
//     alert("You have some access as " + r)
//   }
// } else {
//   alert("invalid name and password")
// }
