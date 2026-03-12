const Dbmethods = require('./dbmethods');

Dbmethods.updateGrade(3, 'a1234', '3002', (err, result) => {
  if (err) throw err;

  console.log(result.affectedRows + ' records have been updated');
});
