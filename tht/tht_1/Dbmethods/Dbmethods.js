const conn = require('./dbconnection');

/*
 * Noden mysql2-kirjasto toimii aivan samalla tavalla kuin vanhempi mysql-kirjaso.
 * Edelleen virheenkäsittely ja tuloksen talteenotto voidaan tehdä callbackissa.
 * Uutena piirteenä on mahdollisuus palauttaa nämä myös promisena.
 */

// Dbmethods on olio, jonka sisällä on funktioita, eli olion metodeita
const Dbmethods = {
	
  /* Vanha ES5-standardin mukainen merkintätapa, jossa olion sisällä oleva
     funktio esitetään avain-arvo -parina, jotka on erotettu kaksoispistellä. 
	 Callback on anonyymi funktio jolla käsitellään kyselyn tulos. Se luodaan 
	 tiedostoon jossa tämä metodi suoritetaan (addsstudent.js)
  */
  /*
    addStudent: function (studentcode, name, email, studypoints, callback) {
     return conn.query(
      'insert into Students set studentcode = ?, name = ?, email = ?, studypoints = ?',
      [studentcode, name, email, studypoints],
      callback
    );
  }, 
  */
  
  /*
    Uudempi ES6-merkintätapa on hieman yksinkertaisempi. Käytetään tätä.
    Callback on anonyymi funktio jolla käsitellään kyselyn tulos. Se luodaan
    tiedostoon jossa tämä metodi suoritetaan (addstudent.js). Myöskään return
    -avainsanaa ei välttämättä tarvita conn.query -metodikutsun edessä, ellei
    tarkoituksena ole ottaa talteen query-metodin palauttamaa tietoa kyselyn
    onnistumisesta. Käytännössä callbackissa oleva virheenkäsittely ajaa saman 
    asian.
  */

  addStudent(studentcode, name, email, studypoints, callback) {
     conn.query(
      'insert into Students set studentcode = ?, name = ?, email = ?, studypoints = ?',
      [studentcode, name, email, studypoints],
      callback
    );
  },
  // Tee tähän muut metodit
};
module.exports = Dbmethods;


/*
 
 // promiseja käytettäessä metodikirjasto (Dbmethods.mjs) voisi näyttää tältä:
 
 
 import conn from './dbconnection.mjs';

const Dbmethodsp = {

  async addStudent(studentcode, name, email, studypoints) {
    return await conn.query(
      'insert into Students set studentcode = ?, name = ?, email = ?, studypoints = ?',
      [studentcode, name, email, studypoints],
    );
  },
  // Tee tähän muut metodit
};
export default Dbmethodsp;
 
*/
