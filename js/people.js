let people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

// darydami uzduotis nekeiciame orginalo iskyrus 8-9 uzduotis

//? 1. atspausdinti visus vyrus
people.forEach((pObj) => {
  if (pObj.sex === "male") {
    // console.log(pObj);
  }
});
//
// people.filter((pObj) => pObj.sex === 'male').forEach((pObj) => console.log(pObj));

//? 2. konsoleje atspausdinti visas moteris jaunesnes nei 35 metai

//? 3. atrinkti i nauja masyva visus žmones kurie turi mašinas
const driversArr = people.filter((pObj) => pObj.hasCar === true);
// const driversArrK = people.filter(({ hasCar }) => hasCar);

console.log(
  "driversArr ===",
  driversArr.map(({ name }) => name)
);
//? 4. i nauja masyva atrinkti susituokusiu zmoniu vardus

//? 5. i nauja masyva atrinkti vairuojanciu zmoniu lytis.

//? 6. su funkcija grazinti objekta kuriame butu fairuojanciu vyru ir moteru kiekiai
// pvz {vyrai: 4, moterys: 3}

//? 7. grazinti nauja masyva kuriame butu tik lytis ir pajamos. Tada suskaiciuoti vidurki pagal lyti.

//? 8. grazinti nauja masyva pridedant prie kiekvieno objekto id savybe kuri bus didejanti nuo p_01
//? 8.1 persikopijuoti kad orginalas butu su id reiksmem

//? 9. sukurti funkcija kuri gaudama id istrina ta masyvo elementa. deletPerson(p_02)

//? 10. parasyti funkcija kuri sukuria ir grazina viena zmogaus kortele tokiu pavidalu
`
  <article class="card">
    <h3>Severija Piktutytė</h3>
    <h4>26 metu moteris</h4>
    <p>atlyginimas: 1300 eur</p>
    <p class=""><i class="fa fa-car" aria-hidden="true"></i></p>
  </article>
  `;
// jei vaiduorja masinos ikona zalia, jei ne raudona
