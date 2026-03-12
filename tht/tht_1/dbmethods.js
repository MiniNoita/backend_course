const conn = require('./dbconnection');

const Dbmethods = {
  addStudent(student, callback) {
    const allowedList = ['studentcode', 'name', 'email', 'studypoints'];

    const filteredData = Object.keys(student)
      .filter((key) => allowedList.includes(key))
      .reduce((obj, key) => {
        obj[key] = student[key];
        return obj;
      }, {});

    conn.query('INSERT INTO Students SET ?', filteredData, callback);
  },
  findAll(callback) {
    conn.query(`SELECT * FROM Students`, callback);
  },
  findBelowLimit(limit, callback) {
    conn.query(`SELECT * FROM Students WHERE studypoints < ?`, limit, callback);
  },
  deleteStudent() {},
  updatePoints() {},
  addGrade(studentcode, coursecode, grade, callback) {
    conn.query(
      'INSERT INTO Grades SET studentcode = ?, coursecode = ?, grade = ?',
      [studentcode, coursecode, grade],
      callback,
    );
  },
  addPoints(points, studentcode, callback) {
    conn.query(
      `UPDATE Students SET studypoints = studypoints + ? WHERE studentcode = ?`,
      [points, studentcode],
      callback,
    );
  },
  updateGrade() {},
};

//pitää exportaa jotta muut tiedostot löytävät tänne
module.exports = Dbmethods;
