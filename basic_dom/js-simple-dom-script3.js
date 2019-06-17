var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

var pageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementContent);
// isi <div id="page-title"> adalah Sample Page Title

// Mengambil isi elemen pageBoxElements yang pertama, yaitu index ke 0
var firstPageBoxElement = pageBoxElements[0];
var firstpageBoxElementContent = firstPageBoxElement.innerHTML;

// Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 1
var secondPageBoxElement = pageBoxElements[1];
var secondpageBoxElementContent = secondPageBoxElement.innerHTML;

// Mengambil isi elemen pageBoxElements yang ketiga, yaitu index ke 2
var thirdPageBoxElement = pageBoxElements[2];
var thirdpageBoxElementContent = thirdPageBoxElement.innerHTML;

// Menampilkan isi elemen dengan console.log
console.log(
  'isi <div class="page-box"> yang pertama:' + firstpageBoxElementContent
);
console.log(
  'isi <div class="page-box"> yang kedua:' + secondpageBoxElementContent
);
console.log(
  'isi <div class="page-box"> yang ketiga:' + thirdpageBoxElementContent
);
