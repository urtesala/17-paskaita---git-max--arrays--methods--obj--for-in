"use strict";
console.log("forIn.js");

const userObj = {
  name: "Severija",
  surname: "Piktutytė",
  sex: "female",
  age: 26,
  hasCar: true,
};

// ciklas per objekta
for (let key in userObj) {
  console.log("key ===", key);
  const value = userObj[key];
  console.log("value ===", value);
}

// gauti visu objekto key masyva
const keysArr = Object.keys(userObj);
console.log("keysArr ===", keysArr);

// gauti visus objekto values
const valuesArr = Object.values(userObj);
console.log("valuesArr ===", valuesArr);

// gauti keys ir values masyvu masyvo pavidalu
const keysValuesArr = Object.entries(userObj);
console.log("keysValuesArr ===", keysValuesArr);
