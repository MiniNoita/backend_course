/*
 *  addstudent.js lisää uuden opiskelijan kantaan.
 * 
 * Noden mysql2-kirjasto toimii aivan samalla tavalla kuin vanhempi mysql-kirjaso.
 * Edelleen virheenkäsittely ja tuloksen talteenotto voidaan tehdä callbackissa.
 * Uutena piirteenä on mahdollisuus palauttaa nämä myös promisena.
 */
const Dbmethods = require('./Dbmethods');


Dbmethods.addStudent(
  'z1234',
  'Zossi Opiskelija',
  'z1234@jamk.fi',
  105,
  (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result.affectedRows + ' records inserted');
  }
);

/*

// promisella toteutettuna (addstudent.mjs):


import Dbmethods from './Dbmethods.mjs';

try {
  const result = await Dbmethods.addStudent(
    'w1234',
    'Wossi Opiskelija',
    'w1234@jamk.fi',
    10,
  );

  console.log(result);

} catch (err) {
   throw err;
}










*/ 
