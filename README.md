# Fundamental-JavaScript

To learn fundamental javascript

## Install nodemon di linux

`sudo npm install -g nodemon`

### Cara Penggunaannya

`nodemon [nama file]`
<br>
penjelasan lebih lanjut [disini](https://www.youtube.com/watch?v=xIcXqKEUpAw)

## Data Types

### Check a Data Type

` let x = "hello world";` <br>
`let y = 10;` <br>
`console.log(typeof x); //string` <br>
`console.log(typeof y); //number`

### Tipe Data Number

#### integer dan float

`let num1 = 1 //integer`<br>
`let num2 = 1.5 //float`

#### Angka Spesial

`console.log(2 / 0); // Infinity` <br>
`console.log(-2 / 0); // -Infinity` <br> `console.log(0 / 0); //NaN` <br>
`console.log(100 / "sepuluh"); // NaN` <br> `console.log(100 / "10") // 10` <br>
`console.log(10 - "1"); // 9 ` <br>
`console.log(10 + "1"); // 101` <br>
` console.log(100 \* "10"); //1000` <br>
`console.log(123e5); //12300000` <br>
`console.log(123e-5); //0.00123` <br>

#### isNaN()

Untuk mengecek data sebuah variabel NaN atau bukan, jikan NaN method ini akan mengembalikan nilai true jika bukan NaN method ini akan mengembalikan nilai false

`console.log(isNaN(10)); //false` <br>
`console.log(isNaN("7")); //false` <br>
`console.log(typeof "7"); //stirng` <br>
`console.log(isNaN("contoh")); //true`

#### Number.isInteger()

Untuk mengecek value sebuah variabel integer atau bukan, jika integer method ini akan mengembalikan nilai true tetapi jika bukan method ini akan mengambalikan false

`console.log(Number.isInteger(1)); //true` <br>
`console.log(Number.isInteger(2.5)); //false` <br>
`console.log(Number.isInteger("2")); //false` <br>
`console.log(Number.isInteger("tiga")); //false` <br>

### Number Methods

#### toString()

Digunakan untuk mengembalikan/mengubah tipe data suatu variabel menjadi string <br>

`let number = 23010;` <br>
`console.log(typeof number); //number` <br>
`let tostring = number.toString();` <br>
`console.log(typeof tostring); //string` <br>

#### toExponential()

Digunakan untuk mengubah format penulisan data number menjadi format exponensial dan merubah tipe datanya menjadi string <br>

`let number2 = 23.3;` <br>
`console.log(typeof number2); //number`

`console.log(number2.toExponential()); //2.33e+1` <br>
`console.log(typeof number2.toExponential()); //string` <br> <br>
Di dalam metode toExponential ini bisa ditambahkan parameter yang mana parameter ini akan menentukan jumlah angka di belakang koma, seperti contoh dibawah ini

`console.log(number2.toExponential(1)); //2.3e+1` <br>
`console.log(typeof number2.toExponential(1)); //string`

`console.log(number2.toExponential(2)); //2.33e+1` <br>
`console.log(typeof number2.toExponential(2)); //string`

`console.log(number2.toExponential(3)); //2.330e+1` <br>
`console.log(typeof number2.toExponential(3)); //string`

`console.log(number2.toExponential(4)); //2.3300e+1` <br>
`console.log(typeof number2.toExponential(4)); //string`

#### toFixed()

Untuk mengembalikan string dan ditulis dengan jumlah desimal yang ditentukan

`let numberFixed = 6.33;`<br>
`console.log(typeof numberFixed) //number ;` <br> <br>

Sama seperti metode toExponential, di metode toFixed juga bisa ditambahkan parameter yang mana parameter ini akan menentukan jumlah angka di belakang koma, seperti contoh dibawah ini

`console.log(numberFixed.toFixed()); //6` <br>
`console.log(typeof numberFixed.toFixed()); //string`

`console.log(numberFixed.toFixed(1)); //6.3` <br>
`console.log(typeof numberFixed.toFixed(1)); //string`

`console.log(numberFixed.toFixed(2)); //6.33` <br>
`console.log(typeof numberFixed.toFixed(2)); //string`

`console.log(numberFixed.toFixed(3)); //6.330` <br>
`console.log(typeof numberFixed.toFixed(3)); //string`

`console.log(numberFixed.toFixed(4)); //6.3300` <br>
`console.log(typeof numberFixed.toFixed(4)); //string`

#### toPrecission()

Untuk mengembalikan string, dengan number yang ditulis dengan ukuran panjang tertentu <br>
`let numberPrecission = 5.67;`<br>
`console.log(typeof numberPrecission); //number` <br>
`console.log(numberPrecission.toPrecision()); //5.67` <br>
`console.log(typeof numberPrecission.toPrecision()); //string`

di metode toPrecission juga bisa ditambahkan parameter yang mana parameter ini akan menentukan ukuran atau jumlah angka, seperti contoh dibawah ini

`console.log(numberPrecission.toPrecision(1)); //6` <br>
`console.log(typeof numberPrecission.toPrecision(1)); //string`

`console.log(numberPrecission.toPrecision(2)); //5.7` <br>
`console.log(typeof numberPrecission.toPrecision(2)); //string`

`console.log(numberPrecission.toPrecision(3)); //5.67` <br>
`console.log(typeof numberPrecission.toPrecision(3)); //string`

`console.log(numberPrecission.toPrecision(4)); //5.670` <br>
`console.log(typeof numberPrecission.toPrecision(4)); //string`

`console.log(numberPrecission.toPrecision(5)); //5.6700` <br>
`console.log(typeof numberPrecission.toPrecision(5)); //string`

### Convert to Number

#### ParseInt()

Untuk mengembalikan argumentnya menjadi float

`console.log(parseInt(2)); //2` <br>
`console.log(typeof parseInt(2)); //number` <br>

`console.log(parseInt(3.9)); //3` <br>
`console.log(typeof parseInt(3.9)); //number` <br>

`console.log(parseInt("10")); //10` <br>
`console.log(typeof "10"); //string` <br>
`console.log(typeof parseInt("10")); //number` <br>

`console.log(parseInt("10.5")); //10` <br>
`console.log(typeof parseInt("10.5")); //number` <br>

`console.log(parseInt("oke")); //NaN;` <br>
`console.log(typeof parseInt("oke")); //number` <br>

#### parseFloat()

Untuk mengembalikan argumentnya menjadi float

`console.log(10); //10` <br>
`console.log(parseFloat(11.45)); //11.45` <br>
`console.log(parseFloat(11.6)); //11.6` <br>

`console.log(parseFloat("10")); //10` <br>
`console.log(typeof parseFloat("10")); //number`

`console.log(parseFloat("10.45")); //10.45` <br>
`console.log(parseFloat("10 45")); //10`

`console.log(parseFloat("10 years")); //10` <br>
`console.log(typeof parseFloat("10 years")); //number`

`console.log(parseFloat("years 10")); //NaN` <br>
`console.log(typeof parseFloat("years 10")); //number`

## Function

### Declaration Function

Berikut format penulisannya:

```
function namaFunction(param1, param2) {
    block code
}
```

berikut cara memanggilnya: <br>
`namaFunction(arg1, arg2)`

berikut contohnya:

```
function hello(name) {
  console.log(`hello ${name}`);
}

hello("john"); //hello john
```

### Expression Function

berikut format penulisannya:

```
let namaFunction = function(param1, param2) {
    block code
}
```

berikut cara memanggilnya: <br>
`namaFunction(arg1, arg2)` <br>

berikut contohnya:

```
let morning = function (name) {
  console.log(`good morning ${name}`);
};

morning("john"); //good morning john
```

### Arrow Function

berikut format penulisannya:

```
let namaFunction = (param1, param2) {
    block code
}
```

berikut cara memanggilnya: <br>
`namaFunction(arg1, arg1)`

berikut contohnya:

```
let night = (name) => {
console.log(`good night ${name}`);
};

night("john"); //goog night john
```

## Array

Tipe data yang digunakan untuk manampung kumpulan elemen (nilai atau variabel), yang tiap – tiap elemennya memiliki index.

### Kenapa Array

berikut beberapa keunggulan dari penggunaan array:

- mempermudah pengelolaan nilai/data/value (penelusuran dan pencarian)
- manajemen memori (lebih ringan memori) , karena tidak memerlukan banyak variabel

### Membuat Array

#### Array Literal

Array literal adalah cara termudah untuk membuat array.

```
const akatsuki = ["Deidara", "Itachi", "Hidan", "Kisame"];
console.log(akatsuki); //[ 'Deidara', 'Itachi', 'Hidan', 'Kisame' ]
```

Kita juga bisa membuat array kosong, lalu menambahkan value untuk dijadikan elemen-elemennya:

```
const jinchuriki = [];
jinchuriki[0] = "Utakata";
jinchuriki[1] = "Naruto";
jinchuriki[2] = "Gaara";
jinchuriki[3] = "Killer Bee";

console.log(jinchuriki); //[ 'Utakata', 'Naruto', 'Gaara', 'Killer Bee' ]
```

#### Keyword New

Kita juga bisa membuat array menggunakan keyword New

```
const tim7 = new Array("Naruto", "Sasuke", "Sakura");
console.log(tim7); //[ 'Naruto', 'Sasuke', 'Sakura' ]
```

### Access Array

Kita dapat mengakses elemen array dengan mengacu pada nomor indeks:

```
const tim10 = ["Asuma", "Ino", "Chouji", "Shikamaru"];
console.log(tim10[0]); //Asuma
```

### Length Property

Length Property dari array mengembalikan panjang array (jumlah elemen array).

```
const tim8 = ["Akamaru", "Hinata", "Kiba", "Shino", "Kurenai"];
console.log(tim8.length); //5
```

### Accessing The First and Last Array Element

```
const timGai = ["Gai", "Neji", "Lee", "Tenten"];
console.log(timGai[0]); //Gai
console.log(timGai[timGai.length - 1]); //Tenten
```

### Looping Array Elements

```
const timEbisu = ["Ebisu", "Konohamaru", "Moegi", "Udon"];
let txt = "";

for (let i = 0; i < timEbisu.length; i++) {
  txt += `${timEbisu[i]} \n`;
}

console.log(txt);
// Ebisu
// Konohamaru
// Moegi
// Udon
```

Kita juga dapat melakukan looping menggunkan forEach

```
const fruits = ["banana", "orange", "apple", "mango"];
let txt2 = "";
fruits.forEach(displayer);

function displayer(value) {
  txt2 += `${value} \n`;
}

console.log(txt2);
// banana
// orange
// apple
// mango
```

### Adding Array Element

Cara termudah untuk menambahkan elemen baru ke dalam array adalah menggunakan metode push() :

```

const hokage = [
  "Hashirama",
  "Tobirama",
  "Hiruzen",
  "Minato",
  "Tsunade",
  "Kakashi",
];

console.log(hokage);
//[ 'Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi' ]

hokage.push("Naruto");
console.log(hokage);
//['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto' ]
```

Elemen baru juga dapat ditambahkan ke array menggunakan properti length:

```
hokage[hokage.length] = "Sarada";
console.log(hokage);
//['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sarada' ]
```

### How to Recognize an Array

Saat kita menggunakan operator typeof untuk mencari tahu apakah sebuah variabel array ata bukan, operator tersebut akan mereturn object

```
const yonko = ["Big Mom", "Shirohige", "Shanks", "Kaido"];
console.log(typeof yonko); //object
```

Untuk mengatasi masalah ini ECMAScript 5 (JavaScript 2009) mendefinisikan metode Array.isArray():

```
console.log(Array.isArray(yonko)); //true
```

Method ini akan menggembalikan true jika variabel yang dimaksud benar array, dan akan mereturn false jika sebaliknya

kita juga bisa menggunakan operator instanceof

```
console.log(yonko instanceof Array); //true
```

Operator ini jugan akan mereturn true jika variabel yang dituju dibuat dengan konstruktor tertentu (dalam hal ini Array), dan akan mereturn false jika sebaliknya

## Callbacks

Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain. Teknik ini memungkinkan suatu fungsi untuk memanggil fungsi lain. Fungsi callbakc dapat dijalankan setelah fungsi lain selesai dijalankan

### Sequence Control

Terkadang kita ingin memiliki kontrol yang lebih baik saat menjalankan suatu fungsi. Misalkan kita ingin melakukan perhitungan, lalu menampilkan hasilnya. Seperti di contoh berikut kita dapat memanggil fungsi kalkulator (myCalculator), menyimpan hasilnya, lalu memanggil fungsi lain (myDisplayer) untuk menampilkan hasilnya:

```
function myCalculator(num1, num2) {
  return num1 + num2;
}

function displayer(some) {
  console.log(some);
}

displayer(myCalculator(2, 6)); //8

```

Atau kita bisa memanggil function kalkulator (myCalculator2) dan membiarkan function kalkulator tersebut memanggil function displayer2 untuk menampilkan hasil dari funnction kalkulator.

```
function myCalculator2(num1, num2) {
  let sum = num1 + num2;
  displayer2(sum);
}

myCalculator2(3, 3); //6

function displayer2(some) {
  console.log(some);
}
```

Masalah dengan contoh pertama di atas adalah Anda harus memanggil dua fungsi untuk menampilkan hasilnya.

Masalah dengan contoh kedua, adalah Anda tidak dapat mencegah fungsi kalkulator menampilkan hasilnya.

Karena problem inilah kita butuh Callbakcs

### Callbacks JavaScript

Callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain.

#### example 1

Menggunakan callback, Anda dapat memanggil fungsi kalkulator (myCalculator3) dengan callback (myCallback), dan biarkan fungsi kalkulator menjalankan callback setelah perhitungan selesai:

```
function myCalculator3(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator3(2, 5, displayer3); //7

function displayer3(some) {
  console.log(some);
}

```

#### example 2

```
const myNums = [4, 1, -20, -7, 5, 9, -6];

const posNums = removeNeg(myNums, (x) => x >= 0);

function removeNeg(numbers, callback) {
  let myArr = [];
  for (let x of numbers) {
    if (callback(x)) {
      myArr.push(x);
    }
  }
  return myArr;
}

console.log(posNums); //[ 4, 1, 5, 9 ]
```

## Asynchronous

fungsi yang berjalan paralel dengan fungsi lain disebut asynchronous.

### Waiting a Timeout

Saat menggunakan fungsi setTimeout JavaScript (), kita dapat menentukan fungsi callback untuk dieksekusi setelah waktu habis:

```
setTimeout(display, 3000);

function display() {
  console.log("Hallo World!");
}
```

Pada contoh di atas, function display digunakan sebagai callback. function display diteruskan ke setTimeout() sebagai argumen. 3000 adalah jumlah milidetik sebelum waktu habis, jadi display() akan dijalankan setelah 3 detik.

Kita juga bisa meneruskan seluruh fungsi sebagai argumen ke fungsi lain:

```
setTimeout(function () {displayer("Hello");}, 5000);

function displayer(some) {
  console.log(some);
}
```

Pada contoh di atas, function(){ displayer("Hello"); } digunakan sebagai panggilan balik. Ini adalah fungsi yang lengkap. Fungsi lengkap diteruskan ke setTimeout() sebagai argumen.

### Waiting for Interval

Saat menggunakan fungsi JavaScript setInterval(), kita dapat menentukan fungsi panggilan balik yang akan dijalankan untuk setiap interval:

```
setInterval(timeDisplayer, 1000);

function timeDisplayer() {
  let d = new Date();
  console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}
```

Pada contoh di atas, timeDisplayer() digunakan sebagai callback.
<br>timeDisplayer() diteruskan ke setInterval() sebagai argumen.
<br>
1000 adalah jumlah milisecond antar interval, jadi timeDisplayer() akan dipanggil setiap detik.

### Callback Alternatives

Dengan pemrograman asinkron, program JavaScript dapat memulai tugas yang berjalan lama, dan terus menjalankan tugas lain secara paralel.
<br>
Namun, program asinkron sulit untuk ditulis dan sulit untuk di-debug.
<br>
Oleh karena itu, sebagian besar metode JavaScript asinkron modern tidak menggunakan callback. Sebagai gantinya, dalam JavaScript pemrograman asinkron diselesaikan menggunakan Promises sebagai gantinya.

## Promise

Memproduksi kode" adalah kode yang dapat memakan waktu
<br>
"Mengkonsumsi kode" adalah kode yang harus menunggu hasilnya
<br>
Promise adalah objek JavaScript yang menautkan produksi kode dan konsumsi kode

Objek promise JavaScript berisi producing code and calls untuk consuming code, berikut syntax dari promise:

```
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

Saat producing code mendapatkan hasilnya, ia harus memanggil salah satu dari dua callback:

| Result  | Call                    |
| ------- | ----------------------- |
| Success | myResolve(result value) |
| Error   | myReject(error object)  |

### Promise Object Properties

Objek Janji JavaScript dapat berupa:

- Pending
- Fulfilled
- Rejected

Objek Janji mendukung dua properti: state dan result.
<br>
Saat objek Promise "pending" (working), resultnya adalah undefined.
<br>
Saat objek Promise "Fulfilled", resultnya adalah sebuah value.
<br>
Saat objek Promise "Rejected", resultnya adalah objek error

| myPromise.state | myPromise.result |
| --------------- | ---------------- |
| "pending"       | undefined        |
| "fulfilled"     | a result value   |
| "rejected"      | an error object  |

Kita tidak dapat mengakses properti Promise states dan result.
<br>
Kita harus menggunakan metode promise untuk meghandle promise.

### Promise How To

Berikut cara menggunakan promise:

```
myPromise.then(
  function(value) { /_ code if successful _/ },
  function(error) { /_ code if some error _/ }
);
```

Promise.then() membutuhkan dua argumen, satu callback untuk success dan satu lagi untuk failure.
<br>
Keduanya opsional, sehingga Anda dapat menambahkan panggilan balik hanya untuk success atau failure.

```
let myPromise = new Promise(function (resolve, reject) {
  // some code (try to change x to 5)
  let x = 0;

  if (x === 0) {
    resolve("ok");
  } else {
    reject("error");
  }
});

myPromise.then(
  function (value) {
    displayer(value);
  },
  function (error) {
    displayer(error);
  }
); //ok

function displayer(some) {
  console.log(some);
}
```

Untuk mendemonstrasikan penggunaan promise, kita akan menggunakan contoh callback dari bab sebelumnya:

- Waiting for a Timeout
- Waiting for a File

### Waiting For a Timeout

```
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello");
  }, 3000);
});

promise.then(function (value) {
  console.log(value);
}); //Hello
```

## Async Await

"Async dan Await membuat promise lebih mudah untuk ditulis"
<br>
Async membuat fungsi mengembalikan Janji
<br>
Await membuat fungsi menunggu Janji

### Async Syntax

Keyword async harus dicantumkan sebelum membuat fungsi yang mengembalikan promise:

```
async function myFunction() {
  return "Hello";
}
```

code diatas akan sama dengan:

```
function myFunction() {
return Promise.resolve("Hello");
}
```

Berikut adalah cara menggunakan promise:

```
myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

### example 1

```
function displayer(some) {
  console.log(some);
}

async function myFunction() {return "Hello";}

myFunction().then(
  function (value) {displayer(value);},
  function (error) {displayer(error);}
);
```

Atau bisa lebih sederhana jika kita hanya memerlukan value normal (respon normal bukan error):

```
function displayer2(some) {
  console.log(some);
}

async function myFunction2() {return "Hello2";}

myFunction2().then(
  function (value) {displayer2(value);}
  );
```

### Await

Keyword await hanya dapat digunakan di dalam fungsi async.
<br>
Keyword await membuat fungsi menjeda eksekusi dan menunggu sampai promise resolved sebelum melanjutkan:

```
let value = await promise;
```

Berikut contoh penggaunaan await

```
async function displayGreating() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("Hello World");
  });
  console.log(await myPromise);
}
displayGreating(); //Hello World
```

Dua argumen (resolve and reject) sudah ditentukan sebelumnya oleh JavaScript.
<br>
Kita tidak perlu membuatnya, Kita bisa memanggil salah satunya saat fungsi pelaksana sudah siap.
<br>
Dalam pengaplikasiannya terkadang kita tidak memerlukan fungsi reject.

```
async function displayGeating2() {
  let myPromise = new Promise(function (resolve) {
    resolve("Good Morning");
  });
  console.log(await myPromise);
}
displayGeating2();
```

### Async Await pada Waiting For a Timeout

```
async function displayGreeting() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Good Luck");
    }, 3000);
  });
  console.log(await myPromise);
}
displayGreeting();
```
