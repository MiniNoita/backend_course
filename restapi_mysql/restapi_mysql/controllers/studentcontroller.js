/*
Kontrolleri on olio, joka sisältää metodeja. Se tehty siksi, että
saadaan erotettua reitit ja tietokantahakujen sovelluslogiikka toisistaan.
Se on siis arkkitehtuuriratkaisu. Eli saamme aikaan järkevämmän arkkitehtuurin
kun jaamme eri asioita tekevän koodin eri tiedostoihin ja kansioihin.

Kaikkien metodien parametreina ovat request (pyyntö) ja response (vastaus) -oliot.
Ne ovat välttämättömiä Node web-sovelluksessa, sillä niillä toteutetaan
sovelluksen HTTP-protokollan käyttö, eli tiedon vastaanotto ja lähetys.
*/
import conn from '../dbconnection.js';

const StudentController = {
  
  // 1) findAll -metodi hakee kaikki opiskelijat
  async findAll(req, res) {
    try {
      const result = await conn.query('select * from Students');
      res.json(result[0]);
    } catch (error) {
      console.log(error);
    }
  },

  /* 2) addStudent -metodi lisää uuden opiskelijan tietokantaan.
  Data joka lisätään eli postataan kantaan tulee post-metodin pyynnössä
  eli requestissa clientiltä eli asiakassovellukselta, esim. Postmanilta */
  async addStudent(req, res) {
    try {
      const result = await conn.query(
        'insert into Students set studentcode = ?, name = ?, email = ?, studypoints = ?',
        [
          req.body.studentcode,
          req.body.name,
          req.body.email,
          req.body.studypoints,
        ],
      );
      res.json(result[0]);
    } catch (err) {
      console.error('Virhe opiskelijan lisäämisessä:', err);
    }
  },
  // Tähän lisää metodeja, esim. findById, updateStudent, deleteStudent, addGrade jne.
};

export default StudentController;
