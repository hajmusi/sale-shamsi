// Fundamental
// Date Object
// let person = {
//   fullName: "Amir Hossein Khateri",
//   birthday: 2013,
//   today: new Date().getFullYear(),
// };

// let now = new Date();
// console.log(now);
// console.log(now.getDay()); // Roze Hafte
// console.log(now.getMonth() - 10); // mah
// console.log(now.getFullYear() - 621); // gereftane Sal

// console.log(person);

// Ex : Chand Salete?
// function chandSalete(senet){
//     let userDate = senet
//     let now = new Date().getFullYear()
//     let natije = now - userDate
//     console.log(natije);
// }

// chandSalete(2022)

// Algoritm
// 0. Shoro
// 1. Sene Karbar Ro Be Miladi Gereftim va variz kardim be userDate
// 2. Sale Hale Hazer Ro bedast Miarim va mirizim dar moteghayeri be esme NOW
// 3. now - userDate va natije ro mirizim dar Natije
// 4. natije ro be karbar neshon midim
// 5. payan

function chandSalete(senet) {
  let userDate = senet;
  let sal = new Date().getFullYear() - 621;
  let mah = new Date().getMonth() - 11;
  let ruz = new Date().getDay - 41;
  let natije = sal - userDate;

  console.log(natije);
}

chandSalete(1389);

// function chandSalete(senet) {
//   let userDate = senet;

//   let mah = new Date().getMonth() - 6;
//   let ruz = new Date().getDay - 41;
//   let natije = mah - userDate;

//   console.log(natije);
// }

// chandSalete(11);

// function chandSalete(senet) {
//   let userDate = senet;

//   let ruz = new Date().getDay - 41;
//   let natije = ruz - userDate;

//   console.log(natije);
// }

// chandSalete(29);
