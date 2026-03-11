const conn = require('./dbconnection');

const Dbmethods = {
  addStudent(student, callback) {
    const allowedList = ['studentcode', 'name', 'email', 'studypoints'];

    const filteredData = Object.keys(student).filter((key) =>
      allowedList.includes(key),
    );
    conn.query('INSERT INTO Students SET ?', student, callback);
  },
  findAll() {
    conn.query(`SELECT * FROM Students`, (err, rows) => {
      if (err) throw err;

      console.log('Data received from Db:');
      console.log(rows);
    });
  },
  findBelowLimit(limit) {
    conn.query(
      `SELECT * FROM Students WHERE studypoints < ${limit}`,
      (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.log(rows);
      },
    );
  },
  deleteStudent() {},
  updatePoints() {},
  addGrade() {},
  updateGrade() {},
};

//pitää exportaa jotta muut tiedostot löytävät tänne
module.exports = Dbmethods;
