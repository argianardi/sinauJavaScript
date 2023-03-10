console.log("-------------------- Array Literal");
const akatsuki = ["Deidara", "Itachi", "Hidan", "Kisame"];
console.log(akatsuki); //[ 'Deidara', 'Itachi', 'Hidan', 'Kisame' ]

const jinchuriki = [];
jinchuriki[0] = "Utakata";
jinchuriki[1] = "Naruto";
jinchuriki[2] = "Gaara";
jinchuriki[3] = "Killer Bee";

console.log(jinchuriki); //[ 'Utakata', 'Naruto', 'Gaara', 'Killer Bee' ]

console.log("-------------------- keyword New");
const tim7 = new Array("Naruto", "Sasuke", "Sakura");
console.log(tim7); //[ 'Naruto', 'Sasuke', 'Sakura' ]

console.log("----------------- Access Array");
const tim10 = ["Asuma", "Ino", "Chouji", "Shikamaru"];
console.log(tim10[0]); //Asuma

console.log("------------------ Length Property");
const tim8 = ["Akamaru", "Hinata", "Kiba", "Shino", "Kurenai"];
console.log(tim8.length); //5

console.log("------------ Accessing Last and first Array Element");
const timGai = ["Gai", "Neji", "Lee", "Tenten"];
console.log(timGai[0]); //Gai
console.log(timGai[timGai.length - 1]); //Tenten

console.log("--------------- Looping");

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

console.log("--------------- Looping forEach");
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

console.log("--------- Adding Array Element");
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

hokage[hokage.length] = "Sarada";
console.log(hokage);
//['Hashirama', 'Tobirama', 'Hiruzen', 'Minato', 'Tsunade', 'Kakashi', 'Naruto', 'Sarada' ]

console.log("--------------- How to Recognize an Array");
const yonko = ["Big Mom", "Shirohige", "Shanks", "Kaido"];
console.log(typeof yonko); //object
console.log(Array.isArray(yonko)); //true
console.log(yonko instanceof Array); //true

console.log("-------------------------- Map mengelola angka -----------");

let angka = [1, 2, 3, 4, 5, 6];
let dobel = angka.map((x) => {
  return x * 2;
});
console.log(dobel); //[ 2, 4, 6, 8, 10, 12 ]

console.log("-------------------------- filter bilangan ganjil -----------");
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ganjil = values.filter((x) => x % 2 === 1);
console.log(ganjil);

console.log("------------------- Reduce (penjumlahan seluruh elemen)");
const values2 = [1, 2, 3, 4, 5];
const result = values2.reduce((previousVal, currentVal) => {
  return previousVal + currentVal;
});

console.log(result); // 15

console.log("----------------------------- indexOf");

let ar = [1, 2, 2, 3, 2, 4, 5, 6, 7, 2];
console.log(ar.indexOf(2)); // 1

console.log("----------------------------- lastIndexOf");

let ar2 = [1, 2, 2, 3, 2, 4, 5, 6, 7, 2];
console.log(ar2.lastIndexOf(2)); // 9
