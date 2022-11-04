let people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
    id: "p_01",
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
    id: "p_02",
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    id: "p_03",
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
    id: "p_04",
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
    id: "p_05",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: "p_06",
  },
];

const mainObj = {
  nums: [1, 2, 5],
  avg: function () {
    console.log(this.nums);
  },
};
mainObj.avg();

// taikomes
const pplContainer = document.getElementById("people-container");

// darydami uzduotis nekeiciame orginalo iskyrus 8-9 uzduotis

// 1. atspausdinti visus vyrus
people.forEach((pObj) => {
  if (pObj.sex === "male") {
    // console.log(pObj);
  }
});
//
// people.filter((pObj) => pObj.sex === 'male').forEach((pObj) => console.log(pObj));

// 2. konsoleje atspausdinti visas moteris jaunesnes nei 35 metai

// 3. atrinkti i nauja masyva visus žmones kurie turi mašinas
const driversArr = people.filter((pObj) => pObj.hasCar === true);
// const driversArrK = people.filter(({ hasCar }) => hasCar);

console.log(
  "driversArr ===",
  driversArr.map(({ name }) => name)
);
// 4. i nauja masyva atrinkti susituokusiu zmoniu vardus
// filter => map
const marriedNamesArr = people
  .filter(({ married }) => married)
  .map(({ name }) => name);
console.log("marriedNamesArr ===", marriedNamesArr);

// 5. i nauja masyva atrinkti vairuojanciu zmoniu lytis.

// 6. su funkcija grazinti objekta kuriame butu fairuojanciu vyru ir moteru kiekiai
// pvz {vyrai: 4, moterys: 3}

function getMalesFemales() {
  const rez = {
    vyrai: people.filter((pObj) => pObj.sex === "male").length,
    moterys: people.filter((pObj) => pObj.sex === "female").length,
  };
  return rez;
}
console.log("getMalesFemales() ===", getMalesFemales());

// 7. grazinti nauja masyva kuriame butu tik lytis ir pajamos. Tada suskaiciuoti vidurki pagal lyti.

// 8. grazinti nauja masyva pridedant prie kiekvieno objekto id savybe kuri bus didejanti nuo p_01
const peopleWithId = people.map((pObj, i) => {
  const localCopyPObj = { ...pObj };
  localCopyPObj.id = "p_" + (i + 1).toString().padStart(2, "0");
  return localCopyPObj;
});

// console.log('peopleWithId ===', peopleWithId);
// 8.1 persikopijuoti kad orginalas butu su id reiksmem

// 9. sukurti funkcija kuri gaudama id istrina ta masyvo elementa. deletPerson(p_02)

function deletePerson(id) {
  people = people.filter((pObj) => pObj.id !== id);
  console.log(
    "people after delete ===",
    people.map(({ name }) => name)
  );
  renderList(people, pplContainer);
}

// 10. parasyti funkcija kuri sukuria ir grazina viena zmogaus kortele tokiu pavidalu
`
  <article class="card">
    <h3>Severija Piktutytė</h3>
    <h4>26 metu moteris</h4>
    <p>atlyginimas: 1300 eur</p>
    <p class=""><i class="fa fa-car" aria-hidden="true"></i></p>
  </article>
  `;
// jei vaiduorja masinos ikona zalia, jei ne raudona

function makePerson({ name, surname, sex, age, income, hasCar, id }) {
  const articleEl = document.createElement("article");
  articleEl.className = "card";
  articleEl.dataset.pId = id;
  articleEl.innerHTML = `
    <h3>${name} ${surname}</h3>
    <h4>${age} metu ${sex === "male" ? "vyras" : "moteris"}</h4>
    <p>atlyginimas: ${income} eur</p>
    <p class="driver-icon ${
      hasCar ? "driver" : ""
    }"><i class="fa fa-car fa-3x" aria-hidden="true"></i></p>
    `;
  // <button id="delete">delete</button>
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "delete me";
  articleEl.append(buttonEl);
  buttonEl.addEventListener("click", () => deletePerson(id));
  // nusitaikyti ir uzdeti event listeneri mygtukui
  return articleEl;
}
// console.log('makePerson(people[0]) ===', makePerson(people[0]));
// 11. sukurti funkcija renderList(data) kuri is dataArr sugeneruoja elementus su 10pratimo funkcija ir patalpina juos i `<div id="people-container" class="people-container">`

function renderList(arr, dest) {
  //
  const htmlElsFromArr = arr.map(makePerson);
  console.log("htmlElsFromArr ===", htmlElsFromArr);
  dest.innerHTML = "";
  htmlElsFromArr.forEach((el) => dest.append(el));
  // [el, el, el] => ...htmlElsFromArr => el, el, el
  // dest.append(...htmlElsFromArr);
}
renderList(people, pplContainer);

// 12. su 11to pratimo funkcija rikiuojam ir atrenkam elementus i sarasa mygtuku paspaudimais.
`
    <button class='on'>Rodyti tik vyrus --ON</button>
    <button>Rodyti tik moteris</button>
    <button>isrikiuoti pagal pajamas</button>
    <button>isrikiuoti pagal amziu</button>
  `;
