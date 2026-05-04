/*
Kontrolleri on olio, joka sisältää metodeja. Se tehty siksi, että
saadaan erotettua reitit ja tietokantahakujen sovelluslogiikka toisistaan.
Se on siis arkkitehtuuriratkaisu. Eli saamme aikaan järkevämmän arkkitehtuurin
kun jaamme eri asioita tekevän koodin eri tiedostoihin ja kansioihin.
*/

import Student from '../models/Student.js'; // haetaan model

// Tietokannan käsittelymetodit tehdään olion sisään
const StudentController = {
  /* 1) findAll -metodi hakee kaikki opiskelijat
  Student-modelin find-metodilla */
  async findAll(req, res) {
    const students = await Student.find().catch((err) => {
      console.log(err);
    });
    // saadaan students-taulukko
    console.log(students);
    // response eli vastaus on json-muotoinen
    res.json(students);
  },
  async findById(req, res) {
    try {
      //Mongoose-kantaoperaatio tänne
      const student = await Student.findOne({ _id: req.params.id }).catch(
        (err) => {
          throw err;
        },
      );
      res.json(student);
    } catch (err) {
      throw err;
    }
  },
  async findByStudentCode(req, res) {
    try {
      const student = await Student.findOne({
        studentcode: req.params.studentcode,
      }).catch((err) => {
        throw err;
      });

      res.json(student);
    } catch (err) {
      throw err;
    }
  },
  async addStudent(req, res) {
    try {
      //Mongoose-kantaoperaatio tänne
      const newStudent = await Student.create(req.body);

      console.log('Document inserted: ' + newStudent);

      res.json(newStudent);
    } catch (err) {
      throw err;
    }
  }, //jne...
};

export default StudentController;

/*
students.js -reittitiedostossa kontrollerin metodia kutsutaan tällä tavalla:
 
router.get('/', StudentController.findAll);
 
jolloin kaikki opiskelijat saadaan JSON-muodossa osoitteesta http://localhost:3000/students/

*/
