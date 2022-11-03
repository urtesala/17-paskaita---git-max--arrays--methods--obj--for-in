"use strict";
console.log("main.js");

const numbers = [1, 2, 3, 5.4, 8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];

//? 1. atrinkti skaicius didesnius uz 3 => filter

const filteredNums = numbers.filter((sk) => sk > 3);
console.log("filteredNums ===", filteredNums);

//?1.1 parasyti funcija kuri priima argumentu sk uz kuri didesnes reiksmes norime grazinti is
//argumentu gauto masyvo

// function moreThan(limit, arr) {
//   const filtered = arr.filter((sk) => sk > limit);
//   return filtered;
// }
// console.log("moreThan(1, [8, 2, -5]); ===", moreThan(1, [8, 2, -5]));

//^GERIAU

const moreThan = (limit, arr) => arr.filter((sk) => sk > limit);
console.log("moreThan(1, [8, 2, -5]); ===", moreThan(1, [8, 2, -5]));

//? 2. grazinti nauja masyva su padvigubintom reiksmem? => map

const doubles = numbers.map((sk) => sk * 2);
console.log("doubles ===", doubles);

//? 3. gauti neigiamu reiksmiu bendra suma => filter => reduce

const negativeTotal = numbers
  .filter((sk) => sk < 0)
  .reduce((total, sk) => total + sk, 0);
console.log("negativeTotal ===", negativeTotal);

//? 4. suzinoti ar yra sk 5 musu numbers masyve? => includes

const isThereAFive = numbers.includes(5);
console.log("isThereAFive ===", isThereAFive);

//? 5. konsoleje atspausdinti visas reiksmes su indexais => forEach

numbers.forEach((sk, i) => console.log(`index ${i}, reiksme ${sk}`));

//^ 6. every - grazina true jei vidine funkcija visais atvejais grazina true
//? ar visi el numbers yra skaiciai?
const allNums = numbers.every((sk) => typeof sk === "number");
console.log("allNums ===", allNums);

//?ar visi yra teiiami?
const allNumsPositives = numbers.every((sk) => sk > 0);
console.log("allNums ===", allNumsPositives);

//^ 7. some - ar nors vienas elementas atitinka salyga

//? ar yra nors vienas string tipo elementas masyve?

const isThereAString = numbers.some((sk) => typeof sk === "string");
console.log("isThereAString ===", isThereAString);
