const Dbmethods = require('./dbmethods');

Dbmethods.addStudent((err, result) => {
  if (err) {
    throw err;
  }
  console.log(result.affectedRows + ' records inserted');
});
