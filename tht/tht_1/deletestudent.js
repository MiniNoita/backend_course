const Dbmethods = require('./dbmethods');

const deleteThisStudent = 'a1234';

//ensin poistetaan opiskelijan arvosanat
Dbmethods.deleteGrade(deleteThisStudent, '3002', (err, result) => {
  if (err) throw err;

  console.log(`Deleted ${result.affectedRows} row(s)`);
});

Dbmethods.deleteStudent(deleteThisStudent, (err, result) => {
  if (err) throw err;

  console.log(`Deleted ${result.affectedRows} row(s)`);
});
