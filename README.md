# Fundamental-JavaScript

To learn fundamental javascript

## Install nodemon di linux

`sudo npm install -g nodemon`

### Cara Penggunaannya

`nodemon [nama file]`
<br>
penjelasan lebih lanjut [disini](https://www.youtube.com/watch?v=xIcXqKEUpAw)

## Data Types

Tipe data adalah pengelompokan data berdasarkan isi dan sifatnya. Secara garis besar tipe data dapat dikategorikan menjadi tiga macam yaitu tipe data dasar (primitive data type), tipe data bentukan (composite data type) dan tipe data abstrak (abstract data type).

- Integer <br>
  Merupakan bilangan bulat (-1, -2, -3, 0, 1, 2, 3)
- Float atau double (bilangan real) <br>
  Merupakan bilangan yang mengandung pecahan desimal, seperti 3.45, 6.234.
- Char <br>
  Merupakan semua huruf yang ada di dalam alfabet, tanda baca, dan karakter spesial.
  Bolean (logika) <br>
  Merupakan tipe data logika yang hanya terdiri dari dua value, yaitu benar atau salah. Value benar biasanya ditulis true atau angka 1, sedangkan value salah ditulis dengan false atau 0

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

Untuk mengembalikan argumentnya menjadi integer (bilangan bulat).

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
let namaFunction = (param1, param2) => {
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

## Object

Object merupakan kumpulan nilai, yang memiliki nama. Berikut cara penulisan Properti dan Method dalam object:

```
let car = {
  //Property
  type: "Fiat",
  model: 500,
  color: "white",

  //method
  start: () => {
    console.log("start");
  },
  drive: () => {
    console.log("drive");
  },
  stop: () => {
    console.log("stop");
  },
};
```

Berikut cara memanggilnya

```
// properti
console.log(car.type); //Fiat
console.log(car.model); //500
console.log(car.color); //white

car.start(); //start
car.drive(); //drive
car.stop(); //stop
```

### Cara Memanggil (acceess) Object

Properti di dalam Object dapat dipanggil menggunakn dot(.) atau kurung siku([ ]). Untuk properi yang nama key-nya lebih dari satu kata hanya dapat diakses menggunakan kurung siku:

```
let person4 = {
  "full name": "Eren Jeager",
  nickName: "Eren",
};

console.log(person4.nickName); //Eren
console.log(person4["full name"]); //Eren Jeager
```

### Penggunaan key word This

This adalah sebuah keyword khusus yang merujuk pada pada objek pemiliknya. Keyword dis tidak bisa digunakan untuk arrow function, berikut contoh penggunaanya untuk object:

```
let person1 = {
  name: "Eren",
  time: "saturday",
  place: "Wakanda",
  logIt: function () {
    console.log(`${this.name} visited ${this.place} on ${this.time}`);
  },
};

person1.logIt(); //Eren visited Wakanda on saturday
```

Object dapat dibuat dengan cara Object Literal, Function declaration, constructor function (keyword new) dan object.create()

#### Object Literal

```
let shinobi1 = {
  name: "Uzumaki Naruto",
  "main jutsu": "kage bunshin no jutsu",
  secondJutsu: "Rasengan",
};

console.log(shinobi1.name); //Uzumaki Naruto
console.log(shinobi1["main jutsu"]); //kage bunshin no jutsu
console.log(shinobi1.secondJutsu); //Rasengan
```

Kekurangan object literal, saat kita akan membuat lebih dari satu object meskipun propertinya sama kita harus menuliskannya satu – satu.

#### Function Declaration

```
let dataShinobi = (name, mainJutsu, secondJutsu) => {
  let shinobi = {};
  shinobi.name = name;
  shinobi["main jutsu"] = mainJutsu;
  shinobi.secondJutsu = secondJutsu;
  return shinobi;
};

console.log(dataShinobi("Uciha Sasuke", "Chidori", "Susanoo"));
//{ name: 'Uciha Sasuke', 'main jutsu': 'Chidori', secondJutsu: 'Susanoo'}

let naruto = dataShinobi("Uzumaki Naruto", "Kage bunshin no jutsu", "Rasengan");
console.log(naruto);
//{ name: 'Uzumaki Naruto', 'main jutsu': 'Kage bunshin no jutsu', secondJutsu: 'Rasengan'}
console.log(naruto.name); //Uzumaki Naruto
console.log(naruto["main jutsu"]); //Kage bunshin no jutsu
console.log(naruto.secondJutsu); // Rasengan
```

Atau bisa juga dibuat seperti ini

```
let makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

let user1 = makeUser("john", 30);
console.log(user1); // { name: 'john', age: 30 }
console.log(user1.name); //john
console.log(user1.age); // 30
```

#### Constructor Function (Keyword New)

Marupakan function yang dikhususkan untuk membuat object. Biasanya nama functionnya diawali dengan huruf besar untuk membedakan dengan funtion declaration. <br><br>
Cara membuatnya hampir sama dengan function declaration bedanya di constructor ada keyword this yang menggantikan nama object (var namaObject) serta tidak perlu mendeklarasikan variabel dan tidak perlu menambahkan return diakhir function. <br> <br>
Cara memanggilnya juga mirip bedanya di constructor harus menggunakan keyword new sebelum nama functionnya.

```
function Akatsuki(nama, mainJutsu, secondJutsu) {
  this.nama = nama;
  this.mainJutsu = mainJutsu;
  this.secondJutsu = secondJutsu;
}

let itachi = new Akatsuki("Uchiha Itachi", "Genjutsu", "Sharingan");
console.log(itachi);
//Akatsuki {nama: 'Uchiha Itachi', mainJutsu: 'Genjutsu', secondJutsu: 'Sharingan'}

console.log(new Akatsuki("Kisame", "Doton", "Suiton"));
//Akatsuki { nama: 'Kisame', mainJutsu: 'Doton', secondJutsu: 'Suiton' }
```

### For in Loop Object

For in di dalam object digunakan untuk mengurai/memetakan semua properti di dalam object. Berikut syntaxnya:

```
for (let variable in object) {
  // code to be executed
}
```

Berikut contoh penggunaanya:

```
const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text); //John Doe 25
```

Berikut contoh lain penggunaan for in

```
let numObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(numObj);

for (properti in numObj) {
  console.log(`Obj.${properti}= ${numObj[properti]}`);
}

// Obj.a = 1;
// Obj.b = 2;
// Obj.c = 3;
// Obj.d = 4;
```

```
let person8 = { name: "John", email: "John@mail.com", age: 25, active: true };

let txt = "";
for (let prop in person8) {
  txt += `${prop} =  ${person8[prop]} \n`;
}
console.log(txt);
// name =  John
// email =  John@mail.com
// age =  25
// active =  true
```

### Menambahkan Properti

```

const person2 = {
fname: "John",
lname: "Doe",
age: 25,
};
console.log(person2); //{ fname: 'John', lname: 'Doe', age: 25 }

person2.nasionality = "english";
console.log(person2); //{ fname: 'John', lname: 'Doe', age: 25, nasionality: 'english' }

```

### Check Properti

Kita bisa memeriksa apakah properti yang kita cari tersebut ada atau tidak di dalah suatu object menggunakan operator `in`, jika ada operator ini akan mengembalikan true jika tidak ad operator ini akan mengembalikan false

```

let makeUser = (name, age) => {
return {
name: name,
age: age,
};
};

let user1 = makeUser("john", 30);
console.log(user1); // { name: 'john', age: 30 }
console.log("age" in user1); //true
console.log("address" in user1); // false

```

### Edit Properti

Berikut cara untuk perbarui property dalam object, bisa menggunakan dot (.) ataupun kurung siku ([])

```

let book = {
title: "harry poter",
author: "J K Rowling",
year: 2000,
};

console.log(book.title); //harry poter
book.title = "harry poter jilid 2";
console.log(book.title); //harry poter jilid 2

console.log(book["year"]); //2000
book["year"] = 2002;
console.log(book["year"]); //2002

```

### Menghapus Properti

```

const person3 = {
fname: "John",
lname: "Doe",
age: 25,
eyeColor: "blue",
};
console.log(person3); //{ fname: 'John', lname: 'Doe', age: 25, eyeColor: 'blue' }

delete person3.eyeColor;
console.log(person3); //{ fname: 'John', lname: 'Doe', age: 25 }

delete person3["age"];
console.log(person3); //{ fname: 'John', lname: 'Doe' }

```

### Nested Objects

Nilai di dalam sebuah object dapat berupa object lain

```

myObj = {
name: "John",
age: 30,
cars: {
car1: "Ford",
car2: "BMW",
car3: "Fiat",
},
};

```

Kita dapat mengaksesnya menggunakan menggunakan notasi dot atau braket.

```

console.log(myObj.cars.car1); //Ford
console.log(myObj.cars["car2"]); //BMW
console.log(myObj["cars"]["car3"]); //Fiat

```

Atau bisa juga dengan cara ini

```

let p1 = "cars";
let p2 = "car1";
console.log(myObj[p1][p2]); //Ford

```

### Konversi Ke Array

Properti dalam object dapat dikonversi menjadi array

```

let person5 = { name: "utsman", age: 30, address: "ta'if" };
let myArr = Object.values(person5);

console.log(myArr); //[ 'utsman', 30, "ta'if" ]

```

### JSON.stringify()

Dengan menggunakan JSON.stringify() semua property dalam object dapat ditampilkan dalam bentuk string

```

let person6 = { name: "Goku", age: 27, address: "wakanda" };
let str = JSON.stringify(person6);
console.log(str); //{"name":"Goku","age":27,"address":"wakanda"}

```

### JSON.stringify Dates

JSON.stringify dapat digunakan untuk mengkonversi tanggal menjadi string

```

let person7 = { name: "Usop", today: new Date() };

console.log(JSON.stringify(person7)); //{"name":"Usop","today":"2022-11-29T15:39:27.286Z"}

```

### Stringify Functions

JSON.stringify tidak akan mengubah function menjadi string, hasilnya akan seperti ini:

```

let shinobi = {
  name: "Sikamaru",
  age: 28,
  jutsu: function () {
  return "kagemane no jutsu";
  },
};

console.log(JSON.stringify(shinobi)); //{"name":"Sikamaru","age":28}

```

Tetapi ini dapat diakali dengan cara mengubah function tersebut menjadi string menggunakan method toString()

```

shinobi.jutsu = shinobi.jutsu.toString();

console.log(JSON.stringify(shinobi));
//{"name":"Sikamaru","age":28,"jutsu":"function () {\n return \"kagemane no jutsu\";\n }"}

```

### Pilar OOP

[referensinya disini](https://medium.com/codeacademia/belajar-fundamental-opp-dengan-javascript-c1b721677ce9) lagi males buat dokumentasi

### Accessors (Getters and Setters)

Accessors adalah fungsi untuk mendapatkan dan mengatur sebuah nilai, tapi mereka mirip seperti properti biasa pada kode eksternal.

#### Getter

Digunanakan untuk mendapatkan value dari properti lain

```
let person9 = {
  name: "John",
  age: 27,
  language: "English",
  get lang() {
    return this.language;
  },
};

console.log(person9.lang); //English
```

Dari luar, properti accessor tampak seperti variabel pada umumnya. Itulah ide dari properti accesor. Kita tidak memanggil person9.lang melaui fungsi, Namun kita membacanya secara biasa: properti getter berjalan di belakang layar.

#### Setter

Digunakan untuk menetapkan / memperbarui nilai suatu properti dalam objek

```
let org2 = {
  fname: "John",
  lname: "Doe",
  language: "Java",
  set lang(value) {
    this.language = value;
  },
};

org2.lang = "goLang";
console.log(org2.language);
```

### Prototypes

Prototype digunakan untuk mewariskan property atau method ke object dibawahnya/keturunannya, biasanya dibuat menggunakan object constructor

#### Prototype Untuk Property

```
let Akatsuki2 = function (name, age) {
  this.name = name;
  this.age = age;
};

let obito = new Akatsuki2("obito", 30);
console.log(obito); //Akatsuki2 { name: 'obito', age: 30 }
Akatsuki2.prototype.nasionality = "Konoha";
console.log(obito); //Akatsuki2 { name: 'obito', age: 30 }
console.log(obito.nasionality); //Konoha
```

#### Prototype Untuk Method

```
let Akatsuki3 = function (name, age) {
  this.name = name;
  this.age = age;
};

let ucihaItachi = new Akatsuki3("Uchiha Itachi", 27);
console.log(ucihaItachi); //Akatsuki3 { name: 'Uchiha Itachi', age: 27 }
Akatsuki3.prototype.showNameAge = function () {
  console.log(`His namae is ${this.name} and his age is ${this.age}`);
};
ucihaItachi.showNameAge(); //His namae is Uchiha Itachi and his age is 27
```

### Iterables

#### Iterables pada String

```
const str2 = "productive";
for (let prop of str2) {
  console.log(prop);
}
// p
// r
// o
// d
// u
// c
// t
// i
// v
// e
```

#### Iterables untuk Array

```
const letter = ["a", "b", "c"];
for (let prop of letter) {
  console.log(prop);
}
// a
// b
// c
```

#### Home Made Iterable

Iterable ini mengembalikan value tanpa akhir setiap kali `next()` dipanggil:

```
function myNumber() {
  let x = 0;
  return {
    next: function () {
      x += 10;
      return { value: x, done: false };
    },
  };
}
const n = myNumber();
console.log(n.next()); //{ value: 10, done: false }
console.log(n.next().value); //20
console.log(n.next().value); //30
console.log(n.next().value); //40
```

#### Home Made Iterable Menggunakan for of

```
let myNumbers = {};
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

for (const num of myNumbers) {
  console.log(num);
}
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
```

### Set()

Set() adalah objek yang berisikan nilai-nilai yang bersifat unik, artinya dalam objek tersebut hanya ada satu nilai saja.

```
const letters = new Set(["a", "b", "c", "a", "c", "b", "C"]);
console.log(letters); //Set(4) { 'a', 'b', 'c', 'C' }
console.log(letters.size); //4
```

#### Membuat Set dengan method add value

```
const letters2 = new Set();
letters2.add(1);
letters2.add(2);
letters2.add(2);
letters2.add(3);
console.log(letters2); //Set(3) { 1, 2, 3 }
console.log(letters2.size); //3
```

#### Membuat Set dengan Method add Variable

```
let numb = new Set();
let a = 1;
let b = 2;
let c = 3;
let d = 1;
let e = 3;
numb.add(a);
numb.add(b);
numb.add(c);
numb.add(d);
numb.add(e);

console.log(numb); //Set(3) { 1, 2, 3 }
console.log(numb.size); //3
```

#### forEach Pada Set

forEach digunakan untuk mereturn setiap value pada Set()

```
let letters3 = new Set(["a", "b", "c", "d"]);
let txt2 = "";
letters3.forEach(function (value) {
  txt2 += value + "\n";
});

console.log(txt2);
// a
// b
// c
// d
```

#### Values() Method

Digunakan untuk mereturn objek Iterator baru yang berisi semua item yang tersedia dalam set.

```
let nums = new Set([1, 2, 3, 4]);
let numsVal = nums.values();
console.log(numsVal); //[Set Iterator] { 1, 2, 3, 4 }
console.log(numsVal.next().value); //1
console.log(numsVal.next().value); //2
console.log(numsVal.next().value); //3
console.log(numsVal.next().value); //4
```

#### for of pada values method

for of dapat dimanfaatkan untuk mengakses/mengiterasi object iterator yang dihasilkan dari values method.

```
let txt3 = "";
let letter3 = new Set(["a", "b", "c", "e"]);

for (let x of letter3.values()) {
  txt3 += x + "\n";
}
console.log(txt3);
// a
// b
// c
// e
```

#### Method Keys()

Set tidak memiliki kunci. Fungsinya sama seperti method value() untuk mengembalikan value yang ada di dalam Set
Method keys ini membuat Sets kompatibel dengan Maps.

```
let nums2 = new Set([1, 2, 3, 4]);
console.log(nums2.keys()); //[Set Iterator] { 1, 2, 3, 4 }
```

#### Method Entries()

Set tidak memiliki key, Sehingga entri() akan mengembalikan pasangan [value, value] bukannya pasangan [key, value]. Ini membuat Sets kompatibel dengan Maps

```
let letters4 = new Set(["a", "b", "c", "d"]);
let iterator = letters4.entries();

let txt4 = "";
for (x of iterator) {
  txt4 += x + "\n";
}

console.log(txt4);
// a,a
// b,b
// c,c
// d,d
```

#### method delete()

berfungsi menghapus value pada element Set yang diletakan pada parameter di method ini

```
let nums3 = new Set([1, 2, 3, 4, 5, 6]);
console.log(nums3); //Set(6) { 1, 2, 3, 4, 5, 6 }
nums3.delete(5);
console.log(nums3); //Set(5) { 1, 2, 3, 4, 6 }
```

#### method clear()

Digunakan untuk menghapus semua value pada Set.

```
let nums4 = new Set([1, 2, 3, 4, 5, 6]);
console.log(nums4); //Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(nums4.clear()); //undefined
console.log(nums4); //Set(0) {}
```

#### Membuat Array Uniq dari Array yg Valuenya Terduplikasi

```
let arrDuplicate = [1, 2, 1, 3, 1, 2, 4, 5, 6, 3, 1, 3, 4];
let setArr = new Set(arrDuplicate);
console.log(setArr); // Set(6) { 1, 2, 3, 4, 5, 6 }
let uniqArr = [...setArr];
console.log(uniqArr); //[ 1, 2, 3, 4, 5, 6 ]

```

#### method has()

Digunakan untuk memeriksa nilai pada Set, akan bernilai true apabila nilai yang di berikan pada parameter has ada pada element object set jika sebaliknya akan menghasilkan nilai false

```
let nums5 = new Set([1, 2, 3, 4, 5]);
console.log(nums5.has(1)); //true
console.log(nums5.has(8)); //false
```

#### Contoh Kasus Yang Dipecahkan Menggunakan Set

[ref](https://code.tutsplus.com/id/tutorials/understanding-sets-with-javascript--cms-29789)

##### Union

Yaitu mengelompokkan nilai diantara dua kelompok dengan mengabaikan duplikat pada nilai yang terdapat di kedua kelompok tersebut. Seperti contoh berikut mengumpulkan semua value yang terdapat di kelompok engineering dan freelancers berikut

```
let frontEnd = ["eren", "itachi", "naruto", "sasuke", "sakura", "hinata", "kakasi", lee", "sikamaru", ];

let backEnd = [ "mikasa", "armin", "luffy", "naruto", "kakasi", "sakura", "goku", "hinata", "boruto", "sasuke",];
let programmer = new Set([...frontEnd, ...backEnd]);

console.log(frontEnd); //['eren', 'itachi', 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi', 'lee', 'sikamaru']
console.log(backEnd); //['mikasa', 'armin', 'luffy',  'naruto', 'kakasi', 'sakura', 'goku',   'hinata', 'boruto', 'sasuke']
console.log(programmer); //Set(14) {  'eren', 'itachi', 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi', 'lee', 'sikamaru', 'mikasa', 'armin', 'luffy', 'goku', 'boruto'}
```

#### Persimpangan

Digunakan untuk mencari value yang ada di kedua kelompok, seperti contoh berikut:

```
let frontEnd2 = new Set([
  "eren",
  "itachi",
  "naruto",
  "sasuke",
  "sakura",
  "hinata",
  "kakasi",
  "lee",
  "sikamaru",
]);
let backEnd2 = new Set([
  "mikasa",
  "armin",
  "luffy",
  "naruto",
  "kakasi",
  "sakura",
  "goku",
  "hinata",
  "boruto",
  "sasuke",
]);

console.log(frontEnd2);
//Set(9) {
//   'eren',
//   'itachi',
//   'naruto',
//   'sasuke',
//   'sakura',
//   'hinata',
//   'kakasi',
//   'lee',
//   'sikamaru'
// }
console.log(backEnd2);
// Set(10) {
//   'mikasa',
//   'armin',
//   'luffy',
//   'naruto',
//   'kakasi',
//   'sakura',
//   'goku',
//   'hinata',
//   'boruto',
//   'sasuke'
// }

let intersection = new Set([...frontEnd2].filter((x) => backEnd2.has(x)));
console.log(intersection); //Set(5) { 'naruto', 'sasuke', 'sakura', 'hinata', 'kakasi' }

```

#### Perbedaan

Case untuk mencari value yang ada di salah satu kelompok tetapi tidak ada di kelompok lainnya.

```
let frontEnd3 = new Set([
  "eren",
  "itachi",
  "naruto",
  "sasuke",
  "sakura",
  "hinata",
  "kakasi",
  "lee",
  "sikamaru",
]);
let backEnd3 = new Set([
  "mikasa",
  "armin",
  "luffy",
  "naruto",
  "kakasi",
  "sakura",
  "goku",
  "hinata",
  "boruto",
  "sasuke",
]);

console.log(frontEnd3);
//Set(9) {
//   'eren',
//   'itachi',
//   'naruto',
//   'sasuke',
//   'sakura',
//   'hinata',
//   'kakasi',
//   'lee',
//   'sikamaru'
// }
console.log(backEnd3);
// Set(10) {
//   'mikasa',
//   'armin',
//   'luffy',
//   'naruto',
//   'kakasi',
//   'sakura',
//   'goku',
//   'hinata',
//   'boruto',
//   'sasuke'
// }

let difference = new Set([...frontEnd3].filter((x) => !backEnd3.has(x)));
console.log(difference);
//Set(4) { 'eren', 'itachi', 'lee', 'sikamaru' }
```

### Map()

Map adalah sebuah koleksi dari elemen-elemen yang ada pada JavaScript yang tiap elemen ini disimpan sebagai pasangan KV (key, value). Hal ini memungkinkan untuk objek pada JavaScript Map untuk menahan objek dan nilai primitif sebagai kunci atau nilainya.

#### Membuat Map()

Membuat map dapat dilakukan dengan 2 cara yaitu menggunakan new Map() dan Map.Set().

##### new Map()

let fruits = new Map([
["apples", 500],
["bananas", 300],
["oranges", 200],
]);

console.log(fruits);
//Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
console.log(fruits.get("apples")); //500

##### Map.set()

```
let fruits2 = new Map();
fruits2.set("apple", 500);
fruits2.set("banana", 300);
fruits2.set("orange", 200);
console.log(fruits2);
//Map(3) { 'apple' => 500, 'banana' => 300, 'orange' => 200 }
console.log(fruits2.get("apple")); //500
```

#### Method get()

method get digunakan untuk mereturn value dari key pada map.

```
let fruits2 = new Map();
fruits2.set("apple", 500);
fruits2.set("banana", 300);
fruits2.set("orange", 200);

console.log(fruits2.get("apple")); //500
```

#### Method Size

Method size digunakan untuk mereturn jumlah elemen dalam Map

```
let seventhTeam = new Map([
  [1, "Naruto"],
  [2, "Sasuke"],
  [3, "Sakura"],
]);
console.log(seventhTeam);
//Map(3) { 1 => 'Naruto', 2 => 'Sasuke', 3 => 'Sakura' }
console.log(seventhTeam.size); //3
```

#### delete() method

Digunakan untuk menghapus element di dalam Map

```
let akatsuki = new Map([
  [1, "Itachi"],
  [2, "Pain"],
  [3, "Hidan"],
]);

console.log(akatsuki);
// Map(3) { 1 => 'Itachi', 2 => 'Pain', 3 => 'Hidan' }
akatsuki.delete(2);
console.log(akatsuki);
// Map(2) { 1 => 'Itachi', 3 => 'Hidan' }
```

#### clear() method

Digunakan untuk menghapus semua elemen di dalam map

```
let army = new Map([
  [1, "eren"],
  [2, "mikasa"],
  [3, "armin"],
]);

console.log(army);
//Map(3) { 1 => 'eren', 2 => 'mikasa', 3 => 'armin' }
army.clear();
console.log(army);
//Map(0) {}
```

#### has() method

Digunakan untuk memeriksa apakah key yang dicari ada atau tidak di dalam map, jika ada akan mereturn true dan akan mereturn false jika tidak ada

```
let mugiwaraTeam = new Map([
  [1, "Luffy"],
  [2, "Zoro"],
  [3, "Nami"],
  [4, "Usop"],
]);

console.log(mugiwaraTeam.has(3)); //true
console.log(mugiwaraTeam.has(6)); //false
```

#### forEach pada Map

```
let yonkou = new Map([
  [1, "Shirohige"],
  [2, "BigMom"],
  [3, "Kaido"],
  [4, "Shanks"],
]);

let txt5 = "";
yonkou.forEach(function (value, key) {
  txt5 += `${key}  = ${value} \n`;
});

console.log(txt5);
// 1  = Shirohige
// 2  = BigMom
// 3  = Kaido
// 4  = Shanks
```

#### entries() method

Metode entri() mengembalikan objek iterator dengan [key,values] di Peta:

```
let newYonkou = new Map([
  [1, "Shanks"],
  [2, "Buggy"],
  [3, "Teach"],
  [3, "Luffy"],
]);

let txt6 = "";
for (const x of newYonkou.entries()) {
  txt6 += `${x} \n`;
}
console.log(txt6);
```

#### keys() method

Metode keys() mengembalikan objek iterator dengan key di Map:

```
let hokage = new Map([
  [1, "Hashirama"],
  [2, "Sarutobi"],
  [3, "Minato"],
  [4, "Minato"],
  [5, "Tsunade"],
  [6, "Kakashi"],
  [7, "Naruto"],
]);

let txt7 = "";
for (const x of hokage.keys()) {
  txt7 += `${x} \n`;
}
console.log(txt7);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
```

#### values() method

Metode values() mengembalikan objek iterator dengan value dalam Map:

```
let hokage2 = new Map([
  [1, "Hashirama"],
  [2, "Sarutobi"],
  [3, "Minato"],
  [4, "Minato"],
  [5, "Tsunade"],
  [6, "Kakashi"],
  [7, "Naruto"],
]);

let txt8 = "";
for (const x of hokage2.values()) {
  txt8 += `${x} \n`;
}
console.log(txt8);
// Hashirama
// Sarutobi
// Minato
// Minato
// Tsunade
// Kakashi
// Naruto
```

#### Object as Key

Kita bisa membuat sebuah object dijadikan key dalam Map.

```
Key");
// Create Objects
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

// Create a Map
const fruits3 = new Map();

// Add the Objects to the Map
fruits3.set(apples, 500);
fruits3.set(bananas, 300);
fruits3.set(oranges, 200);

console.log(fruits3.get(apples)); //500
console.log(fruits3.get(bananas)); //300
```

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
