"use strict";
console.log("pr1.js");

const numbers = [
  1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45,
];

const nums2 = [2, 5, -10, "one", true, 7, "two", 1];

//? 1. numbers masyvo atrinkti ir grazinti tik sveikuosius skaicius

const positiveNums = numbers.filter((sk) => sk > 0);
console.log("positiveNums ===", positiveNums);

//? 2. susumuoti visa numbers masyva.

const numbersTotal = numbers.reduce((total, sk) => total + sk, 0);
console.log("numbersTotal ===", numbersTotal);

//? 3. Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 1}
//   {index: 1, reiksme: 2}
//    ...
// ]

const arrOfObj = numbers.map((sk, i) => {
  const objFromSk = { index: i, reiksme: sk };
  return objFromSk;
});
console.log("arrOfObj ===", arrOfObj);

//? 4. grazinti nauja masyva su Suapvalintom reikšmem iki sveikų skaičių

const roundedArr = numbers.map((sk) => Math.round(sk));
console.log("roundedArr ===", roundedArr);

//? 5. isrikiuoti numbers masyva nuo didziausio iki maziausio
const highToLow = numbers.sort((a, b) => b - a);
console.log("highToLow ===", highToLow);

//? 6. is nums2 masyvo atrinkti tik skaiciu masyva ir grazinti jo vidurki

const onlyNums = nums2.filter((sk) => typeof sk === "number");
let total = 0;
onlyNums.forEach((sk) => {
  total += sk;
});
const avg = total / onlyNums.length;
console.log("avg ===", avg);

//? 7. patiktinti ar nums2 masyve yra elementu kurie butu ne skaiciau ir ne string tipo.

const notNumNotString = numbers.every(
  (sk) => sk !== "string" && sk !== "number"
);
console.log("notNumNotString ===", notNumNotString);
