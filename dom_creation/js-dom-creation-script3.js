// Pertama, kita seleksi terlebih dahulu <body>
var body = document.body;

// Kemudian, kita buat sebuah element HTML <div> menggunakan createElement
var mainDiv = document.createElement("div");

// Untuk membuat <div id="main">, maka kita harus membuat HTML attribute id
var mainDivAttrId = document.createAttribute("id");

// Untuk memberikan nilai kepada id, maka kita gunakan .value
mainDivAttrId.value = "main";

// id="main" kita sudah siap. Sekarang kita harus menambahkan attribute tersebut ke mainDiv
mainDiv.setAttributeNode(mainDivAttrId);

// mainDiv kita sudah menjadi <div id="main">. Saatnya kita tambahkan ke dalam <body>
// Karena Kita akan meletakkan <div id="main"> di dalam <body>, maka kita gunakan appendChild
body.appendChild(mainDiv);

// Selanjutnya, kita akan mengulangi hal yang serupa untuk menambahkan <div id="inside-main">
var insideMainDiv = document.createElement("div");

// Selain menggunakan .value kemudian setAttributeNode, kita bisa menggunakan shorthand berikut
insideMainDiv.setAttribute("id", "inside-main");

// <div id="inside-main"> kita sudah siap, saatnya di append sebagai child ke <div id="main">
mainDiv.appendChild(insideMainDiv);

// Selanjutnya, kita akan mencoba membuat sebuah <h1> dengan isi teks didalamnya.
var h1 = document.createElement("h1");

// Untuk membuat isi teks di dalam h1, kita bisa menggunakan createTextNode
var h1Text = document.createTextNode("Heading Sample 1");

// Kita append text ke dalam <h1>
h1.appendChild(h1Text);

// Kemudian, kita append h1 sebagai child dari <div id="inside-main">
insideMainDiv.appendChild(h1);
