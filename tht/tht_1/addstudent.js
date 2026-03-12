const Dbmethods = require('./dbmethods');

const newStudent = {
  studentcode: 'a1234',
  name: 'Matti Meikäläinen',
  email: 'a1234@jamk.fi',
  studypoints: 105,
};

Dbmethods.addStudent(newStudent, (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result.affectedRows + ' records inserted');
});
